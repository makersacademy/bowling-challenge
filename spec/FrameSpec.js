'use strict';

describe('Frame',function(){
  var frame;

  beforeEach(function(){
    frame = new Frame(); 
  });

  it ('keeps track of rolls', function(){
    expect(frame.rolls).toEqual([]);
    expect(frame.frameTotal).toEqual((0))
  });

  it ('takes in rolls as parameters', function(){
    frame.firstRoll(2);
    frame.secondRoll(3);
    expect(frame.rolls).toEqual([2,3]);
  });

  it ('adds a total of rolls', function(){
    frame.firstRoll(3);
    frame.secondRoll(6);
    expect(frame.frameTotal).toEqual(9);
  });

  it ('keeps track of strikes', function(){
    frame.firstRoll(10);
    expect(frame.isStrike()).toBe(true);
  });

  it ('keeps track of spares', function(){
    frame.firstRoll(3);
    frame.secondRoll(7);
    expect(frame.isSpare()).toBe(true);
  });
 
});