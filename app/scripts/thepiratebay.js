'use strict';

var Http = require('http');
var thePirateBay = require('thepiratebay');

// var proxyURL = 'http://127.0.0.1:8888';

// thePirateBay.proxy(proxyURL);

// thePirateBay.topTorrents('207', function(err, results) {
//     if (err) {
//         console.log(err);
// } else {
//         console.log(JSON.stringify(results));
// }
// });

thePirateBay.search('Pulp fiction', {
  category: '200',
}, function(err, results) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(results));
  }
});
