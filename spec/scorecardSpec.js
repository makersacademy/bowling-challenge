'use strict';

describe('Scorecard', function () {
  it('stores frame instances within an array', function () {
    var scorecard = new Scorecard();
    expect(scorecard.frameArray).toEqual([]);
  });


  it('adds instances of frames to array', function () {
    var scorecard = new Scorecard();
    var frame = new Frame();
    scorecard.addFrame(frame)
    expect(scorecard.frameArray).toContain(frame);
  });







});
