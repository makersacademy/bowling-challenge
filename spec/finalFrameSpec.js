// 'use strict';

describe("FinalFrame", function() {
  var frame;

  beforeEach(function() {
    frame = new FinalFrame(4);
  });

  it('is defined', function() {
    expect(frame).toBeDefined();
  });

  it('records score', function() {
    frame.addBowl(5);
    expect(frame.score).toEqual([4, 5])
  });

  it('can register that the frame is ended', function() {
    frame.addBowl(5);
    expect(frame.isEnded()).toEqual(true);
  });

  it('will not register prematurely that the frame is ended', function() {
    frame.addBowl(6);
    expect(frame.isEnded()).toEqual(false);
  })
});
