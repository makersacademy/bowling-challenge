describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });
  describe('frameNo variable', function() {
    it('Can be assigned a frame number but has a default value of 1 if not assigned', function() {
      expect(frame.frameNo).toEqual(1);
    });
    it('equals 2 if assigned a value of 2 upon instantion', function() {
      frame = new Frame(2);
      expect(frame.frameNo).toEqual(2);
    });
  });

  describe('Roll', function() {
    it('stores the number of pins knocked down on each roll in an array', function() {
      frame.Roll(3);
      expect(frame.pinsKnockedDown[0]).toEqual(3);
    });
    it('only stores 2 throws', function() {
      frame.Roll(2);
      frame.Roll(5);
      frame.Roll(3);
      expect(frame.pinsKnockedDown).toEqual([2,5]);
    });
    it('only allows a total of 10 pins to be entered over 2 rolls', function() {
      frame.Roll(9);
      expect( function() {
        frame.Roll(5);}).toThrowError('You cannot enter more than a total of 10 over 2 rolls');
    });

  });

  describe('checkRoll', function() {
    it('will not accept a number higher than 10 or below 0', function() {
      expect(function() {
        frame.checkRoll(11);
      }).toThrowError('The number entered must be between 0 - 10');
      expect(function() {
        frame.checkRoll(-1);
      }).toThrowError('The number entered must be between 0 - 10');
    });
  });

});
