/*!
 * is-boilerplate <https://github.com/boilerplate/is-boilerplate>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isPlainObject = require('is-plain-object');

module.exports = function isBoilerplate(obj) {
  return obj && typeof obj === 'object'
    && !isPlainObject(obj)
    && obj.isBoilerplate === true;
};
