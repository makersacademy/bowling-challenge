describe("BowlingGame", function() {
  var bowlingGame;

  beforeEach(function(){
    bowlingGame = new BowlingGame;
  });

  describe("addRolls", function() {
    it("adds inputted rolls to the frame", function(){
      bowlingGame.addRolls(3, 4);
      expect(bowlingGame.getGameScore()).toEqual(7);
    });

    it("works with a strike", function() {
      bowlingGame.addRolls(10);
      expect(bowlingGame.getGameScore()).toEqual(10);
    });

    it("works with a spare", function() {
      bowlingGame.addRolls(4, 6);
      expect(bowlingGame.getGameScore()).toEqual(10);
    });

    it("works with a gutter roll", function() {
      bowlingGame.addRolls(0, 0);
      expect(bowlingGame.getGameScore()).toEqual(0);
    });

    it("works with a gutter game", function() {
      for (var i = 0; i < 10; i++) {
        bowlingGame.addRolls(0, 0);
      }
      expect(bowlingGame.getGameScore()).toEqual(0);
    });
  });

  describe("isPreviousFrameSpare", function() {
    it("will return true if previous roll was a spare", function() {
      bowlingGame.addRolls(4, 6);
      bowlingGame.addRolls(3, 4);
      expect(bowlingGame.isPreviousFrameSpare()).toEqual(true);
      // maybe use spies with this method later on when testing adding a bonus, same with below tests in describe block
    });

    it("will return false if previous roll was neither spare nor strike", function() {
      bowlingGame.addRolls(4, 3);
      bowlingGame.addRolls(3, 4);
      expect(bowlingGame.isPreviousFrameSpare()).toEqual(false);
    });

    it("will return false if previous roll was a strike", function() {
      bowlingGame.addRolls(10);
      bowlingGame.addRolls(3, 4);
      expect(bowlingGame.isPreviousFrameSpare()).toEqual(false);
    });
  });

  describe("isPreviousFrameStrike", function() {
    it("will return true if previous roll was a strike", function() {
      bowlingGame.addRolls(10);
      bowlingGame.addRolls(3, 4);
      expect(bowlingGame.isPreviousFrameStrike()).toEqual(true);
    });

    it("will return false if previous roll was a spare", function() {
      bowlingGame.addRolls(5, 5);
      bowlingGame.addRolls(3, 4);
      expect(bowlingGame.isPreviousFrameStrike()).toEqual(false);
    });

    it("will return false if previous roll neither spare nor strike", function() {
      bowlingGame.addRolls(5, 2);
      bowlingGame.addRolls(3, 4);
      expect(bowlingGame.isPreviousFrameStrike()).toEqual(false);
    });
  })

});
