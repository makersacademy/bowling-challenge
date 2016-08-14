'use strict';

describe ('bowling game', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('starts with a score', function(){
    expect(bowling.getScore()).toEqual(0);
  });

  it('lets the player to roll', function(){
    expect(bowling.getRoll()).not.toEqual(0);
  });

  it('lets the player to roll two times in one frame',function(){

    bowling.roll = function() { return 5; };
    bowling.getRoll();
    bowling.getRoll();
    expect(bowling.getCurrentFrame()).toEqual(2)
    expect(bowling.getScore()).toEqual(15)
  });

  it ('shows the pins you start the game with', function(){
    expect(bowling.getPins()).toEqual(10);
  });




});
