'use strict';

var bundle = require('./lib/bundle');
var extract = require('./lib/extract');
var download = require('./lib/download');

function errorHandler(err) {
  throw err;
}

function extractCrosswalk() {
  return extract.crosswalk(bundle.downloadPath, bundle.extractPath);
}

function downloadCrosswalk() {
  download.crosswalk(bundle.url, bundle.downloadPath)
    .then(extractCrosswalk)
    .catch(errorHandler);
}

function extractionError(err) {
  if (err.code && err.code === 'ENOENT') {
    return downloadCrosswalk();
  }
  throw err;
}

extractCrosswalk()
  .catch(extractionError);
