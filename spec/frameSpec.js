'use strict'

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('starts a frame with a roll count of 0', function(){
    expect(frame.rollCount).toEqual(0);
  });
  it('can roll and knock down a random number of pins less than 10', function(){
    frame.roll();
    expect(frame.score).toBeLessThan(11);
  });
  it('can count the number of rolls', function(){
    frame.roll();
    frame.roll();
    expect(frame.rollCount).toEqual(2);
  });
  it('throws an error if three rolls are taken', function(){
    frame.roll();
    frame.roll();
    expect(function(){
      frame.roll();
    }).toThrow("Only two rolls allowed!");
  });
  it('starts with a result of an empty array', function(){
    expect(frame.result).toEqual([])
  });
  it('can add the score to an array after each roll', function(){
    frame.roll();
    frame.roll();
    expect(frame.result.length).toBe(2);
  });
});
