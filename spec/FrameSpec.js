describe('Frame', function() {

  var frame;
  beforeEach(function() {
    frame = new Frame();
  });

  it('is empty on initialisation', function() {
    expect(frame.first).toBe(null);
    expect(frame.second).toBe(null);
  });

  it('can be set with a pair of shots', function() {
    frame.setShots(4, 5);
    expect(frame.first).toBe(4);
    expect(frame.second).toBe(5);
  });

  describe('recognises when it is', function() {
    it('a strike', function() {
      frame.setShots(10);
      expect(frame.isStrike()).toBe(true);
      expect(frame.isSpare()).toBe(false);
    });
    it('a spare', function() {
      frame.setShots(7, 3);
      expect(frame.isStrike()).toBe(false);
      expect(frame.isSpare()).toBe(true);
    });
    it('neither strike nor spare', function() {
      frame.setShots(6, 3);
      expect(frame.isStrike()).toBe(false);
      expect(frame.isSpare()).toBe(false);
    });
  });

  describe('raises an error when', function() {
    it('first argument is not an integer', function() {
      expect(function() { frame.setShots(); }).toThrowError(
        'Integer argument required');
      expect(function() { frame.setShots(0.5); }).toThrowError(
        'Integer argument required');
    });
    it('first argument is out of range', function() {
      expect(function() { frame.setShots(11); }).toThrowError(
        'Argument out of range');
      expect(function() { frame.setShots(-1); }).toThrowError(
        'Argument out of range');
    });
    it('first < 10 but second not an integer', function() {
      expect(function() { frame.setShots(9); }).toThrowError(
        'Two integer arguments required');
      expect(function() { frame.setShots(9, 0.5); }).toThrowError(
        'Two integer arguments required');
    });
    it('first < 10 but second out of range', function() {
      expect(function() { frame.setShots(9, 2); }).toThrowError(
        'Second argument out of range');
      expect(function() { frame.setShots(9, -1); }).toThrowError(
        'Second argument out of range');
    });
  });

});
