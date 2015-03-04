'use strict';

var path = require('path');
var Decompress = require('decompress');

/*eslint-disable no-undef */
var Promise = require('bluebird');
/*eslint-enable no-undef */

var crosswalkPath = path.join(__dirname, 'crosswalk');

exports.crosswalk = function(downloadPath) {
  function unzipPromise(resolve, reject) {
    console.log('Extracting', downloadPath, 'to', crosswalkPath);
    var decompress = new Decompress()
      .src(downloadPath)
      .dest(crosswalkPath)
      .use(Decompress.zip({strip: 1}));
    decompress.run(function(err) {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  }
  return new Promise(unzipPromise);
};
