const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: String,
	password: String,
	first_name: String,
	last_name: String,
	picture: URL,
	homecooks: Array,
	favorited: Array
});

const User = mongoose.model("User", UserSchema);

module.exports = User;