'use strict';

describe("Frame", function() {
  var frame;
  var spare;
  var strike;

  beforeEach(function() {
    frame = new Frame([3, 5]);
    spare = new Frame([4, 6]);
    strike = new Frame([10]);
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

  // it('calculates standard frame bonus correctly', function() {
  //   expect(frame.bonus()).toEqual(0);
  // });

  it('calculates spare bonus correctly', function() {
    var next_frame = {score: [4, 3]}
    expect(spare.spareBonus(next_frame)).toEqual(4);
  });
});
