const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
	_id: Schema.Types.ObjectId,
	email: {type: String, required:true, unique:true}, 
	password: {type: String, required:true},
	first_name: String,
	last_name: String,
	picture: String,
	homecooks: Array,
	favorited: Array
});

UserSchema.plugin(passportLocalMongoose)

const User = mongoose.model("User", UserSchema);

module.exports = User;