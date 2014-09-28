'use strict';

var fs = require('fs');
var _ = require('underscore');
var json;

//async read
fs.readFile('pulp-fiction.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        } else {
            json = JSON.parse(data);
            _.each(json, function(movie) {
                var name, year;

                var reName;
                var reYear = /\d{4}/g;

                name = movie.name.trim();

                year = reYear.exec(movie.name);
                year = (_.isArray(year)) ? year.shift() : '';

                console.log(year);
                // console.log(raw + '   >>>   ' + movie.name.trim());
            });
        }
});

