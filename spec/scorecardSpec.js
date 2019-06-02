describe("Scorecard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("should start the game with a score of 0", function() {
    expect(scorecard.showScore()).toEqual(0);
  });

  it("should allow the player to enter the number of pins they knocked down", function() {
    scorecard.enterScore(3)
    expect(scorecard.showScore()).toEqual(3);
  });
  it("should show the frame number", function() {
    expect(scorecard.isFrame()).toEqual(1)
  });
});
