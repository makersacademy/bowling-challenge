'use strict';

describe("Feature Tests", function() {
  var scorer;

  beforeEach(function() {
    scorer = new Scorer();
  })

  it('game starts and scores 2 for rolling two 1s', function() {
    scorer.addScore(1);
    scorer.addScore(1);
    expect(scorer.frames[0].firstRoll).toEqual(1);
    expect(scorer.frames[0].secondRoll).toEqual(1);
  });
})
