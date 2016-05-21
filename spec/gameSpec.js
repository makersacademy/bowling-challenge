'use strict';

describe("Game", function(){
  var game;
  var frame;
  var frame1;
  var frame2;
  var emptyFrame = jasmine.createSpyObj('emptyFrame', ['isEmpty', 'true', 'false']);

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
    frame1 = new Frame();
    frame2 = new Frame();
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
      frame1.firstBowl(2);
      frame1.secondBowl(5);
      frame2.firstBowl(1);
      frame2.secondBowl(4);
      game.addFrames(frame1);
      game.addFrames(frame2);
      expect(game.calculateGameScore(frame1)).toEqual(7);
      expect(game.calculateGameScore(frame2)).toEqual(12);
    });
  });

  describe('calculation of perfect games', function() {
    it('recognises a perfect game', function() {
      game._score = 300;
      expect(game.isPerfectGame()).toBe(true);
      expect(game.isGutterGame()).toBe(false);
    });

  });

  describe('calculation of gutter games', function() {
    it('recognises a gutter game', function() {
      game._score = 0;
      expect(game.isGutterGame()).toBe(true);
      expect(game.isPerfectGame()).toBe(false);
    });
  });

});
