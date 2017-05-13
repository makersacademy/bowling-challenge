'use strict';

describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('is defined', function() {
    expect(frame).toBeDefined();
  });

  it('adds score to current frame', function() {
    frame.add(5);
    frame.add(2);
    expect(frame.current).toEqual([5, 2]);
  });

  it('confirms end of frame appropriately', function() {
    frame.add(1);
    frame.add(7);
    expect(frame._isEnded()).toEqual(true);
  });
});
