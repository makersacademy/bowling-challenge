describe("Scorecard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("should start the game with a score of 0", function() {
    expect(scorecard.showScore()).toEqual(0);
  });

  it("should allow the player to enter the number of pins they knocked down", function() {
    scorecard.enterScore(3);
    expect(scorecard.showScore()).toEqual(3);
  });

  it("should show the frame number", function() {
    expect(scorecard.isFrame()).toEqual(1);
  });

  it("should move to the next frame after 2 balls", function() {
    scorecard.enterScore(3);
    scorecard.enterScore(3);
    expect(scorecard.isFrame()).toEqual(2);
  })

  it("should throw an error if the score input for a frame is greater than 10", function() {
    expect(function() {scorecard.enterScore(11); } ).toThrow("maximum input per frame is 10");
  });

  it("should move to the next frame immediately in the event of a strike", function() {
    scorecard.enterScore(10)
    expect(scorecard.isFrame()).toEqual(2)
  });
});
