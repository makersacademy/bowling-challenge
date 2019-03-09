'use strict';

describe('Frame', function(){
  var frame;
  var pins_standing;

  beforeEach(function(){
    frame = new Frame(pins_standing);
    pins_standing = new Pin();
  })

  it('each frame should contain 10 pins', function(){
    expect(frame.pins.length).toEqual(10);
  })

  it('cannot knock more than 10 pins in one frame', function(){
    expect(function(){frame.bowl(11)}).toThrowError('You cannot knock more than 10 pins down!')
  })

});
