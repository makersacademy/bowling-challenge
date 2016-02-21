describe('Frame', function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  describe('#constructor', function () {
    it('initializes a frame with 10 pins', function () {
      expect(frame.remainingPins()).toEqual(10);
    });
  });

  describe('#roll', function () {
    it('subtracts a random number from the remaining pins', function () {
      spyOn(frame, '_getRandomIntInclusive').and.returnValue(5);
      frame.roll();
      expect(frame.remainingPins()).toEqual(5);
    });
  });

  describe('#isFirstRoll', function () {
    it('returns true if the player has yet to roll for this frame', function () {
      expect(frame.isFirstRoll()).toBeTruthy();
    });

    it('returns false if the player has already taken the first roll for this frame', function () {
      frame.roll();
      expect(frame.isFirstRoll()).toBeFalsy();
    })
  });

  describe('#isAStrike', function () {
    it('returns true if the first roll was a strike', function () {
      spyOn(frame, '_getRandomIntInclusive').and.returnValue(10);
      frame.roll();
      expect(frame.isAStrike()).toBeTruthy();
    });

    it('returns false if the first roll was not a strike', function () {
      spyOn(frame, '_getRandomIntInclusive').and.returnValue(5);
      frame.roll();
      expect(frame.isAStrike()).toBeFalsy();
    });
  });

  describe('#isASpare', function () {
    it('returns true if there were no pins left after the second roll', function () {
      spyOn(frame, '_getRandomIntInclusive').and.returnValue(5);
      frame.roll();
      frame.roll();
      expect(frame.isASpare()).toBeTruthy();
    });

    it('returns false if there are pins left after the second roll', function () {
      spyOn(frame, '_getRandomIntInclusive').and.returnValue(2);
      frame.roll();
      frame.roll();
      expect(frame.isASpare()).toBeFalsy();
    });
  });
});
