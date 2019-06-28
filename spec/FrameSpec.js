"use strict";

describe('Frame', function(){

  let rollDouble = jasmine.createSpyObj("roll",["validRoll"]);
  rollDouble.validRoll.and.returnValue(true);
  
  it('should decrese number of pins remaining by a valid roll', function(){
    let frame = new Frame();
    frame.roll(3, rollDouble);
    expect(frame.numberPinsRemaining()).toEqual(7);
  });

  it('should return a correct score for 2 rolls', function(){
    let frame = new Frame();
    frame.roll(3, rollDouble);
    frame.roll(3, rollDouble);
    expect(frame.totalScore()).toEqual(6);
  });

  it('should register a strike in a frame', function(){
    let frame = new Frame();
    frame.roll(9, rollDouble);
    expect(frame.isAStrike()).toBe(true);
  });


});