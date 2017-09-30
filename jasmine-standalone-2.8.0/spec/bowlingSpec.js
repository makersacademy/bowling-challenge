'use strict';

describe ('Bowling scorecard does the following', function() {

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('starts with default score of 0', function() {
    expect(bowling.currentScore()).toEqual(0);
  });

  it('starts creates empty frame hash on creation',function() {
    expect(bowling.frameScore("f1.1")).toEqual('-');
  });

  it('allows user to roll ball and to score points', function(){
    bowling.roll(5);
    bowling.roll(3);
    expect(bowling.currentScore()).toEqual(8);
  });

  // it('stores two rolls in a frame score'), function() {
  //   bowling.roll(5);
  //   bowling.roll(3);
  //   expect()
  // }
});
