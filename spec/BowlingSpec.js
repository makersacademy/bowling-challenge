'use strict';

describe ('bowling game', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('starts with a score', function(){
    expect(bowling.getScore()).toEqual(0);
  });

  it('tracks the frames count properly', function(){
    bowling.getRoll();
    bowling.getRoll();
    bowling.getRoll();
    expect(bowling.getCurrentFrame()).toEqual(2)
  });


  it ('shows the pins you start the game with', function(){
    expect(bowling.getPins()).toEqual(10);
  });


  it ('calculates the bonus for SPARE', function(){
      bowling.roll = function() { return 5; };
      bowling.getRoll();
      bowling.getRoll();
      bowling.getRoll();
      bowling.roll = function() { return 3; };
      bowling.getRoll();
      bowling.roll = function() { return 8; };
      bowling.getRoll();
      bowling.roll = function() { return 2; };
      bowling.getRoll();
      bowling.roll = function() { return 0;};
    for ( var i = 0; i < 14; i++){
      bowling.getRoll();};
      bowling.getBonus();
    expect(bowling.getScore()).toEqual(33)
  });

  it ('calculates the bonus for STRIKE', function(){
    bowling.roll = function() { return 10; };
      bowling.getRoll();
      bowling.getRoll();
      bowling.getRoll();
      bowling.getRoll();
    for ( var i = 0; i < 17; i++){
      bowling.roll = function() { return 0; };
      bowling.getRoll();};
      bowling.getBonus();
      expect(bowling.getScore()).toEqual(90)
  });

  it ('plays the perfect game', function(){
    bowling.roll = function() { return 10; };
    for ( var i = 0; i < 20; i++){
      bowling.getRoll();};
      bowling.getBonus();
      expect(bowling.getScore()).toEqual(300)
  });

  it ('plays the gutter game', function() {
    bowling.roll = function() {return 0; };
    for (var i = 0; i < 20; i++){
      bowling.getRoll();};
      bowling.getBonus();
      expect(bowling.getScore()).toEqual(0)
  });









});
