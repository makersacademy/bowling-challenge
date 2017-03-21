describe("Feature Test", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    specHelper = new SpecHelper();
  });

  it("bowls 3 frames and checks the game's frame array", function() {
    myShortGame = specHelper.shortGame();
    expect(myShortGame.checkAllScores().length).toEqual(3);
    expect(myShortGame.checkAllScores()[0].currentRoll()).toEqual(7);
    expect(myShortGame.checkAllScores()[1].currentRoll()).toEqual(10);
    expect(myShortGame.checkAllScores()[2].currentRoll()).toEqual("X");
  });

  it("bowls 3 frames and calculates game total WITHOUT BONUSES", function() {
    myShortGame = specHelper.shortGame();
    expect(myShortGame.calculateGameTotal()).toEqual(27)
  })

});
