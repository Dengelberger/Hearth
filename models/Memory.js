const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemorySchema = new Schema({
	created_by: String,
	title: String,
	text: String,
	recipe_id: Number //foreign_key from Recipes(recipe_id)
});

const Memory = mongoose.model("Memory", MemorySchema);

module.exports = Memory;