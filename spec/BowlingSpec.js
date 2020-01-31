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
    expect(bowling._currentRoll).not.toEqual(0);
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

  it('updates score when ball is rolled on first roll', function() {
    spyOn(bowling, '_randomRoll').and.returnValue(8);
    bowling.roll();
    bowling.updateScoreFirst();
    expect(bowling.currentFrameRollOne()).toEqual(8);
    expect(bowling.currentFrameScore()).toEqual(8);
  });
});
