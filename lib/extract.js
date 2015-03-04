'use strict';

var extract = require('extract-zip');

/*eslint-disable no-undef */
var Promise = require('bluebird');
/*eslint-enable no-undef */

exports.crosswalk = function(downloadPath, extractPath) {
  function unzipPromise(resolve, reject) {
    console.log('Extracting', downloadPath, 'to', extractPath);
    var options = {
      dir: extractPath
    };
    extract(downloadPath, options, function(err) {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  }
  return new Promise(unzipPromise);
};
