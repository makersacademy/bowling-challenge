describe('The Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame
  })

  describe('#addRoll', function() {
    it('stores roll', function() {
      frame.addRoll(4);
      expect(frame.rolls).toEqual([4])
    });
    it('ends frame if strike', function() {
      frame.addRoll(10);
      expect(frame.rolls).toEqual([10]);
      expect(frame.frameOver).toEqual(true);
    });
    it('refuses higher number input than maxpins', function(){
      expect(function() { frame.addRoll(32);}).toThrow()
    })
  });

  describe('#isStrike', function() {
    it('should return true if strike', function() {
      expect(frame.isStrike(10)).toEqual(true);
    });
    it('should return false if not a strike', function() {
      expect(frame.isStrike(4)).toEqual(false);
    });
  });

  describe('#isSpare', function() {
    it('should return true if spare', function() {
      frame.addRoll(6);
      frame.addRoll(4);
      expect(frame.isSpare()).toEqual(true);
    });
    it('should return false if not a spare', function() {
      frame.addRoll(6);
      frame.addRoll(1);
      expect(frame.isSpare()).toEqual(false);
    });
  });


});
