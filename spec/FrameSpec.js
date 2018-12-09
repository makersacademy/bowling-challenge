'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('starts with a total of 0', function(){
    expect(frame.total).toEqual(0);
  });

  it('adds the score from the roll to the total', function() {
    frame.addScore(6)
    expect(frame.total).toEqual(6);
  });

  it('the number of rolls increments each time', function() {
    frame.addRoll()
    expect(frame.rolls).toEqual(1);
  });

});
