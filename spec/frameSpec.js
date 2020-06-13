'use strict';

describe('Frame', function() {
  let frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('Should be constructed with a frame variable = []', function() {
    expect(frame.scores).toEqual([]);
  });

  it('Should be able to add points to scores with add method', function () {
    frame.add(8);
    expect(frame.scores).toEqual([8]);
  });

  it('Should be able to return a total for the frame', function() {
    frame.add(5);
    frame.add(4);
    expect(frame.total()).toEqual(9);
  })

  it('Should be able to check if the first score is 10', function() {
    frame.add(10);
    expect(frame.times2Bonus()).toBeTruthy();
  })

  it('Should be able to check if both bowls = 10', function() {
    frame.add(5);
    frame.add(5);
    expect(frame.times1Bonus()).toBeTruthy();
  })
});