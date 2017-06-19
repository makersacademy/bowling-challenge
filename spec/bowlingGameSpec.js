'use strict';

describe('BowlingGame', function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();

  })

  it('starts with a score of 0', function() {
    expect(bowlingGame.getCurrentScore()).toEqual(0);
  });

});
