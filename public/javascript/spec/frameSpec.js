'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  })

  it('adds two rolls to a frame', function() {
    frame.add(2, 6);
    expect(frame.frame).toEqual([2, 6])
    expect(frame.frameTotal).toEqual(8)
  })

  it('knows the value of both rolls', function() {
    frame.add(2, 6);
    expect(frame.getFirstRoll()).toEqual(2)
    expect(frame.getSecondRoll()).toEqual(6)
  })
})
