'use strict';

describe('Frame', function() {

  var frame;
  var game;

  beforeEach(function() {
    frame = new Frame(0, 0);
  });

  it('knows that the maximum score is 10', function() {
    expect(frame.MAXIMUM_PINS).toEqual(10);
  });

  it('has an isStrike property which is false by default', function() {
    expect(frame._isStrike).toEqual(false);
  });

  it('has an isSpare property which is false by default', function() {
    expect(frame._isSpare).toEqual(false);
  });

  describe('when a game is in play', function() {

    it('receives the number of pins knocked down in the first roll from game', function() {
      expect(frame._firstRoll).toEqual(0);
    });

    it('receives the number of pins knocked down in the second roll from game', function() {
      expect(frame._secondRoll).toEqual(0);
    });
  });

  describe('when a strike or spare is rolled', function() {
    // it('isStrike changes to true if a strike is rolled', function() {
    //   frame = new Frame(10, 0);
    //   expect(frame._isStrike).toEqual(true);
    // });
  });
});
