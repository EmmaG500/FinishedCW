const express = require('express'); // import express package
const router = express.Router(); // import router
const controller = require('../controllers/restaurantControllers.js'); // import controller functions to be called by most routes
const {login} = require('../auth/auth') // import auth functions
const {verify} = require('../auth/auth')

router.get('/', controller.show_splash) // launch index
router.get('/login', controller.login) // launch login
router.post('/login', login, controller.handle_login) // check user exists and log in
router.get("/loggedIn",verify, controller.loggedIn_landing) // launch index with additional functionality available for staff
router.get("/logout", controller.logout) // log out
router.post("/sendEmail", controller.send_email) // send contact form email
router.post('/delete/:id', verify, controller.deleteDish); // delete dish from db
router.post('/hide/:id', verify, controller.hideDish) // hide dish
router.post('/show/:id', verify, controller.showDish) // show dish
router.get('/addDish', verify, controller.addDish) // add new dish form
router.get('/addIngredient', verify, controller.addIngredient) // add new ingredient form
router.post('/addEntry', verify, controller.addEntry) // insert dish to db
router.get('/editDish/:id', verify, controller.editDish) // update dish form
router.post('/editDish/:id', verify, controller.updateDish) // update dish in db
router.post('/addIngredient', verify, controller.addNewIngredient) // insert ingredient to db
router.get('/editIngredient', verify, controller.editIngredient) //display editable forms of ingredients
router.post('/editIngredient/:id', verify, controller.updateIngredient) // update ingredient


router.use(function(req, res) {
    // if page not found
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
});
router.use(function(err, req, res, next) {
    //if error with code
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error: '+ err);
});

module.exports = router;