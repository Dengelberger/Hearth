const mongoose = require("mongoose");
const db = require("../models");
import { Seeder } from 'mongoose-data-seed';

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hearth", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const user  = [
  {
    username: "Deege",
    password: "mysecretpw1234",
    first_name: "Donna",
    last_name: "Engelberger",
    picture: "https://res.cloudinary.com/dofb2p06j/image/upload/v1604608956/MyBioPic2_aw0aps.jpg",
    homecooks: Array,
    favorited: Array,
    date: new Date(Date.now())
  }

];

db.user
  .remove({})
  .then(() => db.User.collection.insertMany(userSeeder))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// const HomeCookSeed = [
//   {
//     name: "Elvira Engelberger",
//     created_by: user_id,
//     authorized: user_id,
//     picture: "https://res.cloudinary.com/dofb2p06j/image/upload/v1604770991/Hearth/Elvira_Engelberger_jyihti.jpg",
//     bio: "Elvira was born and raised in Mannheim, Germany in the 1930s and 1940s. She married Fred Engelberger and moved to the United States in May of 1954.  Many of her recipes were never written down, while there are a few gems.  She was one of the best home cooks out there. Elvira passed away in November 2016, but her spirit lives on in those she inspired and taught to cook.",
//     recipe_list: Array, 
//       date: new Date(Date.now())
//   },
//   {
//     name: "Margaret Komosinski",
//     created_by: user_id,
//     authorized: user_id,
//     picture: "https://res.cloudinary.com/dofb2p06j/image/upload/v1604771008/Hearth/Margaret_Komosinski_zkdjwd.jpg",
//     bio: "Aunt Margaret was born in 1922 in Shenandoah, PA and married Boley Komosinski in the early 1940's. Uncle Boley was a caterer, but Aunt Margaret was a great home cook, carrying on the great Irish heritage from which she came.",
//     recipe_list: Array 
//       date: new Date(Date.now())
//   }
// ];

// db.HomeCook
//   .remove({})
//   .then(() => db.HomeCook.collection.insertMany(HomeCookSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

// const RecipeSeed = [{
//   created_by_id: Number,
// 	home_cook_id: Number,
// 	title: String,
// 	categories: [{
// 		Breakfast, 
// 		Lunch,
// 		Dinner,
// 		Appetizer, 
// 		Dessert
// 	}],
// 	main_image: String,
// 	second_images: [{
// 		image_02: String,
// 		image_03: String
// 	}],
// 	ingredients: [{
// 		ingredient_1: String,
// 		ingredient_2: String,
// 		ingredient_3: String,
// 		ingredient_4: String,
// 		ingredient_5: String,
// 		ingredient_6: String,
// 		ingredient_7: String,
// 		ingredient_8: String,
// 		ingredient_9: String
// 	}],
// 	instructions: String,
// 	isPrivate: Boolean,
//   date: new Date(Date.now())
//         }
//       ];

// db.Recipe
//   .remove({})
//   .then(() => db.Recipe.collection.insertMany(RecipeSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
