'use strict';

var bundle = require('../lib/bundle');

describe('bundle', function() {
  it('should expose a default bundle URL', function() {
    var expected = 'https://download.01.org/crosswalk/releases/crosswalk/android/stable/11.40.277.7/arm/crosswalk-cordova-11.40.277.7-arm.zip';
    bundle.url.should.equal(expected);
  });
});
