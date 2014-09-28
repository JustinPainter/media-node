var imdb = require('imdb-api');

var movie;
imdb.getReq({ name: 'Pulp Fiction' }, function(error, results) {
    if (error) {
        console.log(error);
    } else if(results) {
        console.log(results);
    }
})
