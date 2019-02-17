describe('Frame', function() {
  var frame;
  beforeEach(function() {
    frame = new Frame();
  })  
  it('has no rolls by default', function() {
    expect(frame._rolls).toEqual([]);
  });

  describe('addRoll', function() {
    it('can add a roll', function() {
      frame.addRoll(9);
      expect(frame._rolls).toEqual([9]);
    })
    it('can add a second roll', function() {
      frame.addRoll(5);
      frame.addRoll(4);
      expect(frame._rolls).toEqual([5,4]);
    })
    it('throws error when rolling a third time', function() {
      frame.addRoll(5);
      frame.addRoll(4);
      expect(function(){frame.addRoll(1)}).toThrowError('Already rolled twice!');
    })
    it('stops rolling if first roll is a strike', function() {
      frame.addRoll(10);
      expect(frame._rolls).toEqual([10,0]);
    })
  })
  describe('score', function() {
    it('returns total score of current frame', function() {
      frame.addRoll(5);
      frame.addRoll(3);
      expect(frame.frameScore()).toBe(8);
    });
  })
  describe('isASpare', function() {
    it('checks if frame is a spare', function() {
      frame.addRoll(5);
      frame.addRoll(5);
      expect(frame.isASpare()).toBe(true);
    })
    it('returns false if frame is not a spare', function() {
      frame.addRoll(5);
      frame.addRoll(4);
      expect(frame.isASpare()).toBe(false);
    })
  })
  describe('isAStrike', function() {
    it('returns true', function() {
      frame.addRoll(10);
      expect(frame.isAStrike()).toBe(true);
    })
    it('returns false', function() {
      frame.addRoll(5);
      frame.addRoll(4);
      expect(frame.isAStrike()).toBe(false);
    })
  })
})
