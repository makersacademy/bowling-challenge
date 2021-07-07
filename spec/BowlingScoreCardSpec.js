describe("BowlingScoreCard", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("#roll", function() {
    it("updates the game's score with the number of downed pins", function() {
      game.roll(5)
      expect(game.score).toEqual(5);
    });

    it("keeps track of what roll in the frame it is (if roll 1(true) or roll 2(false)", function() {
      expect(game.rollFirst).toEqual(true)
      game.roll(3)
      expect(game.rollFirst).toEqual(false)
      game.roll(4)
      expect(game.rollFirst).toEqual(true)
    });

    it("can roll twenty times max", function() {
      for (n = 1; n <= 20; n++) { 
      game.roll(4) 
      }
      expect (function() { game.roll(1) } ).toThrowError("Game is over")
    });

    it("at the last frame it'll let the user roll an extra time in case of spare", function() {
      for (n = 1; n <= 19; n++) { 
        game.roll(1) 
        }
      game.roll(9)
      expect (function() { game.roll(4) } ).not.toThrowError("Game is over")
    })

    it("at the last frame it'll let the user roll two extra times in case of strike", function() {
      for (n = 1; n <= 18; n++) { 
        game.roll(1) 
        }
      game.roll(10)
      expect (function() { game.roll(4) } ).not.toThrowError("Game is over")
    })
  });

  describe("#strike", function() {
    it("subtracts one every time there's a strike (10 on a first roll of a frame)", function() {
      game.roll(10)
      expect(game.rollMax).toEqual(19)
    })

    it("skips the second roll of the frame, i.e. rollFirst does not turn false", function() {
      game.roll(10)
      expect(game.rollFirst).toEqual(true)
    })

    it("makes the next two rolls worth twice as many points", function() {
      game.roll(10)
      game.roll(3)
      game.roll(3)
      expect(game.score).toEqual(22)
    })
  });

  describe("#spare", function() {
    it("doubles the score for one roll after a frame whose total is 10 points except if strike", function() {
      game.roll(4)
      game.roll(6)
      game.roll(2)
      game.roll(3)
      expect(game.score).toEqual(17)
    })
  })
});
