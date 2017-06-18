'use strict';

describe("Game", function(){

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("records the score of the game", function() {
    game.frameOne.firstRoll(3);
    game.frameOne.secondRoll(2);
    game.frameTwo.firstRoll(8);
    game.frameScores();
    game.gameScore();
    expect(game._gameScore).toEqual(13);
  });

  it("calculates bonus scores for the first eight frames", function() {
    game.frameOne.firstRoll(10);
    game.frameTwo.firstRoll(10);
    game.frameThree.firstRoll(10);
    game.calculateBonusToEight();
    game.frameScores();
    game.gameScore();
    expect(game._gameScore).toEqual(60);
  });

  it("calculates bonus score for the ninth frame", function() {
    game.frameNine.firstRoll(10);
    game.frameTen.firstRoll(10);
    game.calculateBonusNine();
    game.frameScores();
    game.gameScore();
    expect(game._gameScore).toEqual(30);
  });

});
