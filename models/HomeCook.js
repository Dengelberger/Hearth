const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomeCookSchema = new Schema({
	name: String,
	created_by: String,
	authorized: String,
	picture: URL,
	bio: String,
	recipe_list: Array
});

const HomeCook = mongoose.model("HomeCook", HomeCookSchema);

module.exports = HomeCook;