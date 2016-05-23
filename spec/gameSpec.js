'use strict';

describe("Game", function(){
  var game;
  var frame;
  var frame1;
  var frame2;
  var frame3;
  var emptyFrame = jasmine.createSpyObj('emptyFrame', ['isEmpty', 'true', 'false']);

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
    frame1 = new Frame();
    frame2 = new Frame();
    frame3 = new Frame();
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

    it('recognises the score of an individual frame', function() {
      frame1.firstBowl(5);
      frame1.secondBowl(4);
      game.addFrames(frame1);
      expect(game._frames[0]._details.pins).toEqual(9);
    });

    it('calculates the score of a game correctly', function() {
      frame1.firstBowl(2);
      frame1.secondBowl(5);
      frame2.firstBowl(1);
      frame2.secondBowl(4);
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

    it('can calculate a perfect game', function() {
      for(var i = 0; i < 10; i++) {
        // frame.firstBowl(10);
        // game.addFrames(frame);
      }
      // game._frames[9].secondBowl(10);
      // game._frames[9].thirdBowl(10);
      // game.addFrames(game._frames[9]);
      expect(game.isPerfectGame()).toBe(false);
    });
  });

  describe('calculation of gutter games', function() {
    it('recognises a gutter game', function() {
      game._score = 0;
      expect(game.isGutterGame()).toBe(true);
      expect(game.isPerfectGame()).toBe(false);
    });

    it('can calculate a gutter game', function() {
      for(var i = 0; i < 10; i++) {
        frame.firstBowl(0);
        frame.secondBowl(0);
        game.addFrames(frame);
      }
      expect(game.isGutterGame()).toBe(true);
    });
  });

  describe('calculation of bonuses', function() {
    it('gets the subsequent frame', function() {
      game.addFrames(frame1);
      game.addFrames(frame2);
      expect(game.nextFrame(frame1)).toEqual(frame2);
    });

    it('gets the frame after the subsequent frame', function() {
      game.addFrames(frame1);
      game.addFrames(frame2);
      game.addFrames(frame3);
      expect(game.nextFrame(frame1)).toEqual(frame3);
    });

    it('calculates the spare bonus for a frame', function() {
      frame1.firstBowl(9);
      frame1.secondBowl(1);
      frame2.firstBowl(5);
      frame2.secondBowl(2);
      game.addFrames(frame1);
      game.addFrames(frame2);
      expect(game.spareBonus(frame1)).toEqual(5);
    });

    it('calculates the strike bonus for a frame', function() {
      frame1.firstBowl(10);
      frame2.firstBowl(4);
      frame2.secondBowl(4);
      game.addFrames(frame1);
      game.addFrames(frame2);
      expect(game.strikeBonus(frame1)).toEqual(8);
    });

    it('aggregates all bonuses for a frame', function() {
      frame1.firstBowl(9);
      frame1.secondBowl(1);
      frame2.firstBowl(10);
      frame3.firstBowl(2);
      frame3.secondBowl(4);
      game.addFrames(frame1);
      game.addFrames(frame2);
      game.addFrames(frame3);
      expect(game.calculateBonuses(frame1)).toEqual(10);
      expect(game.calculateBonuses(frame2)).toEqual(6);
    });
  });

});
