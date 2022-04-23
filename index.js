const express = require('express'); // import express package
const app = express();
const router = require('./routes/restaurantRoutes'); // import routes
const port = process.env.PORT || 3000;  // set port to available port or port 3000
const cookieParser = require('cookie-parser') // import cookie-parser package
const path = require('path'); // import path package

require('dotenv').config() // loads data from .env file


app.use(cookieParser())

app.use(express.urlencoded({
    extended: false
}))

// serve state files from public directory - no static files so not used
// const public = path.join(__dirname,'public');
// app.use(express.static(public));

app.set('view engine', 'ejs'); // set view engine to ejs
app.set('views', path.join(__dirname, 'views')); // find templates in views directory
app.use('/', router); // call routes

app.listen(port, () => { // start server
    console.log('Server started on port ' + port + '. Ctrl^c to quit.');
    })  