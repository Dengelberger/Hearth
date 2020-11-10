const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes/APIRouter");
const app = express();
const PORT = process.env.PORT || 3001;

const { cloudinary } = require("./client/src/utils/cloudinary")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

app.post('/api/upload', async (req,res) => {
  console.log("yay")
  // console.log(req.body)
  try{
    const fileStr = req.body.data;

    const uploadedResponse = await cloudinary.uploader.upload(fileStr, { folder: "Hearth/" })
    console.log(uploadedResponse);
    res.json(uploadedResponse)
  } catch (error) {
    console.error(error)
  }
})

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hearth");

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
