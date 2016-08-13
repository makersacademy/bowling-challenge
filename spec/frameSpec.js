'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('At the start of each frame', function() {

    it('has a default score of zero', function() {
      expect(frame.getFrameScore()).toEqual(0);
    });

    it('has a roll count of zero', function() {
      expect(frame.getRollCounter()).toEqual(0);
    });

    it('has a starting pin count of 10', function() {
      expect(frame.getPinCount()).toEqual(10);
    });

    it('has a bonus score of zero', function() {
      expect(frame.getBonusScore()).toEqual(0);
    });
  });

  describe('Roll score', function() {
    it('can add the pins knocked down to the roll score', function() {
      frame.roll(2);
      expect(frame.rollScore).toEqual(2);
    });

    it('knows when the roll is a strike', function() {
      frame.roll(frame.DEFAULT_PIN_COUNT);
      expect(frame.isStrike()).toBeTruthy();
    });
  });

});
