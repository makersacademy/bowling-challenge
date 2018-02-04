'use strict';

describe('frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('starts with 10 frames', function() {
    expect(frame.count).toEqual(10);
  });
});
