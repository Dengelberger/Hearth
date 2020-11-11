const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemorySchema = new Schema({
	created_by: {
		type: Schema.Types.ObjectId,
		ref: "User"
	  },
	title: String,
	text: String,
});

const Memory = mongoose.model("Memory", MemorySchema);

module.exports = Memory;