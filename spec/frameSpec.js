'use strict';

describe('Frame', function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  it('calculates a frames score', function () {
    frame.reportBowlOne(2);
    frame.reportBowlTwo(3);
    expect(frame.score()).toEqual(5);
  });

  it('knows if there has been a strike', function () {
    frame.reportBowlOne(10);
    expect(frame.strike()).toEqual(true);
  });

  it('knows if there has NOT been a strike', function () {
    frame.reportBowlOne(8);
    frame.reportBowlTwo(1);
    expect(frame.strike()).toEqual(false);
  });
  it('knows if there has been a spare', function () {
    frame.reportBowlOne(8);
    frame.reportBowlTwo(2);
    expect(frame.spare()).toEqual(true);
  });

  it('knows if there has NOT been a spare', function () {
    frame.reportBowlOne(8);
    frame.reportBowlTwo(1);
    expect(frame.spare()).toEqual(false);
  });
});
