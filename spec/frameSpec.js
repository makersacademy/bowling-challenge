'use strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('says what frame number it is', function(){
    expect(frame.returnFrameNumber()).toEqual(1);
  });

});
