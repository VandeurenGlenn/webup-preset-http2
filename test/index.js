var chai = require('chai');
var assert = chai.assert;
var http2 = require('./../dist/http2-node');

var preset = http2({dest: 'build'});
var keys = ['dest', 'inlineJs', 'inlineCss', 'plugins'];

describe('description', () => {

  it('Is an array', () => {
    assert.isArray(preset, 'preset is an Array.');
  });

  it('Exports 1 object', () => {
    assert.lengthOf(preset, 1, 'array has length of 1');
    // check if objects
    assert.isObject(preset[0], 'preset[0] is an object.');
  });

  it('preset[0] contains all keys', () => {
    assert.hasAllKeys(preset[0], keys, keys);
  });

});
