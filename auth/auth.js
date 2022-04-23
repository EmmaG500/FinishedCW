const bcrypt = require("bcrypt"); // import bcrypt package
const userModel = require("../models/staffModel"); //import staff user model
const jwt = require("jsonwebtoken"); // import jsonwebtoken package

exports.login = function (req, res,next) {
  //take details passed from form and store
  let username = req.body.username;
  let password = req.body.password;

  userModel.lookup(username, function (err, user) {
    if (err) { // if err looking up user
      console.log("error looking up user", err);
      return res.status(401).send();
    }
    if (!user) { //if user not found return to home page
      console.log("Unauthorised login");
      return res.redirect("/");
    }
    //compare provided password with stored password
    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        //use the payload to store information about the user such as username.
        let payload = { username: username };
        //create the access token 
        let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET,{expiresIn: 500}); //token comes from .env
        res.cookie("jwt", accessToken);
        next();
      } else { // if entered password does not match stored
        console.log("Unauthorised login");
        return res.redirect("/"); //res.status(403).send();
      }
    });
  });
};

exports.verify = function (req, res, next) {
  let accessToken = req.cookies.jwt;
  if (!accessToken) { // if no access token
    return res.status(403).send();
  }
  let payload;
  
  try {
    payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET); // confirm access token matches secret token
    next();
  } catch (e) {
    //if an error occurred return request unauthorized error
    res.status(401).send();
  }
};