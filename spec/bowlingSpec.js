describe("Bowling", function() {
  beforeEach(function() {
    player = new Player();
    scorecard = new Scorecard();
    game = new Game();
    frame = 0;
  });

  describe("ScoreCard", function(){
    describe("#score", function(){
      it("returns the cumulative score of the player", function(){
        expect(scorecard.score()).toEqual(0);
      });
    });

    describe("#roll", function(){
      it("adds the argument to the score", function(){
        player.roll(1, game.frame(), scorecard);
        expect(scorecard.score()).toEqual(1);
      });
      it("doesn't allow the frame total to go above 10", function(){
        player.roll(5, game.frame(), scorecard);
        expect(function() {
          player.roll(6, game.frame(), scorecard);
        }).toThrow(new Error("Frame score cannot be higher than 10!"));
      });
    });
  });

  describe("Game", function(){
    describe("#frame", function(){
      it("starts the game on frame 1", function(){
        expect(game.frame()).toEqual(1);
      });
    });
  });
});
