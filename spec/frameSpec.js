'use strict';

describe('Frame', function(){
  var frame

  beforeEach(function(){
  frame = new Frame();
  });

  it('starts with no rolls by default', function(){
    expect(frame.rolls).toEqual([]);
  });
});
