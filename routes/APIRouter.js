const router = require("express").Router();
const user = require("../controllers/UserController");
const homeCook = require("../controllers/HomeCookController");
const recipe = require("../controllers/RecipeController");
const memory = require("../controllers/MemoryController");


// USER ROUTES:  WE NEED TO DO THESE ON SERVER.JS BUT WE ALSO NEED PASSPORT/AUTHENTICATION

// Matches with "/api/user"
router.route("/") 
  // Create a user email, password, and picture
  // Create a user list of home cooks
  // Create a user list of favorited recipes
  .post(user.create)
  // Search for user by full name (JOIN)
  // Search all users by full name (JOIN)
  .get(user.findAll)
  // db.getCollection('users').find({})
  // Update a user password
  // Update a user picture
  // Update user list of home cooks
  // Update user list of favorited recipes  
  .put(user.update);  //BY ID


// HOME COOK ROUTES:

// Matches with "/api/homeCook"
router.route("/")
  // Create a home cook name, picture, and bio
  // Create a home cook list of recipes
  .post(homeCook.create)  //DONE ON SERVER.JS
  // Search for a home cook by name
  .get(homeCook.findAll)
  // db.getCollection('homecooks').find({})
  // // Update a home cook name
  // // Update a home cook picture
  // // Update a home cook bio
  // // Update a home cook recipe list
  .put(homeCook.update)  //BY ID
  // // Delete a home cook 
  .delete(homeCook.remove);  //BY ID

// RECIPES ROUTES:

//Matches with "/api/recipe"
router.route("/")
  // Create a recipe title, home cook id, category, photos, ingredients, instructions, and privacy rule
  .post(recipe.create)  //THIS ONE IS DONE ON SERVER.JS
  // Search for a recipe by title
  // Search for a recipe by category
  // Search for a recipe by home cook
  .get(recipe.findAll)
  // db.getCollection('recipes').find({})
  // Update a recipe title
  // Update a recipe home cook id
  // Update a recipe category
  // Update a recipe main photo
  // Update a recipe second photo
  // Update a recipe ingredient list
  // Update a recipe instructions
  // Update a recipe privacy rule
  .put(recipe.update)  //BY ID NUMBER
  // Delete a recipe
  // Delete a recipe photo
  // Delete a recipe ingredient list
  // Delete a recipe instructions
  .delete(recipe.remove);  //BY ID NUMBER

// MEMORY ROUTES:  //LAST!!!!

//Matches with "api/memory"
router.route("/")
  // Create a memory title, text, and recipe id
  .post(memory.create)
  //Search for a memory for a certain recipe
  .get(memory.findAll)
  // db.getCollection('memories').find({})
  // Update a memory title
  // Update a memory text
  .put(memory.update)
  // Delete a memory
  .delete(memory.remove);

module.exports = router;