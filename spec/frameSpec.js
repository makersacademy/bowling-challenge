'use strict'

describe('Frame', function(){
  var frame = new Frame;

  it('starts a frame with a roll count of 0', function(){
    expect(frame.rollCount).toEqual(0);
  });
});
