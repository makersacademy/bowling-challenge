describe("Game", function(){
  var game
  beforeEach(function(){
    game = new Game();
    game.startGame();
  });

  describe("start a game", function(){
    it("should have an array to store scores", function(){
      expect(game.scoreArray).toEqual([]);
    });

    it("should have 10 frames remaining", function(){
      expect(game.numberOfFramesRemaining).toEqual(10);
    });
  });

describe("frames", function(){
  it("should allow a user to put in the score of their first frame", function(){
    game.inputFirstFrame(6);
    expect(game.frameScore).toEqual([6])
  });
});



});
