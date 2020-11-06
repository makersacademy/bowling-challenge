'use strict';
describe('Frame', function(){
  let frame;

  beforeEach(function(){
    frame = new Frame();
  })

  it('has an empty current frame by default', function(){
    expect(frame.currentFrame).toEqual([]);
  })

  describe('addToFrame', function(){
    it('adds pins to current frame', function(){
      frame.addToFrame(10);
      expect(frame.currentFrame).toContain(10);
    })
  })

  describe('total', function(){
    it('returns the sum of the current frame', function(){
      frame.addToFrame(3);
      frame.addToFrame(5);
      expect(frame.total()).toEqual(8);
    })
  })

  describe('firstRoll', function(){
    it('returns the first roll of the current frame', function(){
      frame.addToFrame(2);
      frame.addToFrame(5);
      expect(frame.firstRoll()).toEqual(2);
    })
  })
  describe 
})