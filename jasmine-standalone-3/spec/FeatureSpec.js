'use strict';

describe('BowlingGame', function () {
  var play

  beforeEach(function () {
    play = new BowlingGame()
  });

  it('should display number of pins knocked over', function () {
  expect(play.score(0)).toEqual(0)
});

});
