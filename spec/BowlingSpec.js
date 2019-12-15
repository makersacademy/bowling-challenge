'use strict';

describe('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('should add the number of pins knocked to the scorecard', function(){
    bowling.addScore([5,'/'])
    expect(bowling.scorecard).toContain([5,'/']);
  });

  it('should return true if the last frame was a spare', function(){
    bowling.addScore([5,'/']);
    expect(bowling.isSpare()).toBeTruthy();
  });

  it('should return false if the last frame was not a spare', function(){
    bowling.addScore([5,4]);
    expect(bowling.isSpare()).toBeFalsy();
  })
});
