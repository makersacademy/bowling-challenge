'use strict';

describe('Frame', function() {
  var frame;

  // beforeEach(function() {
  //   frame = new Frame();
  // })

  it('has 1, 2 or 3 rolls each', function() {
    frame = new Frame([1,2])
    expect(frame.getRolls()).toEqual([1,2]);
  })
})
