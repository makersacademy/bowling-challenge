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

    it("sums the score", function() {
      for (var i = 0; i < 20; i++) {
        game.bowl(1);
      }
      expect(game.calcTotalScore()).toEqual(20);
    });

    describe("ends the game", function() {
      beforeEach(function() {
        for (var i = 0; i < 20; i++) {
          game.bowl(1);
        }
      });

      it("marks the game as finished", function() {
        expect(game.isFinished).toEqual(true);
      });

      it("does not allow any more bowls to be added", function() {
        expect(function(){ game.bowl(1); } ).toThrow(new Error
                ("You already finished this game"));
      });
    });
  });

  describe("scores a strike in the first frame", function() {
    beforeEach(function() {
      game.bowl(10);
    });

    it("sets a bonus for the first frame", function() {
      expect(game.frames[0].bonus.numberOfBowls).toBe(2);
    });

    it("adds the bowling score of the next two bowls to the bonus", function() {
      game.bowl(1);
      game.bowl(2);
      expect(game.frames[0].getScore()).toEqual(13);
    })
  });
});
