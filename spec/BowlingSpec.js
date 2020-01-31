'use strict';

describe('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('shows count as zero at the start of the game', function(){
    expect(bowling.totalScore).toEqual(0);
  });

  it('allows to roll a ball and return a number of pins hit', function(){
    spyOn(Math, 'random').and.returnValue(0.5);
    bowling.roll();
    bowling.updateScoreFirst();
    expect(bowling.totalScore).not.toEqual(0);
  });

  it('shows what frame is played', function(){
    expect(bowling.currentFrame()).toEqual(1);
  });

  it('shows score on first roll in given frame', function(){
    expect(bowling.currentFrameRollOne()).toEqual(0);
  })

  it('shows score on second roll only in given frame', function() {
    expect(bowling.currentFrameRollTwo()).toEqual(0);
  })

  it('shows total score in gived frame', function(){
    expect(bowling.currentFrameScore()).toEqual(0);
  })

  it('resets current roll to zero once score is updated', function() {
    spyOn(bowling, '_randomRoll').and.returnValue(8);
    bowling.roll();
    bowling.updateScoreFirst();
    expect(bowling._currentRoll).toEqual(0);
  });

  describe('when updating score with one frame only', function() {
    beforeEach(function() {
      spyOn(bowling, '_randomRoll').and.returnValue(3);
      bowling.roll();
      bowling.updateScoreFirst();
    })

    it('updates frame and total score when ball is rolled on first roll', function() {
      expect(bowling.currentFrameRollOne()).toEqual(3);
      expect(bowling.currentFrameScore()).toEqual(3);
      expect(bowling.totalScore).toEqual(3);
    });

    it('updates score after second roll - ignoring strike at the moment', function() {
      bowling._randomRoll.and.returnValue(5);
      bowling.roll();
      bowling.updateScoreSecond();
      expect(bowling.currentFrameRollTwo()).toEqual(5);
      expect(bowling.currentFrameScore()).toEqual(8);
      expect(bowling.totalScore).toEqual(8);
    })
  });

  it('can create a new frame once the previous one is finished', function() {
    spyOn(bowling, '_randomRoll').and.returnValue(5);
    bowling.roll();
    bowling.updateScoreSecond();
    expect(bowling.currentFrame()).toEqual(2);
  });

});
