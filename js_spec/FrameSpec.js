'use strict';

  
describe('Frame', function() {
  let frame;
  // let FrameTen;

  beforeEach(function() {
    frame = new Frame();
    // frameTen = new FrameTen();
  });

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

  describe('isSpare', function() {
    it('knows when it is spare', function() {
      frame.receiveRoll(9);
      frame.receiveRoll(1);
      expect(frame.isSpare()).toBe(true);
    });
  });

  describe('isStrike', function() {  
    it('knows when it is strike', function() {
      frame.receiveRoll(10);
      expect(frame.isStrike()).toBe(true);
    });
  });
 
  // describe('isFrameTen', function () {
  
  //   it('can receive a maximum of two rolls if not strike or spare', function() {
  //     frame.isFrameTen == true;
  //     frameTen.receiveRoll(4);
  //     frameTen.receiveRoll(2);
  //     // passing anonymous function for error to be thrown, why?
  //     expect(function() { frameTen.receiveRoll(4);} ).toThrow(new Error('Invalid roll!')) 
  //   });

  //   it('in frameTen can receive only 3 rolls if strike', function() {
  //     frame.isFrameTen == true;
  //     frameTen.receiveRoll(10);
  //     frameTen.receiveRoll(4);
  //     frameTen.receiveRoll(2);
  //     expect( function () { frameTen.receiveRoll(2); } ).toThrow( new Error ('This was your last roll.'));
  //   });
  // });

  

});
