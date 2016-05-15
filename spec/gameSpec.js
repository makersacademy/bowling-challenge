'use strict';

describe("Game", function(){
  var game;
  var frame = jasmine.createSpyObj('frame', ['isEmpty', 'true', 'false']);

  beforeEach(function(){
    game = new Game();
    frame.isEmpty.and.returnValue(true);
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
      // game._score = 0;
      // expect(game.calculateScore()).toEqual(0);
    });

    // it('calculates scores correctly', function() {
    //   game._frames[0] = 8;
    //   game.addFrames(frame);
    //   expect(game.calculateScore()).toEqual(8);
    // });
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
