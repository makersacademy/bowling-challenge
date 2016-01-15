describe('FinalFrame', function() {
  var finalFrame;

  beforeEach(function() {
    finalFrame = new FinalFrame();
  });

  describe('#addRoll', function() {
    it('should add the roll to finalFrame', function() {
      finalFrame.addRoll(5);
      expect(finalFrame.getFrameData().rolls).toEqual([5]);
    });

    it('should calculate the total after both rolls if not a spare or strike', function() {
      finalFrame.addRoll(3);
      finalFrame.addRoll(6);
      expect(finalFrame.getFrameData().total).toEqual(9);
    });

    it('should calculate the total after three rolls for spare', function() {
      finalFrame.addRoll(5);
      finalFrame.addRoll(5);
      finalFrame.addRoll(7);
      expect(finalFrame.getFrameData().total).toEqual(17);
    });

    it('should calculate the total after three rolls for strike', function() {
      finalFrame.addRoll(10);
      finalFrame.addRoll(10);
      finalFrame.addRoll(1);
      expect(finalFrame.getFrameData().total).toEqual(21);
    });

    it('throws error if more than 10 pins used', function() {
      finalFrame.addRoll(8);
      expect(function() {
        finalFrame.addRoll(4);
      }).toThrow('Cannot knock down more than 10 pins');
    });
  });

  describe('#isComplete', function() {
    it('should return true if 2 rolls have been done in frame with no strike or spare', function() {
      finalFrame.addRoll(5);
      finalFrame.addRoll(3);
      expect(finalFrame.isComplete()).toBe(true);
    });

    it('should return false if frame is not complete', function() {
      finalFrame.addRoll(5);
      expect(finalFrame.isComplete()).toBe(false);
    });

    it('should return true after 3 rolls done with a spare', function() {
      finalFrame.addRoll(9);
      finalFrame.addRoll(1);
      finalFrame.addRoll(10);
      expect(finalFrame.isComplete()).toBe(true);
    });

    it('should return true after 3 rolls done with a strike', function() {
      finalFrame.addRoll(10);
      finalFrame.addRoll(1);
      finalFrame.addRoll(9);
      expect(finalFrame.isComplete()).toBe(true);
    });
  });
});
