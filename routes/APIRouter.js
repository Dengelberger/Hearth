const router = require("express").Router();
const user = require("../controllers/UserController");
const homeCook = require("../controllers/HomeCookController");
const recipe = require("../controllers/RecipeController");
const memory = require("../controllers/MemoryController");

// USER ROUTES WILL BE DONE ON SERVER.JS BECAUSE OF PASSPORT AND AUTHENTICATION

// HOME COOK ROUTES:

router.route("/api/homecook")
  .post(homeCook.create)
  .get(homeCook.findAll)
router.route("/api/homecook/:id")
  .get(homeCook.findById) //BY ID
  .put(homeCook.update)  //BY ID
  .delete(homeCook.remove);  //BY ID

// RECIPES ROUTES:

router.route("/api/recipe")
  .post(recipe.create)
  .get(recipe.findAll)
router.route("/api/recipe/:id")
  .get(recipe.findById) //BY ID
  .put(recipe.update)  //BY ID
  .delete(recipe.remove);  //BY ID 

// MEMORY ROUTES:  //LAST!!!!

router.route("/api/memory")
  .post(memory.create)
  router.route("/api/memory/:id")  
  .get(memory.findAll) //BY recipe ID
  .put(memory.update) //BY ID
  .delete(memory.remove); //BY ID

module.exports = router;