codepen-loginsignup-clone
=========================

The start of the Codepen Login/Signup clone project

#Objectives

##1. Set up forms correctly
In order for our sign up/sign in forms to work, you'll need to first hide the form that's not currently being used.
Use the Sign up/Login links at the top of the container to determine which form to show. (Only one form should be showing at a time).

##2. Implement the login functionality
The codepen server (fake) has two API methods, detailed in the comments at the top of script.js. The `codepen.api.login` 
needs to be implemented for the login form. 

Details:
* When the user clicks "Login", your code should submit a user object to the `codepen.api.login` method. 
* The method will return a response (see the comments as to how it will look). Handle the response appropriately, by either showing a success or failure message of your choosing.
* If the response is a failure, you should show the user the error so they know what went wrong

##3. Implement the signup functionality
You need to create a way for users to signup to the service as well. Use the `codepen.api.signup` method to do this.

Details:
* When the user clicks "Sign up", your code should submit a user object to the `codepen.api.signup` method.
* The method will return a response (see the comments). Handle the response appropriately, including showing validation errors.
* If the response is successful, automatically take the user to the login form so they can login.
* 

###Notes:
This is obviously a fake server, and no data will persist. What this means is that if you 'signup' a user, they won't be there if you leave the page and come back or do a refresh.

For more practice on the use of objects, take a look at the server.js file and examine how the response objects are being built/used.
