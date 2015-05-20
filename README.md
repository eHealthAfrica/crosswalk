**DEPRECEATED**: use [cordova-plugin-crosswalk-webview][xwalk].

[xwalk]: https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview

# crosswalk

[![Build Status][travis-image]][travis-url]

[travis-url]: https://travis-ci.org/eHealthAfrica/crosswalk
[travis-image]: https://img.shields.io/travis/eHealthAfrica/crosswalk.svg

> npm wrapper for installing Crosswalk

## Usage

This package downloads Crosswalk and exposes the path to the extracted
directory.

```shell
npm install crosswalk
```

```js
var crosswalk = require('crosswalk');
console.log(crosswalk.path);
// => /path/to/crosswalk
```

## Examples

### `cordova-lib`

When used with `cordova-lib`, Crosswalk can be specified as the target
platform:

```js
var cordova = require('cordova-lib').cordova;
var crosswalk = require('crosswalk');

cordova.platform('add', crosswalk.path, function(err) {
  // Handle error
  cordova.build(function(err) {
    // APK built with Crosswalk webview
  });
});
```

## Options

### Bundle URL

By default, `crosswalk` downloads the latest stable ARM version of Crosswalk.
To override this set the `CROSSWALK_BUNDLE_URL` environment variable.

For example:

```shell
CROSSWALK_BUNDLE_URL=https://download.01.org/crosswalk/releases/crosswalk/android/stable/11.40.277.7/x86/crosswalk-cordova-11.40.277.7-x86.zip npm install crosswalk
```

## Acknowledgements

Heavily modelled on [Medium/phantomjs](https://github.com/Medium/phantomjs).

## Author

[Tom Vincent](https://tlvince.com/contact)

## License

© 2015 [eHealth Africa](http://ehealthafrica.org) <oss@ehealthafrica.org>

Released under the [MIT license](http://ehealthafrica.mit-license.org)
