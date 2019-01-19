describe("ScoreCard", () => {
let scorecard;

  beforeEach( () => {
    scorecard = new Scorecard();
  });

  it("rolls 1 time(s), scorecard.finished = true", 
  () => {
    scorecard.rollBall(0)
    scorecard.addScore
    scorecard.isComplete()
      expect(scorecard.finishedGame).toEqual(true)
  });
  
  it("rolls once to give score", () => {
    scorecard.rollBall(0)
    expect(scorecard.currentScores).toEqual([0])
  });
});