'use strict';
describe('Frame', function(){
  let frame;

  beforeEach(function(){
    frame = new Frame();
  })

  it('has an empty current frame by default', function(){
    expect(frame.currentFrame).toEqual([]);
  })
  describe('adding to frames', function(){
    it('adds pins to current frame', function(){
      frame.addToFrame(10);
      expect(frame.currentFrame).toContain(10);
    })
  })
})