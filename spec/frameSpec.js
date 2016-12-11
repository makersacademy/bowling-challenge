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

  describe('when a game is in play', function() {

    it('receives the number of pins knocked down in the first roll from game', function() {
      expect(frame._firstRoll).toEqual(0);
    });

    it('receives the number of pins knocked down in the second roll from game', function() {
      expect(frame._secondRoll).toEqual(0);
    });
  });
});
