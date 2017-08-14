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
        player.roll(1, game, scorecard);
        expect(scorecard.score()).toEqual(1);
      });
      it("doesn't allow the frame total to go above 10", function(){
        player.roll(5, game, scorecard);
        expect(function() {
          player.roll(6, game, scorecard);
        }).toThrow(new Error("Frame score cannot be higher than 10!"));
      });
      it("currectly calculates the total after a spare", function(){
        player.roll(5, game, scorecard);
        player.roll(5, game, scorecard);
        player.roll(4, game, scorecard);
        player.roll(1, game, scorecard);
        expect(scorecard.score()).toEqual(19);
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
        player.roll(10, game, scorecard);
        player.roll(5, game, scorecard);
        player.roll(5, game, scorecard);
        player.roll(3, game, scorecard);
        player.roll(3, game, scorecard);
        expect(game.getFrame(scorecard)).toEqual(4);
      });
    });
    describe("#calculatespare", function(){
      it("calculates if the most recent roll was a spare", function(){
        player.roll(5, game, scorecard);
        player.roll(5, game, scorecard);
        expect(scorecard._framestates[1].toString()).toBe("spare");
      });
    });
    describe("#calculatestrike", function(){
      it("calculates if the most recent roll was a strike", function(){
        player.roll(10, game, scorecard);
        expect(scorecard._framestates[1].toString()).toBe("strike");
      });
    });
  });
});
