'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('starts with ten pins', function() {
    expect(frame.pins).toEqual(10);
  });

  it('can add a ball', function() {
    frame.addBall(5);
    frame.addBall(1);
    expect(frame.balls).toEqual([5,1]);
  });

})
