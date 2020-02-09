/********
* v1.js file (inside routes/apis)
********/

const teamsController = require('../../controllers/apis/teams');

const express = require('express');
let router = express.Router();


router.use('/teams', teamsController);

module.exports = router;