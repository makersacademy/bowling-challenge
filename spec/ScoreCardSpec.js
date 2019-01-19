describe("ScoreCard", () => {
let scorecard;

  beforeEach( () => {
    scorecard = new Scorecard();
  });

  it("rolls 20 times, scorecard.complete = true, score = 0", 
  () => {
  scorecard.rollBall(0)
  scorecard.finalScore
  scorecard.complete
    expect(scorecard).toEqual(true)

  })
});