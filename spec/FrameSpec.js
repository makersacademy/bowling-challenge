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
  });
}());
