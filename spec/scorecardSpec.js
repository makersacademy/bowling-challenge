'use strict';

describe('Scorecard', function () {
  var scorecard;

  beforeEach(function () {
    scorecard = new Scorecard();
  });


  it('adds instances of frames to array', function () {
    var frame = new Frame();
    expect(scorecard.frameArray).toContain(frame);
  });
  it('has the current score of completed frames', function () {
    scorecard.frameArray[0].reportBowlOne(4);
    scorecard.frameArray[0].reportBowlTwo(5);
    scorecard.frameArray[1].reportBowlOne(4);
    scorecard.frameArray[1].reportBowlTwo(5);

    scorecard.computeScore();
    expect(scorecard.currentScore).toEqual(18);
  });
});
