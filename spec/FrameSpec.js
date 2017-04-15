'use strict';

describe('Frame', function(){
  var frame;
  beforeEach(function(){
    frame = new Frame();
  });

  it('starts at frame 1', function(){
    expect(frame.count).toEqual(1);
  });
});
