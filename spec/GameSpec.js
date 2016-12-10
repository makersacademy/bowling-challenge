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
    it("first throw of first frame", function(){
      game.inputFirstThrow(6);
      expect(game.frameScore).toEqual([6])
    });

    it("second throw of first frame", function(){
      game.inputFirstThrow(6);
      game.inputSecondThrow(0);
      expect(game.frameScore).toEqual([6,0])
    });

    it("should give a third frame in the last score if 10 points", function(){
      game.inputFirstThrow(10);
      game.inputSecondThrow(0);
      game.inputThirdThrow(5);
      expect(game.frameScore).toEqual([10,0,5])
    });
  });

  describe("score array", function(){
    it("should put the scores into the score array", function(){
      game.inputFirstThrow(6);
      game.inputSecondThrow(0);
      game.addToScoreArray();
      expect(game.scoreArray).toEqual([[6,0]])
    });

    it("should move to the next frame", function(){
      game.addToScoreArray();
      game.nextFrame();
      expect(game.numberOfFramesRemaining).toEqual(9);
    });

    it("should raise an error if there are no frames left", function(){
      for (var i = 0; i <= 9; i += 1) {
        game.nextFrame();
      }
      expect(function() { game.nextFrame() }).toThrow("Too many frames")
    });
    
  });


});
