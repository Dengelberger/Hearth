const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
	created_by: {
		type: Schema.Types.ObjectId,
		ref: "User"
	  },
	home_cook_id: {
		type: Schema.Types.ObjectId,
		ref: "HomeCook"
	  },
	homecook: String,
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
	is_private: Boolean,
	memories: [{
		type: Schema.Types.ObjectId,
		ref: "Memory"
	}]
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;