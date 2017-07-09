describe("ScoreCard", function () {
  var scoreCard;

  beforeEach(function () {
    scoreCard = new ScoreCard();
  });

  it("has a default total of 0", function () {
    expect(scoreCard.total).toEqual(0);
  });

  it("adds result of roll to the total", function () {
    scoreCard.roll(8);
    scoreCard.roll(2);
    expect(scoreCard.total).toEqual(10);
  });

});
