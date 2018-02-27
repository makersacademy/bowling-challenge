'use strict';

describe('Bowling', function() {
  var bowling, gutterGame, noTensGame, perfectGame, awkwardGame, awkwardGameTwo,
      awkwardGameThree, strikeFirst, spareFirst, strikeFrames, spareFrame,
      strikeFrame;
  beforeEach(function(){
    bowling = new Bowling();
    gutterGame = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    noTensGame = [7, 2, 7, 2, 7, 2, 7, 2, 7, 2, 7, 2, 7, 2, 7, 2, 7, 2, 7, 2];
    perfectGame = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    awkwardGame = [10, 10, 10, 9, 1, 10, 10, 10, 9, 1, 10, 10, 10, 10];
    awkwardGameTwo = [10, 5, 5, 4, 3, 7, 3, 10, 8, 1, 7, 2, 4, 3, 10, 7, 3, 7];
    awkwardGameThree = [9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 10];
    strikeFirst = [10, 5, 3, 10, 10, 10];
    spareFirst = [8, 2, 8, 10, 10, 10];
    strikeFrames = [[10, 10], [10], [10]];
    spareFrame = [[8,2], [5,2]];
    strikeFrame = [[10], [8,2]]
  });
  describe('The .score function', function() {
    it('can score a gutter game', function() {
      expect(bowling.score(gutterGame)).toEqual(0);
    });

    it('can score a game with no strikes or spares', function() {
      expect(bowling.score(noTensGame)).toEqual(90);
    });

    it('can score a perfect game', function() {
      expect(bowling.score(perfectGame)).toEqual(300);
    });

    it('can score an awkward games', function() {
      // expect(bowling.score(awkwardGame)).toEqual(258);
      // expect(bowling.score(awkwardGameTwo)).toEqual(142);
      expect(bowling.score(awkwardGameThree)).toEqual(191);
    });

    it('resets allFrames to an empty array', function(){
      bowling.score(perfectGame);
      expect(bowling.allFrames).toEqual([]);
    });
  });

  describe('The .createAllFramesArray function', function() {
    it('returns a frame scores array when given a full game array', function(){
      bowling.createAllFramesArray(perfectGame);
      expect(bowling.allFrames).toEqual([30, 30, 30, 30, 30, 30, 30, 30, 30, 30]);
    });
  });

  describe('The .buildStrikeFrame function', function() {
    it('removes the strike and adds next two scoring balls', function(){
      bowling.buildStrikeFrame(strikeFirst);
      expect(bowling.frame).toEqual([10, 5, 3]);
      expect(strikeFirst).toEqual([5, 3, 10, 10, 10]);
    });
  });

  describe('The .buildSpareFrame function', function() {
    it('removes the spare and adds next scoring ball', function(){
      bowling.buildSpareFrame(spareFirst);
      expect(bowling.frame).toEqual([8, 2, 8]);
      expect(spareFirst).toEqual([8, 10, 10, 10]);
    });
  });

  describe('The .addFrameToAllFramesArray function', function() {
    it('adds the sum of a frame to allFrames and sets frame to 0', function() {
      bowling.frame = [10, 8 , 2];
      bowling.addFrameToAllFramesArray();
      expect(bowling.allFrames).toEqual([20]);
      expect(bowling.frame).toEqual(0);
    });
  });

  describe('The .sum function', function() {
    it('returns the sum of an array', function(){
      expect(bowling.sum(perfectGame)).toEqual(120);
      expect(bowling.sum(spareFirst)).toEqual(48);
    });
  });

  describe('The .frameChecker function', function(){
    it('checks if its rolls need to be added to previous frames', function() {
      // expect(bowling.frameChecker(strikeFrames)).toEqual([[10, 10, 10], [10, 10], [10]]);
      // expect(bowling.frameChecker(spareFrame)).toEqual([[8, 2, 5], [5, 2]]);
      expect(bowling.frameChecker(strikeFrame)).toEqual([[10, 8, 2], [8, 2]]);
    });
  });



});
