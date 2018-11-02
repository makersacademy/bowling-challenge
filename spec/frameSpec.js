'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('records a score for each ball thrown', function() {
    frame.pins(4);
    frame.pins(4);
    expect(frame.getScore()).toEqual([4,4]);
  });

  it('provides a total for the frame', function() {
    frame.pins(3);
    frame.pins(4);
    expect(frame.sum()).toEqual(7);
  });
});
