const nodemailer = require('nodemailer'); // import nodemailer package
const dishDAO = require("../models/dishModel"); // import dishes model
const userDao = require("../models/staffModel.js"); // import and initialise staff db
const ingredientDAO = require("../models/ingredientModel"); // import ingredients model

//initialise dishes db
const db = new dishDAO();
db.init();

//initialise ingredients db
const idb = new ingredientDAO();
idb.init();

exports.show_splash = function (req, res) {
  // get all dishes and ingredients then render index for non-logged in users
  db.getAllEntries()
    .then((list) => {
      idb.getAllEntries().then((ingreds) => {
        res.render("index", {
          title: "ThaiTanic Home",
          dishes: list,
          ingredients: ingreds
        });
      })
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.login = function (req, res) {
  // render login page
  res.render("login", {
    title: "ThaiTanic Staff Login"
  });
};

exports.send_email = function (req, res){ // send message from contact form
  const smtp = nodemailer.createTransport({ // determine account to send emails to
    name: 'smtp.outlook.com',
    host: 'smtp.outlook.com',
    port: 587,
    auth: {
        user: 'thisisadummyforuni@outlook.com',
        pass: 'Welcome22!'
    }
  });

  let mail = { // determine message format
    from: 'thisisadummyforuni@outlook.com',
    to: 'thisisadummyforuni@outlook.com',
    subject: req.body.subject,
    text: "The following message has been sent from " + req.body.name +":\n"+req.body.message + "\nContact them at: " + req.body.email,
  }
  
  smtp.sendMail(mail, function(err, resp){ // send message and load index
    if(err){
      console.log(err)
    }
    else{
      console.log("Sent")
      if(req.body.loggedin){ //redirect to loggedin index if email sent while logged in
        res.redirect("/loggedIn")
      } else{
        res.redirect("/")
      }
    }
  })
}

exports.handle_login = function (req, res) {
  // load index with additional functionality for staff
  res.redirect('/loggedIn')
};

exports.deleteDish = function (req, res) {
  // delete selected dish and load index
  db.deleteEntry(req.params.id);
  res.redirect("/loggedIn");
};

exports.updateDish = function(req,res){
  let ingredients = req.body.ingredients // store ingredients
  let ingredID = [] // initialise ingredient array

  if(ingredients.length > 1){ // ingredients passed greater than 1 - if a single ingredient is passed, individual characters from the ID are stored
    for(let i = 0; i < ingredients.length; i++ ){
      ingredID.push(ingredients[i])
    }
  }
  else{ // store single ingredient
    ingredID = ingredients
  }
  
  //set values to false as no values will be passed for these attributes if the checkbox isn't checked
  let visible = false, vegan = false, vegetarian = false, pescetarian = false, gf = false;

  // if values are passed, set to true
  if(req.body.visible){
    visible = true
  }
  if(req.body.vegan){
    vegan = true
  }
  if(req.body.vegetarian){
    vegetarian = true
  }
  if(req.body.pescetarian){
    pescetarian = true
  }
  if(req.body.gf){
    gf = true
  }

  db.removeIngredients(req.params.id) // remove currently stored ingredients
  // update existing entry with new values
  db.updateDish(req.params.id, req.body.name, req.body.section, req.body.description, req.body.price, visible, ingredID, vegan, vegetarian, pescetarian, gf)
  res.redirect("/loggedIn")
}

exports.editDish = function (req, res){
// find dish to edit then load all ingredients for multi select and load populated edit dish form
  db.findDish(req.params.id)
    .then((dish) => {
      idb.getAllEntries().then((ingreds) => {
        res.render("editDish", {
          title: "Edit Dish",
          user: "user",
          dish: dish,
          ingredients: ingreds
        });
      })
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
    
}

exports.hideDish = function (req, res) {
  // change visible value for dish to false and load menu
  db.hideDish(req.params.id);
  res.redirect("/loggedIn#menu");
};

exports.addEntry = function (req, res){
  let ingredients = req.body.ingredients // store ingredients
  let ingredID = [] // initialise ingredient array

  if(ingredients.length > 1){ // ingredients passed greater than 1 - if a single ingredient is passed, individual characters from the ID are stored
    for(let i = 0; i < ingredients.length; i++ ){
      ingredID.push(ingredients[i])
    }
  }
  else{ // store single ingredient
    ingredID = ingredients
  }
  
  //set values to false as no values will be passed for these attributes if the checkbox isn't checked
  let visible = false, vegan = false, vegetarian = false, pescetarian = false, gf = false;

  // if values are passed, set to true
  if(req.body.visible){
    visible = true
  }
  if(req.body.vegan){
    vegan = true
  }
  if(req.body.vegetarian){
    vegetarian = true
  }
  if(req.body.pescetarian){
    pescetarian = true
  }
  if(req.body.gf){
    gf = true
  }

  // add dish to db and load index
  db.addDish(req.body.name, req.body.section, req.body.description, visible, req.body.price, ingredID, vegan, vegetarian, pescetarian, gf)
  res.redirect("/loggedIn")
}

exports.showDish = function (req, res) {
  // updated visible to true and return to menu
  db.showDish(req.params.id);
  res.redirect("/loggedIn#menu");
};

exports.addDish = function(req,res){
// get all ingredients for ingredients multi-select and load blank add dish form
  idb.getAllEntries()
    .then((list) => {
      res.render("addDish", {
        title: "Add dish",
        user: "user",
        ingredients: list
      })
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
  
}

exports.addNewIngredient = function(req, res){
  //add new ingredient

  //set allergen to false as no values are passed for checkboxes if not checked
  let allergen = false;

  if(req.body.allergen){ // if checkbox checked, set allergen to true
    allergen = true
  }
  idb.addIngredient(req.body.name, allergen)
  res.redirect("/loggedIn")
}

exports.addIngredient = function(req,res){
  // render add ingredient form
  res.render("addIngredient", {
    title: "Add ingredient",
    user: "user"
  })
}

exports.editIngredient = function(req, res){
  // get all ingredients and render editIngredient
  idb.getAllEntries()
    .then((list) => {
      res.render("editIngredient", {
        title: "Edit ingredients",
        user: "user",
        ingredients: list
      })
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
}

exports.deleteIngredient = function (req, res) {
  // delete selected dish and load index - exists but not fully implemented as it would impact all dishes ingredient is part of
  idb.deleteEntry(req.params.id);
  res.redirect("/editIngredient");
};

exports.updateIngredient = function(req, res){
  //edit ingredient in db and return to edit page

  console.log(req.body)
  console.log(req.params)

  //set allergen to false as no values will be passed for these attributes if the checkbox isn't checked
  let allergen = false

  // if values are passed, set to true
  if(req.body.allergen){
    allergen = true
  }

  // add dish to db and load index
  idb.editIngredient(req.params.id, req.body.name, allergen)
  res.redirect("/editIngredient")
}

exports.loggedIn_landing = function (req, res) {
  // get all dishes and ingredients then render index for logged in users
  db.getAllEntries()
    .then((list) => {
      idb.getAllEntries().then((ingreds) => {
        res.render("index", {
          title: "ThaiTanic Home",
          user: "user",
          dishes: list,
          ingredients: ingreds
        });
      })
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.logout = function (req, res) {
  // clear access token
  res.clearCookie("jwt").status(200).redirect("/");
};