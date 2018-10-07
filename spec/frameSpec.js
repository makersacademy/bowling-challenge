'use strict';

describe('Frame', function(){
  var frame

  beforeEach(function(){
  frame = new Frame();
  });

  it('starts with no rolls by default', function(){
    expect(frame.rolls).toEqual([]);
  });

  it('can add a roll to a frame', function(){
    frame.addRoll(3)
    expect(frame.rolls).toEqual([3]);
  });
});
