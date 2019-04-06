'use strict';

describe('Scorecard', function() {
  var scorecard;
  var frame;

  scorecard = new Scorecard();
  frame = new Frame();

  it('frames is empty as default', function() {
    expect(scorecard.frames.length).toEqual(0);
  });
});
