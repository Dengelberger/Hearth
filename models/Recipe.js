const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
	created_by_id: Number,
	home_cook_id: Number,
	title: String,
	last_name: String,
	categories: Array,
	main_image: URL,
	second_images: Array,
	ingredients: Array,
	instructions: Array,
	isPrivate: Boolean,
	password: String
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;