'use strict';

describe('Bowling', function() {
 var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('has a function that returns the current score of a frame and it starts with zero', function(){
    expect(bowling.currentFrameScore).toEqual(0);
  });

  it('has a total score which starts with zero', function() {
    expect(bowling.totalScore).toEqual(0);
  });

  it('has a bonus counter that starts at 0', function(){
    expect(bowling.currentBonus).toEqual(0);
  });

  it('has a counter for the frames that starts at 1', function (){
    expect(bowling.moveCount).toEqual(1);
  });

  it('has a counter that counts the roll in the frame that starts at 1', function () {
    expect(bowling.frameRoll).toEqual(1);
  });

  it('counts the score of a roll in a frame', function() {
    bowling.countScore(3);
    expect(bowling.totalScore).toEqual(3);
  });

  it('throws an error if the score is < 0 or score > 10', function () {
    expect(function() {
      bowling.validScore(11);
    }).toThrowError('Wrong score number');
  });

  it('throws an error if the score is outside the possible score limit during the second', function () {
      bowling.validScore(5);
      expect(function() {
        bowling.validScoreSecondMove(18);
      }).toThrowError('Wrong score number');

  });

  it('returns the total score of a roll', function() {

    bowling.countScore(5);
    expect(bowling.totalScore).toEqual(5);
  });

  it ('returns the number of the current roll', function () {
    expect();
  });

  // it ('returns the number of the current roll', function () {
  //   expect(bowling.currentRoll()).toEqual(1);
  // });

  it ('returns number of move', function() {
    expect(bowling.Move()).toEqual(1);

  });

  // it('has a function that returns a note, when the user rolls a spare', function () {
  //   expect(bowling.note()).toEqual('Spare');
  // });


});
