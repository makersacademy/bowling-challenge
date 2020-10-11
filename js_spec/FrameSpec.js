'use strict';

describe('Frame', function() {
  let frame

  beforeEach(function() {
    frame = new Frame();
  })
  
  it('should have a pinCount of 10 pins', function(){
    expect(frame.pinCount).toEqual(10);
  });


});
