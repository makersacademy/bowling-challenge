describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('when playing', function() {

    it('can receive a bowl', function() {
      frame.receiveBowl(1);
      expect(frame.firstBowl).toBe(1);
    });

    it('can receive a second bowl', function() {
      frame.receiveBowl(1);
      frame.receiveBowl(2);
      expect(frame.secondBowl).toBe(2);
    });

    it('knows its result', function() {
      frame.receiveBowl(1);
      frame.receiveBowl(2);
      expect(frame.result).toBe(3);
    });

    it('knows when its result is a spare', function() {
      frame.receiveBowl(1);
      frame.receiveBowl(9);
      expect(frame.spare).toEqual(true)
    });

    it('knows when its result is a strike', function() {
      frame.receiveBowl(10);
      expect(frame.strike).toEqual(true);
    });

    it('knows its result is a spare when the second bowl is a 10', function() {
      frame.receiveBowl(0);
      frame.receiveBowl(10);
      expect(frame.strike).toEqual(false);
      expect(frame.spare).toEqual(true);
      console.log(frame);
    });

    it('skips the second bowl if the first bowl is a strike', function() {
      frame.receiveBowl(10);
      expect(frame.firstBowl).toBe(10);
      expect(frame.secondBowl).toBe(0);
      expect(frame.strike).toEqual(true);
    }); 

  });
});