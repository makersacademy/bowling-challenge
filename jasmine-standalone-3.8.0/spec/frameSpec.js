'use strict';

describe('Frame', function () {
  let frame;
 
  beforeEach(function() {
    frame = new Frame();
  });

  it('increments up by one', function () {
    frame.increment();
    expect(frame.currentFrame).toBe(2)
  });

  it('increments up by one', function () {
    frame.endOfFrame();
    expect(frame.currentFrame).toBe(2)
  });

  it('returns true when it is the final frame', function () {
    for (var i = 1; i <= 10; i++) {
      frame.increment(i);
    }
    expect(frame.isFinalFrame()).toBe(true);
  });

  it('returns false when it is not the final frame', function () {
    expect(frame.isFinalFrame()).toBe(false);
  });



});
