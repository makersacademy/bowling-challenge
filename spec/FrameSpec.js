'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('starts with a bowl index of 1', function() {
    expect(frame.bowlIndex).toEqual(1);
  });

  describe('bowl', function() {

    beforeEach(function() {
      frame.bowl(7);
    });

    it('adds score of each bowl to a bowls array', function() {
      expect(frame.bowls).toContain(7);
    });

    it('increases the bowl index by 1', function() {
      expect(frame.bowlIndex).toEqual(2);
    });
  });

  describe('isStrike', function() {
    it('confirms when a bowl is a strike', function() {
      frame.bowl(10);
      expect(frame.isStrike()).toEqual(true);
    });
  });

  describe('isSpare', function() {
    it('confirms when a bowl is a spare', function() {
      frame.bowl(5);
      frame.bowl(5);
      expect(frame.isSpare()).toEqual(true);
    });
  });

  describe('FrameScore', function() {
    it('confirms regular frame score with no strike or spare', function() {
      frame.bowl(2);
      frame.bowl(6);
      expect(frame.FrameScore()).toEqual(8);
    });
  });

  describe('finalFrameScore', function() {
    it('confirms final frame score inc. strike or spare', function() {
      frame.bowl(10);
      frame.bowl(5);
      frame.bowl(3);
      expect(frame.finalFrameScore()).toBe(18);
    });
  });

});
