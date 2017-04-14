'use strict';

describe('Frame', function(){

  var frame;

  beforeEach(function(){
    var knockedPins = 3
    frame = new Frame(knockedPins);
  });

  it('should keep track of how many rolls have been made', function(){
    expect(frame.getRollNumber()).toEqual(0);
  });

  it('logs the knocked pins of first roll', function(){
    expect(frame.getFirstRoll()).toEqual(3);
  });

  it('logs the knocked pins of second roll', function(){
    frame.secondRoll(5);
    expect(frame._secondRoll).toEqual(5);
  });

  it('checks if roll is a strike', function(){
    
  })

})
