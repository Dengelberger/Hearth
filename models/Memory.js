const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemorySchema = new Schema({
	_id: Schema.Types.ObjectId,
	created_by: {
		type: Schema.Types.ObjectId,
		ref: "User"
	  },
	title: String,
	text: String,
});

const Memory = mongoose.model("Memory", MemorySchema);

module.exports = Memory;