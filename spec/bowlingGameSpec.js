describe("BowlingGame", function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  describe("#frames", function() {
    it("starts on frame number 1", function() {
      expect(game._frameNumber).toEqual(1)
    });
    it("increments the frame number between rounds", function() {
      game.nextRound();
      expect(game._frameNumber).toEqual(2)
    });
    it("ends the game after 10 frames", function() {
      for (var i = 1; i < 11; i++) {
        game.nextRound()
      };
      expect(function() { game.nextRound() }).toThrowError("Game Over!")
    });
  });

  describe("#rolls", function() {
    it("there are two rolls in one frame", function() {
      game.firstRoll(3);
      expect(game._frameNumber).toEqual(1);
    });
    it("after the second roll the frame number increase", function() {
      game.firstRoll(4);
      game.secondRoll(2);
      expect(game._frameNumber).toEqual(2);
    });
    it("if roll 1 is a strike there is no roll 2", function() {
      game.firstRoll(10);
      expect(game._frameNumber).toEqual(2);
    });
    it("you can roll again if 10th frame roll 1 is a strike", function(){
      for (var i = 1; i < 10; i++) {
        game.nextRound()
      };
      game.firstRoll(10)
      expect(game._frameNumber).toEqual(10);
    });
    it("you can roll again if 10th frame roll 2 is a strike", function() {
      for (var i = 1; i < 10; i++) {
        game.nextRound()
      };
      game.firstRoll(6)
      game.secondRoll(10)
      expect(game._frameNumber).toEqual(10)
    })
  })
});
