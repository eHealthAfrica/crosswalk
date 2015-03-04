'use strict';

var path = require('path');
var util = require('util');

var crosswalk = {
  url: 'https://download.01.org/crosswalk/releases/crosswalk/android/stable',
  version: '11.40.277.7',
  architecture: 'arm'
};

var basename = util.format(
  'crosswalk-cordova-%s-%s.zip',
  crosswalk.version,
  crosswalk.architecture
);

var defaultBundleURL = util.format(
  '%s/%s/%s/%s',
  crosswalk.url,
  crosswalk.version,
  crosswalk.architecture,
  basename
);

var extractPath = path.join(__dirname, 'crosswalk');

exports.url = process.env.CROSSWALK_BUNDLE_URL || defaultBundleURL;
exports.downloadPath = path.join(
  process.env.TMPDIR || process.env.TEMP || process.join(process.cwd, '.tmp'),
  basename
);
exports.extractPath = extractPath;
exports.crosswalkRoot = path.join(extractPath, path.basename(basename, '.zip'));
