/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/


$('document').ready(function() {

	codepen.objects.User = {
		name: null,
		email: null,
		username: null,
		password: null,
		is_logged_in: false
	}

	var NewUser = Object.create(codepen.objects.User, {
		firstname: {
			writable: true, 
			enumerable: true,
			value: ''
		},
		lastname: {
			writable: true, 
			enumerable: true,
			value: ''
		}
	});

	$('.signup-form').hide();

	$('.login-form-btn').click(function() {
		$(this).addClass('active');
		$('.signup-btn').removeClass('active');
		$('.signup-form').hide();
		$('.login-form').show();
	});
	$('.signup-form-btn').click(function() {
		$(this).addClass('active');
		$('.login-btn').removeClass('active');
		$('.signup-form').show();
		$('.login-form').hide();
	});

	$('.btn-login').click(function() {
		var user = Object.create(NewUser);
		user.username = $('#login-username-field').val();
		user.password = $('#login-password-field').val();
		var response = codepen.api.login(user);
		if(response.success == true) {
			$('.login-form .form-feedback').html("Your'e logged in!");
			user.is_logged_in = true;
		}
		else {
			$('.login-form .form-feedback').html("Sorry, login didn't work");
		}
	});

	$('.btn-signup').click(function() {
		var user = Object.create(NewUser);
		user.firstname = $('#signup-firstname-field').val();
		user.lastname = $('#signup-lastname-field').val();
		user.email = $('#signup-email-field').val();
		user.username = $('#signup-username-field').val();
		user.password = $('#signup-password-field').val();
		var response = codepen.api.signup(user);
		if(response.success == true) {
			$('.signup-form .form-feedback').html("Your'e signed up! Now go login.");
		}
		else {
			$('.signup-form .form-feedback').html(response.error);
		}
	});

});