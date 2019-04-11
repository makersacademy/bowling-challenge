describe("Frame", function() {

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('#roll', function() {
    it('has two rolls', function() {
      expect(frame.firstRoll).toEqual(null);
      expect(frame.secondRoll).toEqual(null);
    });

    it('can add one roll', function() {
      frame.roll(2);
      expect(frame.firstRoll).toEqual(2);
      expect(frame.secondRoll).toEqual(null);
    });

    it('can add two rolls', function() {
      frame.roll(2);
      frame.roll(3);
      expect(frame.firstRoll).toEqual(2);
      expect(frame.secondRoll).toEqual(3);
    });
  });

  describe('#isComplete', function() {

    it('knows when frame complete', function () {
      frame.roll(2);
      frame.roll(3);
      expect(frame.isComplete()).toEqual(true);
    });

    it('knows when frame not yet complete', function() {
      frame.roll(2);
      expect(frame.isComplete()).toEqual(false);
    });

    it('can identify frame complete after strike', function() {
      frame.roll(10);
      expect(frame.isComplete()).toEqual(true);
    });
  });

  describe('#score', function() {
    it('calculates the score of frame', function() { // basic case
      frame.roll(2);
      frame.roll(3);
      expect(frame.score()).toEqual(5)
    });
  });

  describe('#isSpare', function() {
    it('can identify a spare', function() {
      frame.roll(5)
      frame.roll(5)
      expect(frame.isSpare()).toEqual(true)
    });

    it('can identify is not a spare', function() {
      frame.roll(2)
      frame.roll(3)
      expect(frame.isSpare()).toEqual(false)
    });

    it('can tell is not a spare when a strike', function() {
      frame.roll(10)
      expect(frame.isSpare()).toEqual(false)
    });
  });

  describe('#isStrike', function() {
    it('can identify a strike', function() {
      frame.roll(10)
      expect(frame.isStrike()).toEqual(true)
    });

    it('can identify is not a strike', function() {
      frame.roll(2)
      frame.roll(3)
      expect(frame.isStrike()).toEqual(false)
    });

    it('recognises it is not a strike when it is a spare', function() {
      frame.roll(5)
      frame.roll(5)
      expect(frame.isStrike()).toEqual(false)
    });
  });

});
