"use strict";

describe('Frame', function(){

  let rollDouble = jasmine.createSpyObj("roll",["validRoll"]);
  rollDouble.validRoll.and.returnValue(true);
  
  it('should decrese number of pins remaining by a valid roll', function(){
    let frame = new Frame();
    frame.roll(3, rollDouble);
    expect(frame._pinsRemaining).toEqual(7);
  });


});