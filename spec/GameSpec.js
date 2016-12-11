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


    it("should start at frame 1 ", function(){
      expect(game.frameNumber).toEqual(1);
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
      expect(game.frameNumber).toEqual(2);
    });

    it("should raise an error if next frame is number 11", function(){
      for (var i = 1; i <= 10; i += 1) {
        console.log(i);
        game.nextFrame();
      }
      expect(function() { game.nextFrame() }).toThrow("Too many frames")
    });

  });


});
