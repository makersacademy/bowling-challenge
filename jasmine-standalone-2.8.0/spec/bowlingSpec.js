'use strict';

describe ('Bowling scorecard does the following', function() {

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('starts with default score of 0', function() {
    expect(bowling.currentScore()).toEqual(0);
  });

  it('allows user to roll ball and to score 1 point', function(){
    bowling.roll1();
    expect(bowling.currentScore()).toEqual(1);
  });

  it('allows user to roll ball and to score 2 points', function(){
    bowling.roll2();
    expect(bowling.currentScore()).toEqual(2);
  });

  it('allows user to roll ball and to score 3 points', function(){
    bowling.roll3();
    expect(bowling.currentScore()).toEqual(3);
  });

  it('allows user to roll ball and to score 4 points', function(){
    bowling.roll4();
    expect(bowling.currentScore()).toEqual(4);
  });

  it('allows user to roll ball and to score 5 points', function(){
    bowling.roll5();
    expect(bowling.currentScore()).toEqual(5);
  });

  it('allows user to roll ball and to score 6 points', function(){
    bowling.roll6();
    expect(bowling.currentScore()).toEqual(6);
  });

  it('allows user to roll ball and to score 7 points', function(){
    bowling.roll7();
    expect(bowling.currentScore()).toEqual(7);
  });

  it('allows user to roll ball and to score 6 points', function(){
    bowling.roll8();
    expect(bowling.currentScore()).toEqual(8);
  });

  it('allows user to roll ball and to score 9 points', function(){
    bowling.roll9();
    expect(bowling.currentScore()).toEqual(9);
  });

  it('allows user to roll ball and to score 10 points', function(){
    bowling.rollStrike();
    expect(bowling.currentScore()).toEqual(10);
  });

  it('pushes rolls to array of scores', function() {
    bowling.roll4();
    bowling.roll6();
    expect(bowling.allRolls()).toEqual([4,6]);
  });

  it('skips second roll if user rolls a strike', function() {
    bowling.rollStrike();
    expect(bowling.allRolls()).toEqual([10,null]);
  });

  it('calculates score if player roles a strike', function() {
    bowling.rollStrike();
    bowling.roll7();
    bowling.roll1();
    expect(bowling.currentScore()).toEqual(26);
  })
});
