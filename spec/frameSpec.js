'use strict';

describe('Frame', function () {

  it('has a max score of 10', function () {
    let frame = new Frame();
    expect(frame.getMaxScore()).toEqual(10);
  });

  it('calculates the total of two bowls', function () {
    let frame = new Frame(5,3);
    expect(frame.total()).toEqual(8)
  });

  it('knows if bowl one was a strike', function () {
    let frame = new Frame(10);
    expect(frame.isAStrike()).toEqual(true);
  });

  it('knows if frame is was not a strike', function () {
    let frame = new Frame(9,1);
    expect(frame.isAStrike()).toEqual(false);
  });

  it('knows if bowl two was a spare', function () {
    let frame = new Frame(3,7);
    expect(frame.isASpare()).toEqual(true);
  });

  it('knows if frame was not a spare', function () {
    let frame = new Frame(3,4);
    expect(frame.isASpare()).toEqual(false);
  });

});
