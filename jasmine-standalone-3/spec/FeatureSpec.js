'use strict';

describe('BowlingGame', function () {
  var play

  beforeEach(function () {
    play = new BowlingGame()
  });

  it('should display number of pins knocked over', function () {
  expect(play.score(0)).toEqual(0)
});

  it('should display the total score after 1 frame', function () {
    play.score(9);
    expect(play.total).toContain(9);
});

});
