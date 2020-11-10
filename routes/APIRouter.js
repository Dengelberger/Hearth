const router = require("express").Router();
const user = require("../controllers/UserController");
const homeCook = require("../controllers/HomeCookController");
const recipe = require("../controllers/RecipeController");
const memory = require("../controllers/MemoryController");


// USER ROUTES:

// Matches with "/api/user"
router.route("/")
// Create a user email, password, and picture
// Create a user list of home cooks
// Create a user list of favorited recipes
.post(user.create)  
// Search for user by full name (JOIN)
// Search all users by full name (JOIN)
  .get(user.findAll)
// Update a user password
// Update a user picture
// Update user list of home cooks
// Update user list of favorited recipes  
  .put(user.update);


// HOME COOK ROUTES:

// Matches with "/api/homeCook"
router.route("/")
// Create a home cook name, picture, and bio
// Create a home cook list of recipes
.post(homeCook.create)  
// Search for a home cook by name
.get(homeCook.findAll)
// Update a home cook name
// Update a home cook picture
// Update a home cook bio
// Update a home cook recipe list
.put(homeCook.update)
// Delete a home cook 
.delete(homeCook.remove);

// RECIPES ROUTES:

//Matches with "/api/recipe"
router.route("/")
// Create a recipe title, home cook id, category, photos, ingredients, instructions, and privacy rule
.post(recipe.create)
// Search for a recipe by title
// Search for a recipe by category
// Search for a recipe by home cook
.get(recipe.findAll)
// Update a recipe title
// Update a recipe home cook id
// Update a recipe category
// Update a recipe main photo
// Update a recipe second photo
// Update a recipe ingredient list
// Update a recipe instructions
// Update a recipe privacy rule
.put(recipe.update)
// Delete a recipe
// Delete a recipe photo
// Delete a recipe ingredient list
// Delete a recipe instructions
.delete(recipe.remove);

// MEMORY ROUTES:

//Matches with "api/memory"
router.route("/")
// Create a memory title, text, and recipe id
.post(memory.create)
//Search for a memory for a certain recipe
.get(memory.findAll)
// Update a memory title
// Update a memory text
.put(memory.update)
// Delete a memory
.delete(memory.remove);

//================================================
// CLOUDINARY AJAX CALL
//=================================================
// function getPictures () {

//   var queryURL = "cloudinary://927986391515486:gLoe4LZ7yTVPZmdyJC9Pz-HrlOQ@dofb2p06j";

//   // AJAX CALL FOR CLOUDINARY PICTURES
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function (pictureData) {

//     console.log(pictureData);


// });

// }

module.exports = router;
//================================================
//CLOUDINARY CRUD METHODS:

// GET /resources/image
// Cloudinary::Api.resources

// GET /resources/image/upload/?prefix=sample
// Cloudinary::Api.resources(
//  :type => :upload,
//  :prefix => "sample")

// Cloudinary::Uploader.rename('old_name', 'new_name')

// Cloudinary::Uploader.destroy('sample')

// Cloudinary::Api.delete_resources(['image1', 'image2'])

// Cloudinary::Api.delete_resources_by_prefix('sunday')


//======================================================
// SAMPLE CODE FROM REVIEW:

// router.get("/recipes", (req, res) => {
//   // Use a regular expression to search titles for req.query.q
//   // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
//   db.Recipe.find({
//     title: { $regex: new RegExp(req.query.q, 'i')}
//   })
//     .then(recipes => res.json(recipes))
//     .catch(err => res.status(422).end());
// });