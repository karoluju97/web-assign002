'use strict';

const logger = require('../utils/logger');
const animeStore= require('../models/anime-store');

const dashboard =
      {
        index(request, response) 
        {
          logger.info('dashboard rendering');
          const viewData = 
          {
            title: 'anime Dashboard',
            animes: animeStore.getAllanimes(),
          };
            logger.info('about to render', animeStore.getAllanimes());
            response.render('dashboard', viewData);
        },

      };

module.exports = dashboard;
