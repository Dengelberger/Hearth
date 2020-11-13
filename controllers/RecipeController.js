const db = require("../models");

module.exports = {
	findAll: (req, res) => {
		db.Recipe
			.find({})
			.populate(['home_cook_id'])
			.then(postData => {
				res.json(postData);
			})
			.catch(err => console.log(err));
	},
	findById: (req, res) => {
		console.log("finding by id")
		db.Recipe
			.findById({_id : req.params.id})
			.populate(['home_cook_id'])
			.then(postData => {
				res.json(postData)
			})
			.catch(err => console.log(err));
	},
	create: (req, res) => {
		db.Recipe
			.create(req.body)
			.then(postData => {
			  res.json(postData)
			})
			.catch(err => console.log(err));
	},
	update: (req, res) => {
		db.Recipe
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(postData => {
				res.json(postData)
			})
			.catch(err => console.log(err));
	},
	remove: (req, res) => {
		db.Recipe
			.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(postData => {
				res.json(postData)
			})
			.catch(err => console.log(err));
	}
}