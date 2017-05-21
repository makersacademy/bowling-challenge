(function() {
  'use strict';

  describe('Frame', function() {

    var frame;

    beforeEach(function() {
      frame = new Frame();
    });
    it('can score two throws', function() {
      frame.score(5);
      frame.score(4);
      expect(frame.getFirstScore()).toBe(5);
      expect(frame.getSecondScore()).toBe(4);
    });
    it('is over after scoring two throws', function() {
      frame.score(5);
      frame.score(4);
      expect(frame.isOver()).toBe(true);
    });
    it('is a strike if 10 is scored on the first throw', function() {
      frame.score(10);
      expect(frame.isStrike()).toBe(true);
    });
    it('is a spare if 10 is scored by the first two throws', function() {
      frame.score(5);
      frame.score(5);
      expect(frame.isSpare()).toBe(true);
    });
  });
}());
