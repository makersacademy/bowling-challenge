describe("ScoreCard", function() {
  var score_card;
  var score;

  beforeEach(function() {
    score_card = new ScoreCard();
    score = new Score(10);
  });

  it("should store and return score of roll", function() {
    score_card.roll(score.score);
    expect(score_card.currentScore()).toEqual(10);
  });

  it("should store and return multiple roll scores", function() {
    score_card.roll(score.score);
    expect(score_card.currentScore()).toEqual(10);
  });

  it("should keep track of player rolls", function() {
    score_card.roll(score.score);
    expect(score_card.rollsTook()).toEqual(1);
  });

})