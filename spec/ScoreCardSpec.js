'use strict';

describe('Score', function() {

  var bowlingcard;
  // similar to an instance variable initialization.

  beforeEach(function() {
    bowlingcard = new Score()
    // creates a new object before each test.
  });

  it('starts at 0', function() {
    expect(bowlingcard.total()).toEqual(0);
  });

});
