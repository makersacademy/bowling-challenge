describe("ScoreCard", function() {
  var score_card;
  

  beforeEach(function() {
    score_card = new ScoreCard();
  });

  it("should be able to store the score of a roll", function() {
    score_card.roll(score)
    expect(score_card.score).toEqual(score);  
  });

})