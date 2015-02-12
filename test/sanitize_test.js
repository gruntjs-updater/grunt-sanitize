'use strict';

var grunt = require('grunt');
var path = require('path');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.sanitize = {

  setUp: function(done) {
    // setup here if necessary
    done();
  },

  default_options: function(test) {
    test.expect(1);

    var actual = path.basename('test/fixtures/my_image.jpg');
    var expected = path.basename('test/expected/my_image.jpg');

    test.equal(actual, expected, 'should show that the filename now has been sanitized.');

    test.done();
  }

};
