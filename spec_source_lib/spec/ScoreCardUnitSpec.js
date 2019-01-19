describe("ScoreCard", function() {
  var score_card;
  var score;

  beforeEach(function() {
    score_card = new ScoreCard();
    score = new Score(10);
  });

  it("should record single roll scores", function() {
    score_card.roll(score.score);
    expect(score_card.currentScore()).toEqual(10);
  });
})