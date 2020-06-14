'use strict';

describe('Scorecard', function () {
  var scorecard;

  beforeEach(function () {
    scorecard = new Scorecard();
  });

  it('stores frame instances within an array', function () {
    expect(scorecard.frameArray).toEqual([]);
  });

  it('adds instances of frames to array', function () {
    var frame = new Frame();
    scorecard.addFrame(frame);
    expect(scorecard.frameArray).toContain(frame);
  });
  it('has the current score of completed frames', function () {
    var frame1 = new Frame();
    var frame2 = new Frame();
    frame1.reportBowlOne(4);
    frame1.reportBowlTwo(5);
    frame2.reportBowlOne(4);
    frame2.reportBowlTwo(5);
    scorecard.addFrame(frame1);
    scorecard.addFrame(frame2);
    scorecard.computeScore();
    expect(scorecard.currentScore).toEqual(18);
  });
});
