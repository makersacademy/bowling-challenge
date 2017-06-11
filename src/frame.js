'use strict';

describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('calculates score of one frame', function() {
    frame.roll(4);
    frame.roll(5);
    expect(frame.rolls).toEqual([4,5]);
  });

});
