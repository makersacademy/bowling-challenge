describe('Frame', function() {
  beforeEach(function() {
    frame = new Frame;
  });
  it('should have empty array of rolls when initialized', function() {
    expect(frame.rolls()).toEqual([]);
  });
  it('should have have _score set to 0 when initialized', function() {
    expect(frame._score).toEqual(0);
  })

  describe('.addRoll', function() {
    it('should push a roll to rolls array', function() {
      frame.addRoll(7);
      expect(frame.rolls()).toEqual([7]);
    });
    it('should add roll value to _score', function() {
      frame.addRoll(7);
      frame.addRoll(2);
      expect(frame._score).toEqual(9);
    });
    it('should throw exception when roll will increase sum of rolls to > 10', function() {
      expect(function() {
        frame.addRoll(5); frame.addRoll(6);
      }).toThrow(new Error('Input Error: Cannot knock down more than 10 Pins per frame!'));
    });
  });

  describe('.score', function() {
    it('should return score when score is called', function() {
      frame.addRoll(7);
      frame.addRoll(2);
      expect(frame.score()).toEqual(9);
    })
  });
});
