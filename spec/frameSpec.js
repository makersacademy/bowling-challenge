'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('recordRoll', function() {
    it('can record a role', function() {
      expect(frame.recordRoll(8)).toEqual(8);
    });

    it('adds roll to frame', function() {
      frame.recordRoll(8);
      expect(frame.rolls).toEqual([8]);
    });

    it('can add two rolls to frame', function() {
      frame.recordRoll(8);
      frame.recordRoll(1);
      expect(frame.rolls).toEqual([8, 1]);
    });

    it('raises error if rolling three times', function() {
      frame.recordRoll(6);
      frame.recordRoll(1);
      expect(function(){frame.recordRoll(1)}).toThrow("Limit of two rolls per frame");
    });
  });
});
