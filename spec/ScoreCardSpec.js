describe("ScoreCard", function() {
  var scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

  it("should update the rollNumber and frameNumber", function() {
    expect(scoreCard.rollNumber).toEqual(1);
    expect(scoreCard.frameNumber).toEqual(1);
    scoreCard.addScore(2);
    expect(scoreCard.rollNumber).toEqual(2);
    expect(scoreCard.frameNumber).toEqual(1);
    scoreCard.addScore(2);
    expect(scoreCard.rollNumber).toEqual(1);
    expect(scoreCard.frameNumber).toEqual(2);
  });

  it("should record the pins knocked down", function() {
    scoreCard.addScore(2);
    scoreCard.addScore(3);
    scoreCard.addScore(4);
    scoreCard.addScore(5);
    expectedResult = [ [2,3],[4,5],[],[],[],[],[],[],[],[] ];
    expect(scoreCard.pinsKnockedDown).toEqual(expectedResult);
  })

  it("should calculate the score", function() {
    for (var i = 0; i < 20; i++) {
      scoreCard.addScore(2);
    };
    expect(scoreCard.calculateScore()).toEqual(40);
  });

  it("strike should add bonus of next two rolls when strike", function() {
    scoreCard.addScore(10);
    expect(scoreCard.rollNumber).toEqual(1);
    expect(scoreCard.frameNumber).toEqual(2);
    expect(scoreCard.bonusRolls).toEqual(2);
    scoreCard.addScore(3);
    expect(scoreCard.bonusRolls).toEqual(1);
    scoreCard.addScore(4);
    expect(scoreCard.bonusRolls).toEqual(0);
    expext(scoreCard.calculateScore).toEqual(24);
  })
});
