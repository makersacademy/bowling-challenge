'use strict';

describe('Scoring', function() {

  var scoring;

  beforeEach(function() {
    scoring = new Scoring();
  });

  describe('gutter game', function() {

    it('returns true when game was a gutter game/0 total score', function() {
      expect(scoring.isGutterGame(0)).toBe(true);
    });

    it('returns false when game was not a gutter game/> 0 total score',function() {
      expect(scoring.isGutterGame(1)).toBe(false);
    });

  });

  describe('one frame', function(){

    it('starts each frame with an empty array', function(){
      expect(scoring._currentFrame).toEqual([])
    });

    it('returns the score for one frame', function() {
      expect(scoring.frameScore(8, 1)).toEqual(9);
    });

  });

  describe('multiple frames', function() {

    it('adds the frame score to totalScore array', function() {
      var frameScore = 2;
      scoring.saveFrameScore(frameScore);
      expect(scoring._gameScore).toContain(frameScore);
    });

    it('returns the score for multiple frames', function() {
      scoring.saveFrameScore(1);
      scoring.saveFrameScore(9);
      expect(scoring.getTotalScore()).toEqual(10);
    });

  });

  describe('roll', function(){

    it('saves the amount of pins knocked down into _currentFrame', function() {
      spyOn(Math, 'random').and.returnValue(0.2);
      var rollResult = scoring.roll();
      expect(scoring._currentFrame).toContain(rollResult);
    });

    it('ensures roll cannot return a number more than pins left in current frame', function() {
      spyOn(Math, 'random').and.returnValue(1);
      scoring.roll();
      expect(scoring.roll()).toEqual(0);
    });

    it('returns the pins left in current frame', function() {
      expect(scoring.pinsLeft(1)).toEqual(9);
    });

    it('resets _currentFrame to an empty array when frame is over', function() {
      spyOn(Math, 'random').and.returnValue(0.4);
      scoring.roll();
      scoring.roll();
      expect(scoring._currentFrame.length).toEqual(0);
    });

    it('limits the game to 10 frames', function() {
      spyOn(Math, 'random').and.returnValue(1);
      for(var count = 0; count < 10; count++) {
        scoring.roll();
      };
      expect(scoring.roll()).toEqual("10 frames have been played - the game is now over.");
    });

  });

  describe('random', function() {

    it('returns a random amount of pins knocked down', function(){
      spyOn(Math, 'random').and.returnValue(0.2);
      expect(scoring.random()).toEqual(2);
    });

  });

});

// Gutter game
// One frame
// Multiple frames
// Spares
// Strikes
// Final Frame
