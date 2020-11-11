const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hearth", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const userSeeder  = [
  {
    username: "Deege",
    password: "mysecretpw1234",
    first_name: "Donna",
    last_name: "Engelberger",
    picture: 'http://res.cloudinary.com/desmvec4u/image/upload/v1605029781/IMG_20201107_080210487.jpg',
    homecooks: Array,
    favorited: Array,
    date: new Date(Date.now())
  }
];

db.User
  .deleteMany({})
  .then(() => db.User.collection.insertMany(userSeeder))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const HomeCookSeed = [
  {
    name: "Elvira Engelberger",
    picture: "https://res.cloudinary.com/dofb2p06j/image/upload/v1604770991/Hearth/Elvira_Engelberger_jyihti.jpg",
    bio: "Elvira was born and raised in Mannheim, Germany in the 1930s and 1940s. She married Fred Engelberger and moved to the United States in May of 1954.  Many of her recipes were never written down, while there are a few gems.  She was one of the best home cooks out there. Elvira passed away in November 2016, but her spirit lives on in those she inspired and taught to cook."
  },
  {
    name: "Margaret Komosinski",
    picture: "https://res.cloudinary.com/dofb2p06j/image/upload/v1604771008/Hearth/Margaret_Komosinski_zkdjwd.jpg",
    bio: "Aunt Margaret was born in 1922 in Shenandoah, PA and married Boley Komosinski in the early 1940's. Uncle Boley was a caterer, but Aunt Margaret was a great home cook, carrying on the great Irish heritage from which she came.",
  }
];

db.HomeCook
  .remove({})
  .then(() => db.HomeCook.collection.insertMany(HomeCookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const RecipeSeed = [{
	title: "Rice Pudding",

  category: "Dessert",
  
	main_image: "https://res.cloudinary.com/dofb2p06j/image/upload/v1604771018/Hearth/rice_pudding_b3zxtb.jpg",
	second_images: ["https://res.cloudinary.com/dofb2p06j/image/upload/v1604771020/Hearth/rice_pudding_recipe_zop1vp.jpg"
  ],
	ingredients: [
		"1/2 cup rice",
		"1 1/2 cups water",
		"1/2 tsp salt",
		"3 cups milk",
    "3/4 cup sugar",
    "1/2 tsp vanilla",
    "dash of nutmeg",
		"2 eggs",
    "cinnamon (optional)",
    "raisins (optional)"
	],
	instructions: ["Bring water to a boil. Add rice and cook until water is absorbed.", "Add milk, sugar, nutmeg, and vanilla. Bring back to a boil, reduce heat, and let simmer about 35 minutes or until mixture has thickened.", "Beat eggs and blend with rice mixture along with nutmeg.", "Pour into casserole dish or dessert dishes and add cinnamon, if desired. Refrigerate 1-2 hours to cool and set."],
	isPrivate: true
}];

db.Recipe
  .remove({})
  .then(() => db.Recipe.collection.insertMany(RecipeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  const MemorySeed = [
    {
      title: "Dad's Favorite",
      text: "This recipe was modified from one from my Dad's mother, my grandmother. Mom made it richer and creamier, and it was my Dad's favorite dessert.  Mom never added raisins, but many people like it that way."
    },
    {
      title: "A Cursillo Dessert",
      text: "Whenever I attended our local Cursillo gatherings I would bring a batch (or sometimes double- or triple-batch) of Mom's rice pudding. Two of my Cursillo brothers, Michael and Gary, would banter back and forth over who was actually going to take the lion's share of the dessert and leave nothing for the others. Mom always made it for me to take, of course.  I think I eventually traded Michael's wife, Mary, this recipe for one of hers so that Michael could have it any time he wanted."
    }
  ];
  
  db.Memory
    .remove({})
    .then(() => db.Memory.collection.insertMany(MemorySeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
