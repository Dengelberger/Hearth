const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
	created_by_id: Number,
	home_cook_id: Number,
	title: String,

	category: {
		enum: [
			"General",
			"Breakfast",
			"Lunch",
			"Dinner",
			"Appetizer",
			"Dessert"
		],
		type: String
	},
	main_image: String,
	second_images: Array,
	ingredients: Array,
	instructions: Array,
	isPrivate: Boolean,
	memories: {
		type: Schema.Types.ObjectId,
		ref: "Memory"
	}
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;