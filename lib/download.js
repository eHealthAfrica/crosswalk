'use strict';

var fs = require('fs');
var https = require('https');
var ProgressBar = require('progress');

/*eslint-disable no-undef */
var Promise = require('bluebird');
/*eslint-enable no-undef */

exports.crosswalk = function(url, dest) {
  var output = fs.createWriteStream(dest);
  console.log('Downloading crosswalk to', dest);
  function downloadPromise(resolve, reject) {
    https.get(url, function(res) {
      var len = parseInt(res.headers['content-length'], 10);

      var bar = new ProgressBar('  downloading [:bar] :percent :etas', {
        complete: '=',
        incomplete: ' ',
        width: 20,
        total: len
      });

      res.on('data', function(chunk) {
        bar.tick(chunk.length);
      });

      res.on('error', function(err) {
        fs.unlink(dest);
        reject(err);
      });

      res.pipe(output);

      output.on('finish', function() {
        output.close(resolve);
      });
    });
  }
  return new Promise(downloadPromise);
};
