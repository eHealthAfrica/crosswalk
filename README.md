# crosswalk

> npm wrapper for installing Crosswalk

## Usage

This package downloads Crosswalk and exposes the path to its `bin` directory.
Example usage:

```shell
npm install crosswalk
```

```js
var path = require('path');
var childProcess = require('child_process');
var crosswalk = require('crosswalk');

var create = path.join(crosswalk.path, 'create');

var childArgs = [
  'test'
];

childProcess.execFile(create, childArgs, function(err, stdout, stderr) {
  // handle results
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
