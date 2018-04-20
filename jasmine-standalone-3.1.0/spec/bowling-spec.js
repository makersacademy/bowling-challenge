'use strict';

describe('Bowling', function() {
 var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('has a function that returns the current score and it starts with zero', function(){
    expect(bowling.currentScore).toEqual(0);
  });

  it('starts with zero', function() {
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

  it('counts the score of a roll, if the score is between 1 and 10', function() {
    expect(bowling.countScore(3)).toEqual(3);
  });

  it('throws an error if the score is < 0 or score > 10', function () {
    expect(function() {
      bowling.countScore(11);
    }).toThrowError('Wrong score number');
  });

  it('returns the total score of a roll', function() {

    bowling.countScore(5);
    expect(bowling.countTotal()).toEqual(5);
  });

  it ('returns the number of the current roll', function () {
    bowling.countScore(5);
    expect(bowling.currentRoll()).toEqual(2);
  });

  it ('returns the number of the current roll', function () {
    expect(bowling.currentRoll()).toEqual(1);
  });
  
  it ('returns number of move', function() {
    expect(bowling.Move()).toEqual(1);

  });

  // it('has a function that returns a note, when the user rolls a spare', function () {
  //   expect(bowling.note()).toEqual('Spare');
  // });


});
