describe("ScoreCard", function() {
  var scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

  it("rolls should update the rollNumber and frameNumber", function() {
    expect(scoreCard.rollNumber).toEqual(1);
    expect(scoreCard.frameNumber).toEqual(1);
    scoreCard.addScore(2);
    expect(scoreCard.rollNumber).toEqual(2);
    expect(scoreCard.frameNumber).toEqual(1);
    scoreCard.addScore(2);
    expect(scoreCard.rollNumber).toEqual(1);
    expect(scoreCard.frameNumber).toEqual(2);
  });

  it("can record the final score", function() {
    var i;
    for (i = 0; i < 20; i++) {
      scoreCard.addScore(2);
    };
    expect(scoreCard.sumOfPins()).toEqual(40);
  });
});
