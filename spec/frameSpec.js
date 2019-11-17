'use strict';

describe ('frame', function() {

  var frame_score;

  beforeEach(function() {
    frame_score = new Frame()
  });

  it('returns 0 on two gutter rolls', function() {
    frame_score = new Frame(0,0)
    expect(frame_score.getRawScore()).toEqual(0);
  });

  it('throws an error if we pass a negative number when creating a new \
  object', function() {
    expect(function(){frame_score = new Frame(-1,5);}).toThrow("No negative scores");
  });

  it('throws an error if we pass numbers greater than 10 when creating \
  a new object', function() {
    expect(function(){frame_score = new Frame(20,0);}).toThrow("No scores\
 over 10");
  });

  it('throws an error if our total scores are more than ten on each \
  roll', function() {
    expect(function(){frame_score = new Frame(8,8);}).toThrow("Frame\
 scores should not exceed 10");
  });

  it('returns 9 on a 4 and 5 roll', function() {
    frame_score = new Frame(4,5)
    expect(frame_score.getRawScore()).toEqual(9);
  });

  it('returns nil if the frame has nothing special', function() {
    frame_score = new Frame(3,6)
    expect(frame_score.getFrameType()).toMatch("nil");
  });

  it('returns strike if the frame has a strike', function() {
    frame_score = new Frame(10,0)
    expect(frame_score.getFrameType()).toMatch("strike");
  });

  it('returns spare if the frame has a spare', function() {
    frame_score = new Frame (0,10)
    expect(frame_score.getFrameType()).toMatch("spare");
  });

  it('returns 3 when that is the first roll', function() {
    frame_score = new Frame (3,4)
    expect(frame_score.getFirstRoll()).toEqual(3);
  })
});
