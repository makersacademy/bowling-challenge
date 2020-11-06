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
  
  describe('isSpare', function(){
    it('returns true if frame is a spare', function(){
      frame.addToFrame(5);
      frame.addToFrame(5);
      expect(frame.isSpare()).toEqual(true);
    })

    it('returns false if frame is not a spare', function(){
      frame.addToFrame(1);
      frame.addToFrame(5);
      expect(frame.isSpare()).toEqual(false);
    })
  }) 

  describe('isStrike', function(){
    it('returns true if frame is a strike', function(){
      frame.addToFrame(10);
      frame.addToFrame(0);
      expect(frame.isStrike()).toEqual(true);
    })

    it('returns false if frame is not a strike', function(){
      frame.addToFrame(1);
      frame.addToFrame(5);
      expect(frame.isStrike()).toEqual(false);
    })
  }) 

  describe('isBonusFrame', function(){
    it('returns true if bonus frame', function(){
      frame.addToFrame(10);
      frame.addToFrame(0);
      frame.addToFrame(2);
      expect(frame.isBonusFrame()).toEqual(true);
    })

    it('returns false if not bonus frame', function(){
      frame.addToFrame(10);
      frame.addToFrame(0);
      expect(frame.isBonusFrame()).toEqual(false);
    })
  })
})