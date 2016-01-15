describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("a game with no bonuses awarded", function() {
    it("contains 10 frames", function() {
      expect(game.frames.length).toEqual(10);
    });

    it("tracks the current frame", function() {
      spyOn(game.frames[0], "isComplete").and.returnValue(true);
      game.bowl(0);
      expect(game.getCurrentFrame()).toBe(game.frames[1]);
    });

    it("registers the score", function() {
      for (var i = 0; i < 20; i++) {
        game.bowl(1);
      }
      expect(game.getTotalScore()).toEqual(20);
    });

    describe("ends the game", function() {
      beforeEach(function() {
        for (var i = 0; i < 20; i++) {
          game.bowl(1);
        }
      });

      it("marks the game as finished", function() {
        expect(game.isGameFinished()).toEqual(true);
      });

      it("does not allow any more bowls to be added", function() {
        expect(function(){ game.bowl(1); } ).toThrow(new Error
                ("You already finished this game"));
      });
    });


  });

});
