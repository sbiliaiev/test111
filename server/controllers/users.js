const User = require('../models/user'),
      config = require('../config/main');

module.exports.getAll = function(req, res, next) {
	User.find({}, function(err, users) {
		console.log('HERE IS USERS', users);
		if (users && users.length > 0)
			return res.status(200).send(users);
		else
			return res.status(422).send({error: "Can't find any users"});
	})
};