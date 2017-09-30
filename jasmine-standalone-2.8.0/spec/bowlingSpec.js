'use strict';

describe ('Bowling scorecard does the following', function() {

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('starts with default score of 0', function() {
    expect(bowling.currentScore()).toEqual(0);
  });

  it('allows user to roll ball and to score points', function(){
    bowling.roll(3);
    expect(bowling.currentScore()).toEqual(3);
  });

  it('pushes rolls to array of scores', function() {
    bowling.roll(4);
    bowling.roll(6);
    expect(bowling.allRolls()).toEqual([4,6]);
  });

  it('skips second roll if user rolls a strike', function() {
    bowling.roll(10);
    expect(bowling.allRolls()).toEqual([10,"X"]);
  });

  it('calculates score if player roles a strike', function() {
    bowling.roll(10);
    bowling.roll(7);
    bowling.roll(1);
    expect(bowling.currentScore()).toEqual(26);
  })
});
