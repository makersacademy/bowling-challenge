describe("Bowling", function() {
  beforeEach(function() {
    player = new Player();
    scorecard = new Scorecard();
    game = new Game();
  });

  describe("ScoreCard", function(){
    describe("#score", function(){
      it("returns the cumulative score of the player", function(){
        expect(scorecard.score()).toEqual(0);
      });
    });

    describe("#roll", function(){
      it("adds the argument to the score", function(){
        player.roll(1, game.getFrame(scorecard), scorecard);
        expect(scorecard.score()).toEqual(1);
      });
      it("doesn't allow the frame total to go above 10", function(){
        player.roll(5, game.getFrame(scorecard), scorecard);
        expect(function() {
          player.roll(6, game.getFrame(scorecard), scorecard);
        }).toThrow(new Error("Frame score cannot be higher than 10!"));
      });
    });
  });

  describe("Game", function(){
    describe("#frame", function(){
      it("starts the game on frame 1", function(){
        expect(game.getFrame(scorecard)).toEqual(1);
      });
    });
    describe("#calculateframe", function(){
      it("calculates the frame correctly", function(){
        player.roll(10, game.getFrame(scorecard), scorecard);
        player.roll(5, game.getFrame(scorecard), scorecard);
        player.roll(5, game.getFrame(scorecard), scorecard);
        player.roll(3, game.getFrame(scorecard), scorecard);
        player.roll(3, game.getFrame(scorecard), scorecard);
        expect(game.getFrame(scorecard)).toEqual(4);
      });
    });
  });
});
