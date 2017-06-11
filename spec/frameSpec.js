'use strict';

describe("Frame", function() {

  var frame;
  var strike;

  beforeEach(function() {
    frame = new Frame(4,5);
    strike = new Frame(10);
  });

  it('calculates score of one frame', function() {
    expect(frame.rolls).toEqual([4,5]);
  });

  it('can handle a strike', function() {
    expect(strike.rolls).toEqual([10,0]);
  });


});
