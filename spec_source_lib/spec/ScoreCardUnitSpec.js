describe("ScoreCard", function() {
  var score_card;
  var score;

  beforeEach(function() {
    score_card = new ScoreCard();
    score = new Score(10);
  });

  it("should be able to store and return score of roll", function() {
    score_card.roll(score.score);
    expect(score_card.currentScore()).toEqual(10);
  });

  it("should be able to store and return multiple roll scores", function() {
    score_card.roll(score.score);
    expect(score_card.currentScore()).toEqual(10);
  });

})