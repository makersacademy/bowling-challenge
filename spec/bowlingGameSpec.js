describe("BowlingGame", function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  // function skipToRoundTen () {
  //   for (var i = 1; i < 10; i++) {
  //     game.nextRound()
  //   };
  // } Want to use something like this to keep the testing DRY
  //   but not sure how to implement it

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
  });

  describe("10th frame", function() {
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
    });
    it("a maximum of three rolls may be taken", function() {
      game.nextRoll()
      game.nextRoll()
      expect(function() { game.nextRoll() }).toThrowError("Max rolls reached")
    });
    it("ends the game if roll 2 is neither a strike nor spare", function() {
      for (var i = 1; i < 10; i++) {
        game.nextRound()
      };
      game.firstRoll(6)
      game.secondRoll(7)
      expect(game.isOver()).toBe(true)
    });
  });

  describe("#scores", function() {
    it("has a frame score function which starts on 0", function(){
      expect(game._frameScore).toEqual(0)
    });
    it("has a total score which starts on 0", function(){
      expect(game._totalScore).toEqual(0)
    });
    it("frame score increases after the first roll", function() {
      game.firstRoll(8)
      expect(game._frameScore).toEqual(8)
    });
    it("total score increases after frame is complete", function() {
      game.firstRoll(8)
      game.secondRoll(9)
      expect(game._totalScore).toEqual(17)
    });
    it("frame score resets after 2 rolls", function() {
      game.firstRoll(8)
      game.secondRoll(9)
      expect(game._totalScore).toEqual(17)
      expect(game._frameScore).toEqual(0)
    })
  });
});
