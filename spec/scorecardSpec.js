'use strict';

describe('Scorecard', function () {
  var scorecard;

  beforeEach(function () {
    scorecard = new Scorecard();
  });

  it("knows a game is over after 10 frames", function() {
    scorecard.frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(scorecard.isComplete()).toEqual(true);
  });
});