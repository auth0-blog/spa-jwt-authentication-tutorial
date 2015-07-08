# Authentication on a SPA with JWTs

In this demo we'll show step by step how to add Authentication to your SPA with an API that uses JWTs.

## Running the example

This application has a VanillaJS SPA and a NodeJS backend.

### Frontend

The frontned uses `browserify` and `gulp`, so you must have `node`, `npm` and `gulp` installed.

Once you have that installed, you just need to run the following:

* `npm install`
* `gulp watch`

Then go to [http://localhost:3000](http://localhost:3000) and see the Frontend app running

### Backend

Clone [the server](https://github.com/auth0/nodejs-jwt-authentication-sample) for this example.

Run the server app in the port `3001` following the needed instructions.

## Branches

In this repository you'll find several branches. Each of the branches represents one step taken to implement the Authentication.

### 1 - Start Branch

This is the starting point for the application.

If you go to [http://localhost:3000/](http://localhost:3000/) you'll see the main page of the demo.

In there, you'll see 2 buttons to do 2 API calls:

* The first one, does an API call that **doesn't** require Authentication
* The second one does an API call that **does** require authentication

Try clicking both to see what happens.

### 2 - User Authentication Finished

In this branch, user Authentication works in the Frontend. You can see the [Login](https://github.com/auth0/spa-jwt-authentication-tutorial/blob/master/frontend/lib/signin/signin.js) and [Signup](https://github.com/auth0/spa-jwt-authentication-tutorial/blob/master/frontend/lib/signup/signup.js) implemented and working.

Also, the API for user [signin](https://github.com/auth0/spa-jwt-authentication-tutorial/blob/master/backend/user-routes.js#L37-L54) and [signup](https://github.com/auth0/spa-jwt-authentication-tutorial/blob/master/backend/user-routes.js#L19-L35) are implemented in the server.

Go to [http://localhost:3000/signin](http://localhost:3000/signin) to see the Login page and login. You'll see that if you click on the `Call secure API` button, it'll still throw an error. That's because we need to send the `JWT` on the `Authorization` header. Let's do that!

### 3 - Sending JWTs on requests

Now, we've implemented sending the JWT on the `Authorization` header on every request. Check it out [here](https://github.com/auth0/spa-jwt-authentication-tutorial/blob/master/frontend/lib/secure-routes/index.js#L14-L21)

Now, before logging in, try going to [http://localhost:3000/](http://localhost:3000/). You should still see this page even though you're not logged in. Try clicking on the `Call secure API` button and check that you still get the Unauthorized error. Now, go to the [Login page](http://localhost:3000/) and log in. Try clicking again on `Call secure API`. Check that it's not returning a correct response since the `Authorization` header is sent in every request.

### 4 - Restrict access to routes

In this section, we've restricted access to routes that require authentintication for anonymous users. Go to [http://localhost:3000/](http://localhost:3000/) without being logged in and you'll see that you're redirected to the Login page. You can see the implementation for that [here](https://github.com/auth0/spa-jwt-authentication-tutorial/blob/master/frontend/lib/secure-routes/index.js#L23-L34).
