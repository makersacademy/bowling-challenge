'use strict';

describe('BowlingGame', function () {
  var play

  beforeEach(function () {
    play = new BowlingGame()
  });

it('should contain the total score of 1 frame', function () {
    play.score(9);
    expect(play.total).toContain(9);
});

it('should contain the scores of multiple frames', function () {
  play.score(9);
  play.score(5)
  expect(play.total).toContain(9, 5);
});

});
