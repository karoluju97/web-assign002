'use strict';


const _ = require('lodash');
const animeStore = 
      {

        animeCollection: require('./anime-store.json').animeCollection,

        getAllanimes() 
          {
              return this.animeCollection;
          },

        getanime(id)
          {  
            let foundanime = null;
            for (let anime of this.animeCollection)
              {
                if (id == anime.id) 
                  {
                    foundanime = anime;
                  }
              }

          return foundanime;
          },
        
        removeshow(id,showId)
        {
          const anime = this.getanime(id); //remove the show with id and showId from the anime
          _.remove(anime.shows, {id: showId });
        },
        
        removeanime(id)
        {
        _.remove(this.animeCollection, { id: id });
        },
        
      };

   /** getanime(id) 
  {
    return _.find(this.animeCollection, { id: id }); //using the lodash function to simplify the getanime function
  },**/

module.exports = animeStore;

/**'use strict';

const logger = require('../utils/logger');

const animeCollection = require('./anime-store.json').animeCollection; //reading files from json

module.exports = animeCollection;**/

/** const sonatas = 
      {
  title: 'Beethoven Sonatas',
  shows: [
    {
      title: 'Piano Sonata No. 3',
      artist: 'Beethoven',
    },
    {
      title: 'Piano Sonata No. 7',
      artist: 'Beethoven',
    },
    {
      title: 'Piano Sonata No. 10',
      artist: 'Beethoven',
    },
  ],
}; 

const concertos = 
      {
  title: 'Beethoven Concertos',
  shows: [
    {
      title: 'Piano Concerto No. 0',
      artist: 'Beethoven',
    },
    {
      title: 'Piano Concerto  No. 4',
      artist: 'Beethoven',
    },
    {
      title: 'Piano Concerto  No. 6',
      artist: 'Beethoven',
    },
  ],
}; **/

//const animeCollection = [sonatas, concertos]; animeCollections is an array that stores two different anime

//module.exports = animeCollection; //object beign exported