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
    expect(frame.getCurrentScore()).toEqual(0);
  });

});
