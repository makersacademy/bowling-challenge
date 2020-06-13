'use strict';

describe('Frame', function() {
  let frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('Should be constructed with a frame variable = []', function() {
    expect(frame.scores).toEqual([]);
  })

});