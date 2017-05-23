'use strict';

describe("FinalFrame", function() {
  var frame;
  var strike;

  beforeEach(function() {
    frame = new FinalFrame();
    strike = new FinalFrame();
  });

  it('is defined', function() {
    expect(frame).toBeDefined();
  });

  it('records score', function() {
    frame.addBowl(4);
    frame.addBowl(5);
    expect(frame.score).toEqual([4, 5])
  });

  it('can register that the frame is ended', function() {
    frame.addBowl(4);
    frame.addBowl(5);
    expect(frame.isEnded()).toEqual(true);
  });

  it('will not register a spare as the end of the frame', function() {
    frame.addBowl(6);
    frame.addBowl(4);
    expect(frame.isEnded()).toEqual(false);
  });

  it('will not register prematurely that the frame is ended', function() {
    frame.addBowl(6);
    expect(frame.isEnded()).toEqual(false);
  });

  it('can register that the frame is after three bowls', function() {
    frame.addBowl(6);
    frame.addBowl(3);
    expect(frame.isEnded()).toEqual(true);
  });

  it('two strikes does not end the frame', function() {
    strike.addBowl(10);
    expect(strike.isEnded()).toEqual(false);
  });

  it('three strikes ends the frame', function() {
    strike.addBowl(10);
    strike.addBowl(10);
    strike.addBowl(10);
    expect(strike.isEnded()).toEqual(true);
  });

});
