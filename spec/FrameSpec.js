'use strict';

describe('Frame', function() {
  var frame;

  // beforeEach(function() {
  //   frame = new Frame();
  // })

  it('has 1, 2 or 3 rolls each', function() {
    frame = new Frame([1,2]);
    expect(frame.getRolls()).toEqual([1,2]);
  })

  it('can have a spare', function() {
    frame = new Frame([4,6]);
    expect(frame.isSpare()).toBe(true);
  })

  it('can have a strike', function() {
    frame = new Frame([10]);
    expect(frame.isStrike()).toBe(true);
  })
})
