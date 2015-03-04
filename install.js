'use strict';

var bundle = require('./lib/bundle');
var extract = require('./lib/extract');
var download = require('./lib/download');

function extractCrosswalk() {
  return extract.crosswalk(bundle.downloadPath);
}

function errorHandler(err) {
  throw err;
}

function maybeDownload(err) {
  if (!err || err.code !== 'ENOENT') {
    throw err;
  }
  download.crosswalk(bundle.url, bundle.downloadPath)
    .then(extractCrosswalk)
    .catch(errorHandler);
}

extractCrosswalk()
  .catch(maybeDownload);
