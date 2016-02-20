'use strict=false;'

describe('Frame', function() {
  var frame;
  var pins1 = 1, pins2 = 2, pins3 = 3;
  var pins9 = 9, pins10 = 10;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('rolls property', function() {
    it('starts out with empty rolls', function() {
      expect(frame.rolls).toEqual([]);
    });

    it('records the first roll', function() {
      frame.addRoll(pins1);
      expect(frame.rolls).toContain(pins1);
    });

    it('records the first roll and the second roll', function() {
      frame.addRoll(pins1);
      frame.addRoll(pins2);
      expect(frame.rolls).toContain(pins1);
      expect(frame.rolls).toContain(pins2);
    });

    it('Error if attempted to record a third roll', function() {
      frame.addRoll(pins1);
      frame.addRoll(pins2);
      expect(function() {
        frame.addRoll(pins3);
      }).toThrowError("Rolls exceeded");
      expect(frame.rolls).not.toContain(pins3);
    });
  });

});
