'use strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('says what frame number it is', function(){
    expect(frame.returnFrameNumber()).toEqual(1);
  });

  it('takes an argument and returns it for the first roll of each frame', function(){
    expect(frame.rollOne(8)).toEqual(8);
  });

});
