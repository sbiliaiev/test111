const jwt = require('jsonwebtoken'),  
      crypto = require('crypto'),
      User = require('../models/user'),
      config = require('../config/main');

function generateToken(user) {  
	return jwt.sign(user, config.secret, {
		expiresIn: 10080 // in seconds
	});
}

// Set user info from request
function setUserInfo(request) {  
	return {
		_id: request._id,
		firstName: request.profile.firstName,
		lastName: request.profile.lastName,
		email: request.email,
		role: request.role,
	};
}

function getUserInfo(request) {
	console.log('REQUEST_USER', request.user);  
	return {
		email: request.email,
		password: request.password,
	};
}

//========================================
// Login Route
//========================================
module.exports.login = function(req, res, next) {
	console.log('login executed');
	console.log('REQUEST_BODY', req.body);	
	// console.log('REQUEST_BODY_PARSED', JSON.parse(req.body));	
	console.log('REQUEST_USER', req.body.user);	
	console.log('REQUEST_EMAIL', req.body.email);	
	console.log('REQUEST_PASSWORD', req.body.password);	
	// console.log(res);	

	let userInfo = getUserInfo(req.body);

	res.status(200).json({
		token: 'JWT ' + generateToken(userInfo),
		user: userInfo
	});
}


//========================================
// Registration Route
//========================================
module.exports.register = function(req, res, next) {  
	console.log('register executed');
	// Check for registration errors
	const email = req.body.email;
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const password = req.body.password;

	console.log('email', email);
	console.log('firstName', firstName);
	console.log('lastName', lastName);
	console.log('password', password);

	// Return error if no email provided
	if (!email) {
		return res.status(422).send({ error: 'You must enter an email address.'});
	}

	// Return error if full name not provided
	if (!firstName || !lastName) {
		return res.status(422).send({ error: 'You must enter your full name.'});
	}

	// Return error if no password provided
	if (!password) {
		return res.status(422).send({ error: 'You must enter a password.' });
	}

	User.findOne({ email: email }, function(err, existingUser) {
		if (err) { return next(err); }

		// If user is not unique, return error
		if (existingUser) {
			return res.status(422).send({ error: 'That email address is already in use.' });
		}

		// If email is unique and password was provided, create account
		let user = new User({
			email: email,
			password: password,
			profile: { firstName: firstName, lastName: lastName }
		});

		user.save(function(err, user) {
			if (err) { return next(err); }

			// Subscribe member to Mailchimp list
			// mailchimp.subscribeToNewsletter(user.email);

			// Respond with JWT if user was created

			let userInfo = setUserInfo(user);

			res.status(201).json({
			token: 'JWT ' + generateToken(userInfo),
			user: userInfo
			});
		});
	});
}

//For some added fun, we can prepare the authorization/role check handler too:

//========================================
// Authorization Middleware
//========================================

// Role authorization check
module.exports.roleAuthorization = function(role) {  
	return function(req, res, next) {
		const user = req.user;

		User.findById(user._id, function(err, foundUser) {
		if (err) {
			res.status(422).json({ error: 'No user was found.' });
			return next(err);
		}

		// If user is found, check role.
		if (foundUser.role == role) {
			return next();
		}

		res.status(401).json({ error: 'You are not authorized to view this content.' });
			return next('Unauthorized');
		})
	}
}