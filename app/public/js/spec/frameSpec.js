'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('accepts a score for a roll', function() {
    frame.roll(4);
    expect(frame.finalScore()).toEqual(4);
  });

  it('accepts two rolls and calculates the sum score of them', function() {
    frame.roll(3);
    frame.roll(2);
    expect(frame.finalScore()).toEqual(5);
  });

  describe('strike', function() {
    it('returns true for strike if the score of the first roll is 10', function() {
      frame.roll(10);
      expect(frame.isStrike()).toBe(true);
    });

    it('returns false for strike if the score is less than 10 in the first roll', function() {
      frame.roll(9);
      expect(frame.isStrike()).toBe(false);
    });
  });

  describe('spare', function() {
    it('return true for spare if the score of the first and second roll is 10', function() {
      frame.roll(2);
      frame.roll(8);
      expect(frame.isSpare()).toBe(true);
    });

    it('returns false for spare if the score of the first and second roll is less than 10', function() {
      frame.roll(1);
      frame.roll(7);
      expect(frame.isSpare()).toBe(false);
    });

    it('returns false for spare if the score of the first roll is 10', function() {
      frame.roll(10);
      expect(frame.isSpare()).toBe(false);
    });
  });

  describe('frame complete', function() {
    it('is true when there are two rolls', function () {
      frame.roll(1);
      frame.roll(3);
      expect(frame.isFinished()).toBe(true);
    });

    it('is true when the frame is a strike', function() {
      frame.roll(10);
      expect(frame.isFinished()).toBe(true);
    });

    it('is false if there is one roll and not a strike', function() {
      frame.roll(9);
      expect(frame.isFinished()).toBe(false);
    });
  });

  describe('bonus', function() {
    it('calculates the bonus for a strike based on the next 2 roll', function() {
      frame.roll(10);
      frame.bonus([1, 3]);
      expect(frame.finalScore()).toBe(14);
    });

    it('calculates the bonus for a spare based on the next 1 roll', function() {
      frame.roll(5);
      frame.roll(5);
      frame.bonus([1]);
      expect(frame.finalScore()).toBe(11);
    });

    it('ignores second roll score when adding bonus to spare', function() {
      frame.roll(5);
      frame.roll(5);
      frame.bonus([1, 5]);
      expect(frame.finalScore()).toBe(11);
    });
  });

  describe('special frame', function() {
    it('is true for a strike', function () {
      frame.roll(10);
      expect(frame.isSpecial()).toBe(true);
    });

    it('is true for a spare', function () {
      frame.roll(2);
      frame.roll(8);
      expect(frame.isSpecial()).toBe(true);
    });

    it('is false for a anything else but stirke and spare', function () {
      frame.roll(1);
      frame.roll(0);
      expect(frame.isSpecial()).toBe(false);
    });

    it('is not special anymore once it has got its bonus', function () {
      frame.roll(2);
      frame.roll(8);
      frame.bonus([3])
      expect(frame.isSpecial()).toBe(false);
    });

    it('tells if the frame is the final frame', function() {
      var frame = new Frame(true);
      expect(frame.final()).toBe(true);
    });
  });

  it('delivers a message once the frame is finished', function() {
    frame.roll(1);
    frame.roll(4);
    expect(frame.isFinished()).toBe(true);
    expect(frame.message()).toEqual('Your frame is finished, next frame');
  });

  it('delivers a message once the final frame is reached', function() {
    var frame = new Frame(true);
    expect(frame.final()).toBe(true);
    expect(frame.message()).toEqual('Last frame, you have 3 rolls max');
  });

  it('checks whether the game has been completed', function () {
    frame.roll(2);
    frame.roll(8);
    frame.bonus([3])
    frame.roll(3);
    frame.roll(5);
    frame.roll(3);
    frame.roll(5);
    frame.roll(3);
    frame.roll(5);
    frame.roll(3);
    frame.roll(5);
    frame.roll(3);
    frame.roll(5);
    frame.roll(3);
    frame.roll(5);
    frame.roll(3);
    frame.roll(5);
    frame.roll(3);
    frame.roll(5);
    frame.roll(3);
    frame.roll(5);
    expect(frame.finalScore()).toBe(85);
  });
});
