'use strict';

describe('Frame', function () {
  //     var frame;

  //   beforeEach(function () {
  //     frame = new Frame();
  //   });

  it('calculates a frames score', function () {
    var frame;
    frame = new Frame(2, 3);
    expect(frame.score()).toEqual(5);
  });
});
