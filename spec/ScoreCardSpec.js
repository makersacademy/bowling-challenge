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

  it('adds a number to the score', function() {
    bowlingcard.add(6)
    expect(bowlingcard.total()).toEqual(6)
  });

  it('has a currentFrame score that starts at 0', function() {
    expect(bowlingcard.currentFrame).toEqual(0)
  });
});
