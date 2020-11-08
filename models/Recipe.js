const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
	created_by_id: Number,
	home_cook_id: Number,
	title: String,
	categories: [{
		Breakfast, 
		Lunch,
		Dinner,
		Appetizer, 
		Dessert
	}],
	main_image: String,
	second_images: [{
		image_02: String,
		image_03: String
	}],
	ingredients: [{
		ingredient_1: String,
		ingredient_2: String,
		ingredient_3: String,
		ingredient_4: String,
		ingredient_5: String,
		ingredient_6: String,
		ingredient_7: String,
		ingredient_8: String,
		ingredient_9: String
	}],
	instructions: String,
	isPrivate: Boolean,
	memories: {
		type: Schema.Types.ObjectId,
		ref: "Memory"}
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;