'use strict';

describe("Frame", function () {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('defaults the frame score to zero', function() {
    expect(frame.score).toEqual(0);
  });

  it('adds the score from roll one', function() {
    frame.addRollOneScore(8);
    expect(frame.score).toEqual(8);
  });

  it('adds the score from roll two', function() {
    frame.addRollOneScore(8);
    frame.addRollTwoScore(1)
    expect(frame.score).toEqual(9);
  });

});
