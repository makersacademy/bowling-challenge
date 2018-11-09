'use strict';

describe('Tests frame', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it('expects the score at the start to be zero', function() {
    expect(scorecard.gameScore).toEqual(0);
  });

  it('the user can enter a score', function() {
    scorecard.enterScore(5);
    expect(scorecard.frameScore).toEqual(5);
  });

  it('roll count changes', function() {
    scorecard.changeRollCount();
    expect(scorecard.rollCount).toEqual(2);
    scorecard.changeRollCount();
    expect(scorecard.rollCount).toEqual(1);
  });

  it('increments frame if rollScore equals 10', function() {
    scorecard.enterScore(10);
    scorecard.incrementFrame();
    expect(scorecard.frame).toEqual(2);
  });

  it('does not increment frame if rollScore less than 10', function() {
    scorecard.enterScore(8);
    scorecard.incrementFrame();
    expect(scorecard.frame).toEqual(1);
  });

  it('increments frame if rollCount equals 2', function() {
    scorecard.changeRollCount();
    scorecard.incrementFrame();
    expect(scorecard.frame).toEqual(2);
  });

  it('cannot increment frame past 10', function() {
    scorecard.changeRollCount();
    for (var i = 0; i < 11; i++) scorecard.incrementFrame();
    expect(scorecard.frame).toEqual(10);
  });

  it('does not increment frame if rollCount equals 1', function() {
    scorecard.incrementFrame();
    expect(scorecard.frame).toEqual(1);
  });

  it('adds frameScore to gameScore if rollCount equals 2', function() {
    scorecard.enterScore(4);
    scorecard.addToGameScore(); // rollCount 1, if failed would add 4 to gameScore
    scorecard.changeRollCount();
    scorecard.enterScore(4);
    scorecard.addToGameScore(); // adds 8 to gameScore
    expect(scorecard.gameScore).toEqual(8);
  });

  it('resets frameScore to zero after rollCount set to 1', function() {
    scorecard.enterScore(4);
    scorecard.changeRollCount();
    expect(scorecard.frameScore).toEqual(4);
    scorecard.enterScore(4);
    scorecard.changeRollCount();
    scorecard.resetFrameScore();
    expect(scorecard.frameScore).toEqual(0);
  });

});
