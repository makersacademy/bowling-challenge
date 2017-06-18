'use strict'

describe('Frame', function(){
  var frame = new Frame;

  it('starts a frame with a roll count of 0', function(){
    expect(frame.rollCount).toEqual(0);
  });
  it('can roll and knock down a random number of pins less than 10', function(){
    frame.roll();
    expect(frame.score).toBeLessThan(10);
  });
  it('can count the number of rolls', function(){
    frame.roll();
    expect(frame.rollCount).toEqual(2);
  });
});
