'use strict';

const express = require('express');
const router = express.Router();
const anime = require('./controllers/anime.js');



const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');

router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
router.get('/anime/:id', anime.index);
router.get('/anime/:id/deleteshow/:showid',anime.deleteshow);
router.get('/deleteanime/:id',anime.deleteanime);


module.exports = router;
