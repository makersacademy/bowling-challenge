describe('frame', function() {
  beforeEach(function() {
    frame = new Frame();
  });

  describe('when a single bowl score is submitted', function() {
    it('stores pins bowled', function() {
      frame.bowl(8)
      expect(frame.bowls).toContain(8)
    });

    it('adds the pins to the frame score', function() {
      frame.bowl(8)
      expect(frame.score).toEqual(8)
    });
  
    it('knows if the frame is over', function() {
      frame.bowl(10)
      expect(frame.end).toBe(true)
    });
  });

  it('cannot have a score higher than 10', function() {
    frame.bowl(5)
    frame.bowl(6)
    expect(frame.score).toEqual(5)
  });

  describe('when all pins are knocked down', function() {
    it('knows it\'s a strike', function() {
      frame.bowl(10)
      expect(frame.strike).toBe(true)
      expect(frame.spare).toBe(false)
    });
  
    it('knows it\'s a spare', function() {
      frame.bowl(5)
      frame.bowl(5)
      expect(frame.spare).toBe(true)
      expect(frame.strike).toBe(false)
    });
  });

  describe('when not all pins are knocked down', function() {
    it('knows it\'s not a strike or spare', function() {
      frame.bowl(5)
      frame.bowl(2)
      expect(frame.strike).toBe(false)
      expect(frame.spare).toBe(false)
    });
  });
});
