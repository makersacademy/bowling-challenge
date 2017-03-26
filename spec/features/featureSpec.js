describe("Feature Test", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    specHelper = new SpecHelper();
  });

  it("bowls 4 frames and checks the game's frame array", function() {
    myShortGame = specHelper.shortGame();
    expect(myShortGame.checkAllScores().length).toEqual(4);
    expect(myShortGame.checkAllScores()[0].currentRoll()).toEqual(7);
    expect(myShortGame.checkAllScores()[1].currentRoll()).toEqual(10);
    expect(myShortGame.checkAllScores()[2].currentRoll()).toEqual("X");
    expect(myShortGame.checkAllScores()[3].currentRoll()).toEqual(5);
  });

  describe("Bonus scoring", function() {

    it("bowls 3 frames and calculates game total", function() {
      myShortGame = specHelper.shortGame();
      expect(myShortGame.calculateGameTotal()).toEqual(47);
    });

    it("bowls a 6 frame game with consecutive strikes and calculates game total", function() {
      complexTestGame = specHelper.consecutiveStrikeBonusScoringGame();
      expect(complexTestGame.calculateGameTotal()).toEqual(106);
    });

    describe("Spare bonuses", function() {
      it("adds a 2 frame game's spare bonus score", function() {
        spareBonusGame = specHelper.spareBonusScoringGame();
        expect(spareBonusGame.calculateGameTotal()).toEqual(23);
      });

      it("adds a 6 frame game's spare bonus score", function() {
        complexTestGame = specHelper.complexSpareBonusScoringGame();
        expect(complexTestGame.calculateGameTotal()).toEqual(69);
      });
    });

    describe("Strike bonuses", function() {
      it("adds a 2 frame game's strike bonus score", function() {
        strikeBonusGame = specHelper.strikeBonusScoringGame();
        expect(strikeBonusGame.calculateGameTotal()).toEqual(28);
      });
    });
  });
});
