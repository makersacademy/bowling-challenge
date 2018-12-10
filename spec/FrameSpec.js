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
    frame.addScore(6);
    expect(frame.total).toEqual(6);
  });

  it('the number of rolls increments each time', function() {
    frame.addRoll();
    expect(frame.rolls).toEqual(1);
  });

  it('the frame is complete after two rolls', function() {
    frame.addRoll()
    frame.addRoll()
    frame.isOver();
    expect(frame.isOver()).toBe(true);
  });

  it('the frame is complete when 10 is reached', function() {
    frame.addScore(10)
    expect(frame.isOver()).toBe(true);
  });

  it('knows when a strike is scored', function() {
    frame.addRoll()
    frame.addScore(10)
    frame.scoreStrike();
    expect(frame.strike).toBe(true);
  });

  it('knows when a spare is scored', function() {
    frame.addRoll()
    frame.addScore(3)
    frame.addRoll()
    frame.addScore(7)
    frame.scoreSpare();
    expect(frame.spare).toBe(true);
  })

});
