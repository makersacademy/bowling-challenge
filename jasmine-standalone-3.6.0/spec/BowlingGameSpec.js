describe("BowlingGame", function() {
  var bowlingGame;

  beforeEach(function(){
    bowlingGame = new BowlingGame;
  })

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

});
