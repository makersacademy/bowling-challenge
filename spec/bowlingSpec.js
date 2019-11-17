'use strict';

describe ('frame', function() {

  var frame_score;

  beforeEach(function() {
    frame_score = new Frame()
  });

  it('returns 0 on two gutter rolls', function() {
    expect(frame_score.getScore(0,0)).toEqual(0);
  });
  it('returns 9 on a 4 and 5 roll', function() {
    expect(frame_score.getScore(4,5)).toEqual(9);
  })
});
