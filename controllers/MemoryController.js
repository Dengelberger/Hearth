const db = require("../models");

module.exports = {
	findAll: (req, res) => {
		db.Memory
			.find({})
			.then(postData => {
				res.json(postData);
			})
			.catch(err => console.log(err));
	},
	findById: (req, res) => {
		db.Memory
			.findById(req.params.id)
			.then(postData => {
				res.json(postData)
			})
			.catch(err => console.log(err));
	},
	create: (req, res) => {
		db.Memory
			.create(req.body)
			.then(postData => {
			  res.json(postData)
			})
			.catch(err => console.log(err));
	},
	update: (req, res) => {
		db.Memory
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(postData => {
				res.json(postData)
			})
			.catch(err => console.log(err));
	},
	remove: (req, res) => {
		db.Memory
			.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(postData => {
				res.json(postData)
			})
			.catch(err => console.log(err));
	}
}