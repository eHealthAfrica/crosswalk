'use strict';

var DecompressZip = require('decompress-zip');

/*eslint-disable no-undef */
var Promise = require('bluebird');
/*eslint-enable no-undef */

exports.crosswalk = function(downloadPath, extractPath) {
  function unzipPromise(resolve, reject) {
    console.log('Extracting', downloadPath, 'to', extractPath);
    var unzipper = new DecompressZip(downloadPath);
    var options = {
      path: extractPath
    };
    unzipper.extract(options)
      .on('error', reject)
      .on('extract', resolve);
  }
  return new Promise(unzipPromise);
};
