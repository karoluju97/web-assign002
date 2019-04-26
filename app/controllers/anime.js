'use strict';

const logger = require('../utils/logger');
const animeStore = require('../models/anime-store');

const anime = 
      {
        index(request, response) 
          {
            const animeId = request.params.id;
            logger.debug('anime id = ', animeId);
            const viewData = 
                  {
                    title: 'anime',
                    anime: animeStore.getanime(animeId),
                  };
            response.render('anime', viewData);
          },
        
        deleteshow(request, response)
        {
          const animeId = request.params.id;
          const showId = request.params.showid;
          
          logger.debug('Deleting show $(showId) from anime $(animeId)');
          animeStore.removeshow(animeId,showId);
          response.redirect('/anime/' + animeId);
        },
        
                
        deleteanime(request, response)
        {
          const animeId = request.params.id;
      
          logger.debug('Deleting anime $(animeId)');
          animeStore.removeanime(animeId);
          response.redirect('/dashboard/');
        },
                

      };

module.exports = anime;