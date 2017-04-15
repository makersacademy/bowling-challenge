'use strict';

describe('Bowling', function() {
  var bowling;

  bowling = new Bowling;

  it('User can input one roll', function(){
    bowling.firstThrow(3);
    expect(bowling.frame.first).toEqual(3);
  });

  it('User can make a second roll and both score accumulate for a frame', function(){
    bowling.firstThrow(3);
    bowling.secondThrow(6);
    // debugger;
    expect(bowling.frameScore()).toEqual(9);
  });

  it('User can make a Strike', function(){
    bowling.firstThrow(10);
    bowling.isStrike();
    // debugger;
    expect(bowling.strike).toEqual(true);
  });

  it("Check Strike is not set if 10 pins are scored on 2 throws", function(){
    bowling.firstThrow(5);
    bowling.secondThrow(5);
    bowling.isStrike();
    // debugger;
    expect(bowling.strike).toEqual(false);
  });

  it("User can make a Spare", function(){
    bowling.firstThrow(5);
    bowling.secondThrow(5);
    bowling.isSpare();
    expect(bowling.spare).toEqual(true);
  });


});
