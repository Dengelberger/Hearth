const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport")
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const routes = require("./routes/APIRouter");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");
const MongoStore = require('connect-mongo')(session);

const { cloudinary } = require("./client/src/utils/cloudinary")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser("funinthesun"));
app.use(passport.initialize()); 
app.use(passport.session()); 
require("./passportConfig")(passport);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// LOGIN ROUTES____________________

app.post("/api/login", (req, res, next) => {
  console.log(req.body.username)
  console.log(req.body.password)
  passport.authenticate("local", (err, user, info) => {
    // console.log(err + " + " + user + " + " + info);
    // console.log(JSON.stringify(info))
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        console.log("look here");
        console.log(req.user);
        res.send("Successfully Authenticated");
      });
    }
  })(req, res, next);
});

app.post("/api/register", (req, res) => {
  console.log("this is going")
  db.User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hashedPassword,
      };
      db.User.create(newUser, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.json(data);
        };
      });
    }
  });
});

// app.get("/api/user", (req, res, next) => {
//   console.log("some text")
//   res.send(req); 
// });

app.get('/api/user', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
      res.json({ user: req.user })
  } else {
      res.json({ user: null })
  }
})


// API ROUTES FOR CLOUDINARY / IMAGE UPLOADS
app.post('/api/upload', async (req,res) => {
  console.log("yay")
  // console.log(req.body)
  try{
    const fileStr = req.body.data;

    const uploadedResponse = await cloudinary.uploader.upload(fileStr, { folder: "Hearth/" })
    res.json(uploadedResponse)
  } catch (error) {
    console.error(error)
  }
})
//====================================================

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hearth");

app.use(
  session({
    secret: "funinthesun",
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
  })
);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
