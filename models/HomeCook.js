const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomeCookSchema = new Schema({
	name: String,
	created_by: {
		type: Schema.Types.ObjectId,
		ref: "User"
	  },
	authorized: Array,
	picture: String,
	bio: String,
	recipe_list: Array
});

const HomeCook = mongoose.model("HomeCook", HomeCookSchema);

module.exports = HomeCook;