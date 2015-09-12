# is-boilerplate [![NPM version](https://badge.fury.io/js/is-boilerplate.svg)](http://badge.fury.io/js/is-boilerplate)

> Returns true if an object is a Boilerplate instance.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i is-boilerplate --save
```

## Usage

```js
var isBoilerplate = require('is-boilerplate');
var Boilerplate = require('boilerplate');

// returns false if the value is not a Boilerplate
isBoilerplate('a')// false
isBoilerplate({})// false
isBoilerplate({ files: [] })// false

// returns true if the value is a Boilerplate instance
var boilerplate = new Boilerplate({ src: ['*.js'] });
isBoilerplate(boilerplate) // true
```

## API

## Related projects

* [boilerplate](https://www.npmjs.com/package/boilerplate): Tools and conventions for authoring and publishing boilerplates that can be generated by any build… [more](https://www.npmjs.com/package/boilerplate) | [homepage](http://boilerplates.io)
* [scaffold](https://www.npmjs.com/package/scaffold): Conventions and API for creating scaffolds that can by used by any build system or… [more](https://www.npmjs.com/package/scaffold) | [homepage](https://github.com/jonschlinkert/scaffold)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/is-boilerplate/issues/new).

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on September 12, 2015._