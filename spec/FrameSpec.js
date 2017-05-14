// 'use strict';

describe("Frame", function() {
  var frame;
  var spare;
  var strike;

  beforeEach(function() {
    frame = new Frame(3, 5);
    spare = new Frame(4, 6);
    strike = new Frame(10);
  });

  it('is defined', function() {
    expect(frame).toBeDefined();
  });

  it('can detect a spare', function() {
    expect(spare.isSpare()).toEqual(true);
  });

  it('can detect a strike', function() {
    expect(strike.isStrike()).toEqual(true);
  });

  it('does not falsely detect a spare', function() {
    expect(frame.isSpare()).toEqual(false);
  });

  it('does not falsely detect a strike', function() {
    expect(frame.isStrike()).toEqual(false);
  });
});
