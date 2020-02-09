/*******
* server.js file
********/ 

const server = require('./configs/app')();
const config = require('./configs/config/config');
//const db = require('./configs/db');

//create the basic server setup 
server.create(config);
//server.create(config, db);

//start the server
server.start();

// const express = require('express');
// const bodyParser = require('body-parser'); //this will let us get data from a POST
// var router = express.Router();              // get an instance of the express Router

// const app = express();
// var port = process.env.PORT || 3000;  

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// router.get('/all_teams', function(req, res) {
// 	res.json({ message: 'DOTA 2 teams'});   
// });

// router.get('/team/:name', function(req, res) {
// 	res.json({ message: 'TEAM PLAYERS' });   
// });

// router.get('/team/:name/players', function(req, res) {
// 	res.json({ message: 'TEAM PLAYERS' });   
// });

// router.get('/player/:name', function(req, res) {
// 	res.json({ message: 'DOTA 2 players' });   
// });

// router.get('/items', function(req, res) {
// 	res.json({ message: 'DOTA2 ITEMS' });   
// });


// router.get('/item/:name', function(req, res) {
// 	res.json({ message: 'DOTA2 ITEMS' });   
// });

// router.get('/best_carry', function(req, res) {
// 	res.json({ message: 'ARTEEZY IS THE BEST CARRRY' });   
// });
// // more routes for our API will happen here

// // REGISTER OUR ROUTES -------------------------------
// // all of our routes will be prefixed with /api
// app.use('/dota',router);

// // START THE SERVER
// // =============================================================================
// app.listen(port);
// console.log('Magic happens on port ' + port);