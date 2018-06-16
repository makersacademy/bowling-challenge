'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  it('has a default total score of zero', function() {
    expect(frame.totalScore).toEqual(0);
  });

  it('has a starting score of zero', function() {
    expect(frame.getCurrentFrameScore()).toEqual(0);
  });

  it('has a maximum score of thirty', function() {
    expect(frame.MAX_SCORE).toEqual(30);
  });


});
