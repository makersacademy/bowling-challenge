'use strict';

describe('Game', function(){
  var game


  beforeEach(function(){
    game = new Game();
    var basicFrame = jasmine.createSpyObj('basicFrame', {
      '_firstRoll': 4,
      '_secondRoll': 4,
      'score': 8,
      'isAStrike': false,
      'isASpare': false,
      'isValid': true
    });
  });

  describe('storeFrame', function() {

    it('stores complete frames in an array', function() {
      game.storeFrame([1,5])
      expect(game._frames).toContain([1,5]);
    });
  });

  describe('frameScores', function() {

    it('starts with no score', function() {
      game.frameScores()
      expect(game.frameScores()).toEqual([]);
    });
  });

  describe('storeFrameScore', function() {

    it('calculates and stores the score of a basic frame', function() {
      game.storeFrameScore(basicFrame)
      expect(game.frameScores()).toContain(8);
    });
  });
});
