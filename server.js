var reg_non_alphanumeric = /[^A-Za-z0-9]/;
var reg_password = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
var reg_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var users = [
	{
		username: 'suzy',
		password: 'I@msoawesome'
	},
	{
		username: 'conan',
		password: 'gingertastic'
	},
	{
		username: 'jerry',
		password: '@#!$%@'
	}
];

codepen.api.signup = function(user) {

	var response = {
		success: false,
		error: ''
	}

	if (!user.name) {
		if (!user.hasOwnProperty('firstname')) {
			response.error = 'Please provide a name';
			return response;
		}
		else {
			if (!user.firstname || !user.lastname) {
				response.error = 'Please provide both a first name and last name';
				return response;
			}
		}
	}
	if (!user.email) {
		response.error = 'Please provide an email';
		return response;
	}

	if (!reg_email.test(user.email)) {
		response.error = 'Please provide a valid email address';
		return response;
	}

	if (!user.username) {
		response.error = 'Please provide a username';
		return response;
	}
	if (user.username.length < 5) {
		response.error = 'Username must be at least 5 characters';
		return response;
	}
	if (reg_non_alphanumeric.test(user.username)) {
		response.error = 'Username must contain only letters and numbers';
		return response;
	}

	if (!user.password) {
		response.error = 'Please provide a password';
		return response;
	}
	if (user.password.length < 5) {
		response.error = 'Password must be at least 5 characters';
		return response;
	}
	if (!reg_password.test(user.password)) {
		response.error = 'Password must contain at least one letter and one number';
		return response;
	}

	users.push(user);
	response.success = true;
	return response;
}

codepen.api.login = function(user) {

	var response = {
		success: false,
		error: ''
	}

	if (!user.username) {
		response.error = 'Please provide a username';
		return response;
	}
	if (!user.password) {
		response.error = 'Please provide a password';
		return response;
	}

	$.each(users, function(index, stored_user) {
		if (user.username == stored_user.username && user.password == stored_user.password) {
			response.success = true;
			response.error = '';
			return false;
		}
		response.error = 'No user found by that username/password';
	});
	return response;
}

codepen.objects = {};