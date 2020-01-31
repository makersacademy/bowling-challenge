'use strict';

describe('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('shows count as zero at the start of the game', function(){
    expect(bowling.totalScore).toEqual(0);
  });

  it('shows what frame is played', function(){
    expect(bowling.currentFrame()).toEqual(1);
  });

  describe('when updating score', function() {
    beforeEach(function() {
      spyOn(bowling, '_randomRoll').and.returnValue(3);
      bowling.roll();
      bowling.updateScoreFirst();
    })

    it('resets current roll to zero once score is updated', function() {
      expect(bowling._currentRoll).toEqual(0);
    });

    it('updates frame score when ball is rolled on first roll', function() {
      expect(bowling.currentFrameRollOne()).toEqual(3);
      expect(bowling.currentFrameScore()).toEqual(3);
    });

    it('updates frame and total score after second roll - ignoring strike at the moment', function() {
      bowling._randomRoll.and.returnValue(5);
      bowling.roll();
      bowling.updateScoreSecond();
      expect(bowling.currentFrameRollTwo()).toEqual(5);
      expect(bowling.currentFrameScore()).toEqual(8);
      expect(bowling.totalScore).toEqual(8);
    })

    it('can play several frames', function() {
      bowling._randomRoll.and.returnValue(5);
      bowling.roll();
      bowling.updateScoreSecond();
      bowling.updateGame();
      bowling._randomRoll.and.returnValue(6);
      bowling.roll();
      bowling.updateScoreFirst();
      expect(bowling.currentFrameScore()).toEqual(6);
      bowling._randomRoll.and.returnValue(7);
      bowling.roll();
      bowling.updateScoreSecond();
      expect(bowling.currentFrameScore()).toEqual(13);
      expect(bowling.totalScore).toEqual(21);
    });
  });

  it('can create a new frame once the previous one is finished', function() {
    spyOn(bowling, '_randomRoll').and.returnValue(5);
    bowling.roll();
    bowling.updateScoreSecond();
    bowling.updateGame();
    expect(bowling.currentFrame()).toEqual(2);
  });

  it('creates another frame object with _newFrame method', function() {
    bowling._newFrame();
    expect(bowling.frames[1].rollOne).toEqual(0);
    expect(bowling.frames[1].rollTwo).toEqual(0);
    expect(bowling.frames[1].score).toEqual(0);
  });

  it('updates frame counter once previous frame completed', function() {
    spyOn(bowling, '_randomRoll').and.returnValue(5);
    bowling.roll();
    bowling.updateScoreSecond();
    expect(bowling._frameCounter).toEqual(2);
  });

  describe('when playing a game counting spares', function(){
    beforeEach(function() {
      spyOn(bowling, '_randomRoll').and.returnValue(3);
      bowling.roll();
      bowling.updateScoreFirst();
      bowling._randomRoll.and.returnValue(7);
      bowling.roll();
      bowling.updateScoreSecond();
      bowling.updateGame();
      bowling._randomRoll.and.returnValue(1);
      bowling.roll();
      bowling.updateScoreFirst();
      bowling._randomRoll.and.returnValue(2);
      bowling.roll();
      bowling.updateScoreSecond();
    });

    it('adds bonus points for a spare', function() {
      expect(bowling.totalScore).toEqual(14);
    });

    it('updates frame score for perevious frame with bonus points', function() {
      expect(bowling.frameScore(1)).toEqual(14);
    });
  });

});
