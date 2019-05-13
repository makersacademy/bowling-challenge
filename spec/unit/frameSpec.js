describe('frame', function() {
  var Frame = require('../../src/frame');
  var frame, number;

  beforeEach(function() {
    number = 2;
    frame = new Frame(number);
  });

  describe('::new', function() {
    it('will initialise with 0 pins hits', function() {
      expect(frame.score()).toBe(0);
    });

    it('will initialise with frame number', function() {
      expect(frame.number()).toEqual(number);
    });
  });

  describe('#number', function() {
    it('returns frame number', function() {
      expect(frame.number()).toEqual(number);
    });
  });

  describe('#pinsHit', function() {
    it('records the number of pins hit in the frame', function() {
      var number = 1;
      frame.pinsHit(number);
      expect(frame._rolls[0]).toEqual(number);
    });
  });

  describe('#rollOne', function() {
    it('returns first roll', function() {
      var firstRoll = 4;
      frame.pinsHit(firstRoll)
      expect(frame.rollOne()).toEqual(firstRoll);
    });
  });

  describe('#rollTwo', function() {
    it('returns second roll', function() {
      var firstRoll = 2;
      var secondRoll = 6;
      frame.pinsHit(firstRoll);
      frame.pinsHit(secondRoll);
      expect(frame.rollTwo()).toEqual(secondRoll);
    });
  });

  describe('#score', function() {
    it('returns the score for the frame', function() {
      expect(frame.score()).toEqual(0);
      frame.pinsHit(3);
      frame.pinsHit(5);
      expect(frame.score()).toEqual(8);
    });
  });

  describe('#calcuateScore', function() {
    it('calculates the score for the frame', function() {
      frame.pinsHit(3);
      frame.pinsHit(2);
      expect(frame.score()).toEqual(5);
    });
  });

  describe('#isComplete', function() {
    it('returns true if 2 rolls are taken in frame', function() {
      expect(frame.isComplete()).toBe(false);
      frame.pinsHit(2);
      frame.pinsHit(6);
      expect(frame.isComplete()).toBe(true);
    });

    it('returns true if a strike is rolled', function() {
      expect(frame.isComplete()).toBe(false);
      frame.pinsHit(10);
      expect(frame.isComplete()).toBe(true);
    });

    it('returns false if not complete', function() {
      expect(frame.isComplete()).toBe(false);
      frame.pinsHit(1);
      expect(frame.isComplete()).toBe(false);
    });
  });

  describe('#isStrike', function() {
    it('returns true if a strike is rolled', function() {
      expect(frame.isStrike()).toBe(false);
      frame.pinsHit(10);
      expect(frame.isStrike()).toBe(true);
    });

    it('returns false if a strike is not rolled', function() {
      expect(frame.isStrike()).toBe(false);
      frame.pinsHit(1);
      expect(frame.isStrike()).toBe(false);
    });

    it('returns false if a spare is rolled', function() {
      expect(frame.isStrike()).toBe(false);
      frame.pinsHit(1);
      frame.pinsHit(9);
      expect(frame.isStrike()).toBe(false);
    });
  });

  describe('#isSpare', function() {
    it('returns true if a spare is rolled', function() {
      expect(frame.isSpare()).toBe(false);
      frame.pinsHit(4);
      frame.pinsHit(6);
      expect(frame.isSpare()).toBe(true);
    });

    it('returns false if there is only 1 roll', function() {
      expect(frame.isSpare()).toBe(false);
      frame.pinsHit(1);
      expect(frame.isSpare()).toBe(false);
    });

    it('returns false if a strike is rolled', function() {
      expect(frame.isSpare()).toBe(false);
      frame.pinsHit(10);
      expect(frame.isSpare()).toBe(false);
    });
  });
});
