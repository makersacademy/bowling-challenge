'use strict';
describe('Frame', function() {
  var frame;
  beforeEach(function() {
    frame = new Frame();
  });
  it('allows two rolls', function() {
    frame.roll(3)
    frame.roll(5)
    expect(frame.rolls).toEqual([3, 5])
  })
})
