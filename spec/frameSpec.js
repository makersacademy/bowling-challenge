'use strict';

describe ('frame', function() {

  var frame_score;

  beforeEach(function() {
    frame_score = new Frame()
  });

  it('returns 0 on two gutter rolls', function() {
    frame_score = new Frame(0,0)
    expect(frame_score.getScore()).toEqual(0);
  });

  it('returns 9 on a 4 and 5 roll', function() {
    frame_score = new Frame(4,5)
    expect(frame_score.getScore()).toEqual(9);
  });

  it('returns no bonus if it is a regular roll', function() {
    frame_score = new Frame(3,6)
    expect(frame_score.getBonus()).toMatch("nil");
  });

  it('returns strike if the frame has a strike', function() {
    frame_score = new Frame(10,0)
    expect(frame_score.getBonus()).toMatch("strike");
  });
  it('returns spare if the frame has a spare', function() {
    frame_score = new Frame (0,10)
    expect(frame_score.getBonus()).toMatch("spare");
  });
});
