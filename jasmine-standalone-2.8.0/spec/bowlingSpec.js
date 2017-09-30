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
    bowling.roll(5);
    bowling.roll(3);
    expect(bowling.currentScore()).toEqual(8);
  });

  it('allows user to play max of 2 balls per frame', function() {
    bowling.playFrame(4,6);
    expect(bowling.thisFrame()).toEqual(4,6);
  });
});
