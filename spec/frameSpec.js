'use strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('takes an argument and returns it for the first roll of each frame', function(){
    expect(frame.rollOne(8)).toEqual(8);
  });

  it('takes an argument and returns it for the second roll of each frame', function(){
    expect(frame.rollTwo(1)).toEqual(1);
  });

  it('says what frame number it is', function(){
    expect(frame.returnFrameNumber()).toEqual(1);
  });

  it('increments the frame number by 1', function() {
    expect(frame.frameNumberCounter()).toEqual(2);
  });

});
