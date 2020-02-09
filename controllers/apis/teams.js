/********
* teams.js file (controllers/apis)
********/

const express = require('express');
const userService = require('../../services/teams/team');
let router = express.Router();

router.get('/all', userService.getAll);
router.get('/region/:region', userService.getByRegion);
//router.get('/region/:region/players', userService.getBestTeam);
router.get('/name/:name', userService.getByName);
router.get('/best_team', userService.getBestTeam);

module.exports = router;