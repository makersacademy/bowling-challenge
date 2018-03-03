'use strict';

describe('fullGameCalculator', function() {
  var game, gutterGame, noTensGame, perfectGame, awkwardGame, awkwardGameTwo,
      awkwardGameThree, strikeFirst, spareFirst, strikeFrames;

  beforeEach(function(){
    game = new GameCalculator();
    gutterGame = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    noTensGame = [7, 2, 7, 2, 7, 2, 7, 2, 7, 2, 7, 2, 7, 2, 7, 2, 7, 2, 7, 2];
    perfectGame = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    awkwardGame = [10, 10, 10, 9, 1, 10, 10, 10, 9, 1, 10, 10, 10, 10];
    awkwardGameTwo = [10, 5, 5, 4, 3, 7, 3, 10, 8, 1, 7, 2, 4, 3, 10, 7, 3, 7];
    awkwardGameThree = [9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 10];
    strikeFirst = [10, 5, 3, 10, 10, 10];
    spareFirst = [8, 2, 8, 10, 10, 10];
    strikeFrames = [[10, 10], [10], [10]];
  });

  describe('The .score function', function() {
    it('can score a gutter game', function() {
      expect(game.score(gutterGame)).toEqual(0);
    });

    it('can score a game with no strikes or spares', function() {
      expect(game.score(noTensGame)).toEqual(90);
    });

    it('can score a perfect game', function() {
      expect(game.score(perfectGame)).toEqual(300);
    });

    it('can score an awkward games', function() {
      expect(game.score(awkwardGameThree)).toEqual(191);
    });

    it('resets allFrames to an empty array', function(){
      game.score(perfectGame);
      expect(game.allFrames).toEqual([]);
    });
  });

  describe('The .createAllFramesArray function', function() {
    it('returns a frame scores array when given a full game array', function(){
      game.createAllFramesArray(perfectGame);
      expect(game.allFrames)
      .toEqual([30, 30, 30, 30, 30, 30, 30, 30, 30, 30]);
    });
  });

  describe('The .buildStrikeFrame function', function() {
    it('removes the strike and adds next two scoring balls', function(){
      game.buildStrikeFrame(strikeFirst);
      expect(game.frame).toEqual([10, 5, 3]);
      expect(strikeFirst).toEqual([5, 3, 10, 10, 10]);
    });
  });

  describe('The .buildSpareFrame function', function() {
    it('removes the spare and adds next scoring ball', function(){
      game.buildSpareFrame(spareFirst);
      expect(game.frame).toEqual([8, 2, 8]);
      expect(spareFirst).toEqual([8, 10, 10, 10]);
    });
  });

  describe('The .addFrameToAllFramesArray function', function() {
    it('adds the sum of a frame to allFrames and sets frame to 0', function() {
      game.frame = [10, 8 , 2];
      game.addFrameToAllFramesArray();
      expect(game.allFrames).toEqual([20]);
      expect(game.frame).toEqual(0);
    });
  });

  describe('The .sum function', function() {
    it('returns the sum of an array', function() {
      expect(game.sum(perfectGame)).toEqual(120);
    });
  });
});
