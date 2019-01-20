describe("ScoreCard", () => {
let scorecard;

  beforeEach( () => {
    scorecard = new Scorecard();
  });

  it("knows when game is over", () => {
    for (var i = 0; i < 10; i++ ) {
      scorecard.receiveFrame([3]);
    }
    expect(scorecard.isGameOverByFrames()).toBe(true)
  });

  it("Gutter game by bowling 20 '0s' ", () => {
    scorecard.bowlToScore(0), scorecard.bowlToScore(0), scorecard.bowlToScore(0), scorecard.bowlToScore(0), scorecard.bowlToScore(0),
    scorecard.bowlToScore(0), scorecard.bowlToScore(0), scorecard.bowlToScore(0), scorecard.bowlToScore(0), scorecard.bowlToScore(0),
    scorecard.bowlToScore(0), scorecard.bowlToScore(0), scorecard.bowlToScore(0), scorecard.bowlToScore(0), scorecard.bowlToScore(0),
    scorecard.bowlToScore(0), scorecard.bowlToScore(0), scorecard.bowlToScore(0), scorecard.bowlToScore(0), scorecard.bowlToScore(0),
    expect(scorecard.isGameOverByRolls()).toBe(true)
  })

  it('cumulative score after each frame', () => {
    scorecard.bowlToScore(8);
    scorecard.bowlToScore(5);
    expect(scorecard.info.currentScores).toEqual([8, 5]);
  });
  
  it(" adds score from each bowl", () => {
    scorecard.bowlToScore(5)
    scorecard.bowlToScore(4)
    expect(scorecard.accumScore()).toEqual(9)

  })
  
});

