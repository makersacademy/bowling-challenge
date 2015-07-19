describe('TenthFrame', function() {
  
  var frame;
  
  beforeEach(function() {
    frame = new TenthFrame();
  });

  describe('can record', function() {
    it('a single roll', function() {
      frame.roll(5);
      expect(frame.scoreRecord).toEqual([5]);
    });

    it('two rolls', function() {
      frame.roll(5);
      frame.roll(4);
      expect(frame.scoreRecord).toEqual([5,4]);
    });

    it('three rolls when there has been a strike', function() {
      frame.roll(10);
      frame.roll(4);
      frame.roll(4);
      expect(frame.scoreRecord).toEqual([10,4,4]);
    });

    it('three rolls when there has been a spare', function() {
      frame.roll(1);
      frame.roll(9);
      frame.roll(4);
      expect(frame.scoreRecord).toEqual([1,9,4]);
    });

    it('cannot record a third roll when the frame is open', function() {
      frame.roll(1);
      frame.roll(8);
      expect(function() {frame.roll(1)}).toThrow('the frame is complete');
    });

  });
});

