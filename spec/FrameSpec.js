'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('has 10 pins by default', function() {
    expect(frame.pins).toEqual(10);
  });

});
