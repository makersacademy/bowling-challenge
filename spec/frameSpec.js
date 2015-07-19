// * 2 bowls in each frame (except the 10th where there is a possibility of 3 bowls if a strike or spare was bowln in the 9th)
// * 1 - 9 frames
// * strike - if all 10 pins are knocked down on the 1st bowl (bowl1) - second bowl is disabled
// * spare - if 10 pins are knocked down on the 2nd bowl (bowl2)
// * score if total pins knocked down in a frame is less than 10, the num of pins knocked down is bowl1 + bowl2 (returns a numeric score rather than a spare / or strike X)
// * 1 - 9 frames
// * 10th frame - if strike or spare bowln in previous go - 3 bowls, if not - disable third bowl

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('detects when a normal frame is over/in progress', function() {

    it('is a new frame', function() {
      expect(frame.isOver()).toBe(false);
    });

    it('after 1 bowl', function() {
      frame.trackBowl(1);
      expect(frame.isOver()).toBe(false);
    });
  });

  describe('number of bowls per frame', function() {

    it('2 bowls as default', function() {
      frame.trackBowl();
      frame.trackBowl();
      expect(frame.bowlCount).toEqual(2);
    });

    xit('3 bowls in final frame', function() {
      frame = new Frame(isFinalFrame = true);
      expect(frame.bowlCount).toEqual(3);
    });

  });

  describe('detects when frame is over', function() {
    it('after 2 bowls', function() {
      frame.trackBowl();
      frame.trackBowl();
      expect(frame.isOver()).toBe(true);
    });

    it('after strike', function() {
      frame.trackBowl(10);
      expect(frame.isOver()).toBe(true);
    });

    it('after spare', function() {
      frame.trackBowl(5);
      frame.trackBowl(5);
      expect(frame.isOver()).toBe(true);
    });

    xit('knows if it is completed in final frame with spares bowl', function() {
      frame = new Frame(isFinalFrame = true);
      frame.trackBowl(5);
      frame.bowlbowl(5);
      frame.bowlbowl(5);
      expect(frame.isOver()).toBe(true);
    });

    xit('knows when final frame is not complete', function() {
      frame = new Frame(isFinalFrame = true);
      frame.trackBowl(10);
      frame.bowlbowl(10);
      expect(frame.isOver()).toBe(false);
    });

  });

  describe('calculates cumulative score', function() {

    it('when bowl is not spare or strike', function() {
      frame.trackBowl(1);
      frame.trackBowl(3);
      expect(frame.calculateScore()).toEqual(4)
    });

    it('when strike is bowln', function() {
      frame.trackBowl(10);
      expect(frame.calculateScore()).toEqual(10);
    });

  });

  describe('detects strike ', function() {

    it('after 1 bowl', function() {
      frame.trackBowl(10);
      expect(frame.isStrike()).toBe(true);
    });

    it('but not after if 10 pins knocked down in 2nd bowl', function() {
      frame.trackBowl(0);
      frame.trackBowl(10);
      expect(frame.isStrike()).toBe(false);
    });

  });

  describe('detects spare', function() {

    it('when 10 pins knocked down on 2nd bowl', function() {
      frame.trackBowl(0);
      frame.trackBowl(10);
      expect(frame.isSpare()).toBe(true);
    });

  });

  describe('detects bonuses', function() {

    it('knows bonus will be added to score', function() {
      frame.trackBowl(5);
      frame.trackBowl(5);
      expect(frame.addBonus()).toBe(true);
    });

  });

});
