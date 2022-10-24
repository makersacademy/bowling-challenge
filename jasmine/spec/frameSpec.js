describe('Frame', function() {

  var frame;
  var error;

  beforeEach(function() {
    frame = new Frame();
    error = new Error('Unable to add bowl, not a valid value');
  });

  describe('addBowl', function() {
    it('sets the first bowl value to the score', function() {
      frame.addBowl(4);
      expect(frame.firstBowl).toEqual(4);
    });

    it('sets the second bowl value to the score', function() {
      frame.addBowl(4);
      frame.addBowl(5);
      expect(frame.secondBowl).toEqual(5);
    });
  });

  describe('checkValid', function() {
    it('rejects an initial score over 10', function() {
      expect(function () { frame._checkValid(11); } ).toThrow(error);
    });

    it('rejects an initial score less than 0', function() {
      expect(function () { frame._checkValid(-1); } ).toThrow(error);
    });

    it('rejects an second score if it would take the total above 10', function() {
      frame.addBowl(5)
      expect(function () { frame._checkValid(6); } ).toThrow(error);
    });
  });
});
