'use strict';

describe('Scorecard', function () {
  var scorecard;
  var testFrame = { score: 8 };

  beforeEach(function () {
    scorecard = new Scorecard();
  });

  it('knows a game is over after 10 frames', function() {
    scorecard.frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(scorecard.isComplete()).toEqual(true);
  });

  it('stores a frame score', function () {
    scorecard.storeFrame(testFrame);
    expect(scorecard.frames.length).toEqual(1);
  });

  it('checks if previous frame was a strike', function () {
    let testStrikeFrame = { isStrike: true };
    scorecard.frames.push(testStrikeFrame);
    scorecard.frames.push(testFrame);
    expect(scorecard.isPreviousFrameAStrike(testFrame)).toEqual(true);
  });

  it('checks if previous frame was a spare', function () {
    let testSpareFrame = { isSpare: true };
    scorecard.frames.push(testSpareFrame);
    scorecard.frames.push(testFrame);
    expect(scorecard.isPreviousFrameASpare(testFrame)).toEqual(true);
  });

  it('checks if two frames back was a strike', function () {
    let testStrikeFrame = { isStrike: true };
    let thirdTestFrame = { total: 7 };
    scorecard.frames.push(testStrikeFrame);
    scorecard.frames.push(testFrame);
    scorecard.frames.push(thirdTestFrame);
    expect(scorecard.isTwoFramesAgoAStrike(thirdTestFrame)).toEqual(true);
  });
});