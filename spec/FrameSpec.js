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
    frame.roll1(2);
    frame.roll2(3);
    expect(frame.rolls).toEqual([2,3]);
  });
});