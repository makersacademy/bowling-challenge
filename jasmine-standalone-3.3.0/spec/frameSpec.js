'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('will add a first roll to the score', function() {
    frame.roll(2);
    expect(frame.score).toEqual([2]);
  });


});
