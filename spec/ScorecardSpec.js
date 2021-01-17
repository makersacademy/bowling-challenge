'use strict';

describe('Scorecard', function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it('starts with empty scorecard', function() {
    expect(scorecard.getFrames()).toEqual([]);
  });

  it('hold rolls in current frame until frame complete', function() {
    scorecard.roll(3)

    expect(scorecard.getCurrentFrame()).toEqual([3])
  });

  it('saves rolls as frames and stores together', function() {
    scorecard.roll(3)
    scorecard.roll(4)
    scorecard.roll(2)
    scorecard.roll(5)

    expect(scorecard.getFrames()).toEqual([[3, 4], [2, 5]])
  });
})
