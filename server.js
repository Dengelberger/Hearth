const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan")
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const passport = require("./passport")
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

const mongoose = require("mongoose");
mongoose.Promise = global.Promise

const userRoutes = require("./passport/passportRoutes")
const routes = require("./routes/APIRouter");

const db = require("./models");

const { cloudinary } = require("./client/src/utils/cloudinary")

// Define middleware here
app.use(morgan('dev'))
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hearth");

app.use(
  session({
    secret: 'funinthesun',
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false, //required
    saveUninitialized: false //required
  })
  );
  
  // Passport
  app.use(passport.initialize())
  app.use(passport.session()) // calls the deserializeUser
  
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Add routes, both API and view
app.use(routes);
app.use(userRoutes)


// API ROUTES FOR CLOUDINARY / IMAGE UPLOADS
app.post('/api/upload', async (req, res) => {
  // console.log(req.body)
  try {
    const fileStr = req.body.data;

    const uploadedResponse = await cloudinary.uploader.upload(fileStr, { folder: "Hearth/" })
    res.json(uploadedResponse)
  } catch (error) {
    console.error(error)
  }
})
//====================================================



app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
