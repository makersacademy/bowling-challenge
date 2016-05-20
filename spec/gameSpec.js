'use strict';

describe("Game", function(){
  var game;
  var frame;
  var emptyFrame = jasmine.createSpyObj('emptyFrame', ['isEmpty', 'true', 'false']);

  beforeEach(function(){
    game = new Game();
    emptyFrame.isEmpty.and.returnValue(true);
  });

  describe('initialization of a game', function() {
    it('opens with a starting score of zero', function() {
      expect(new Game()._score).toEqual(0);
    });

    it('opens with empty frames', function() {
      expect(new Game()._frames).toEqual([]);
    });

  });

  describe('basic scoring functionality', function() {
    it('returns an array of frames as an attribute', function() {
      expect(game._frames).toEqual([]);
    });

    it('has a maximum of ten frames', function() {
      expect(function(){
        game._frames.length = 10;
        game.addFrames();
      }).toThrowError('You may only play 10 frames.')
    });

    it('calculates a nil score initially', function() {
      expect(game._score).toEqual(0);
    });

    it('calculates the score of a game correctly', function() {
      game.addFrames();
      // game._frames[frame]._details.firstScore;
      // game._frames[0]._details.secondScore;
      // game._frames[0].secondScore(1);
      // game._frames[1].firstBowl(2);
      // game._frames[1].firstBowl(3);
      // game._frames[2].firstBowl(10);
      // expect(game.calculateFrameScore()).toEqual(24);
    });
  });

  describe('calculation of strikes', function() {

  });

  describe('calculation of spares', function() {

  });

  describe('calculation of perfect games', function() {

  });

  describe('calculation of gutter games', function() {

  });

});
