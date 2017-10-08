'use strict';

describe ('Bowling scorecard does the following', function() {

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('starts with default score of 0', function() {
    expect(bowling.currentScore()).toEqual(0);
  });

  it('allows user to roll up to two balls and have these added to score', function(){
    bowling.roll1();
    bowling.roll4();
    expect(bowling.currentScore()).toEqual(5);
  });

  it('pushes rolls to array of scores', function() {
    bowling.roll4();
    bowling.roll6();
    expect(bowling.allScores.slice(-2)).toEqual([4,6]);
  });

  it('skips second roll if user rolls a strike', function() {
    bowling.rollStrike();
    expect(bowling.allFrames.slice(-1)[0]).toEqual([10,0]);
  });

  it('calculates score if player roles one strike', function() {
    bowling.rollStrike();
    bowling.roll5();
    bowling.roll1();
    expect(bowling.currentScore()).toEqual(22);
  })

  it('calculates score if player roles a spare', function() {
    bowling.roll5();
    bowling.roll5();
    bowling.roll5();
    bowling.roll1();
    expect(bowling.currentScore()).toEqual(21);
  })

  it('logs spares', function(){
    bowling.roll5();
    bowling.roll5();
    expect(bowling.strikesSpares.slice(-1)).toEqual(['spare']);
  })

  it('only increases score when frame is over', function() {
    bowling.roll7();
    expect(bowling.currentScore()).toEqual(0);
  })

  it('stops player from playing too many balls', function() {
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
    bowling.roll1();
  expect(bowling.roll1()).toThrow("Game is over - Cannot roll again");
  });

});
