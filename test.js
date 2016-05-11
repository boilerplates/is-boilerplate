'use strict';

require('mocha');
var assert = require('assert');
var Boilerplate = require('boilerplate');
var isBoilerplate = require('./');

describe('isBoilerplate', function() {
  it('should return false if the value is not a Boilerplate:', function() {
    assert(isBoilerplate('a') === false);
    assert(isBoilerplate({}) === false);
    assert(isBoilerplate({ files: [] }) === false);
  });

  it('should return true if the value is a Boilerplate:', function() {
    assert(isBoilerplate(new Boilerplate({ files: [] })) === true);
  });
});
