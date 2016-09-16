'use-strict';

describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("At the start the game ...", function() {

    xit("should have 10 frames", function() {
      expect(game.showFramesToPlay()).toEqual(10);
    });

    xit("should have a score of 0", function() {
      expect(game.showScore()).toEqual(0);
    });

  });

  describe("Playing two turns ... ", function() {

  xit("should update the score and reduce the frames to play by 1", function () {
    helperModule.playGame(2, game);
    expect(game.showScore()).toEqual(6);
  });

});

});
