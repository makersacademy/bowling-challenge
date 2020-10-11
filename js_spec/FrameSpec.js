'use strict';

describe('Frame', function() {
  let frame

  beforeEach(function() {
    frame = new Frame();
  })
  
  it('should have a pinCount of max 10 pins', function() {
    expect(frame.pinCount).toEqual(10);
  });

  it('can receive a maximum of two rolls', function() {
    frame.receiveRoll(4);
    frame.receiveRoll(2);
    // passing anonymous function for error to be thrown, why?
    expect(function(){ frame.receiveRoll(4);} ).toThrow(new Error('Invalid roll!')) 
  });

  it('can receive a maximum of 10 pins in two rolls', function() {
    frame.receiveRoll(9);
    expect(function(){ frame.receiveRoll(4);} ).toThrow(new Error('You are not allowed to roll more than 10 pins per frame!')) 
  });

  it('knows the scores of each roll', function() {
    frame.receiveRoll(2);
    frame.receiveRoll(3);
    expect(frame.roll1).toEqual(2);
    expect(frame.roll2).toEqual(3);
  });

  it('knows when it is spare', function() {
    frame.receiveRoll(9);
    frame.receiveRoll(1);
    expect(frame.isSpare()).toBe(true);
  });

});
