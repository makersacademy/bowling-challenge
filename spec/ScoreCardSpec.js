describe("ScoreCard", () => {
let scorecard;

  beforeEach( () => {
    scorecard = new Scorecard();
    console.log(scorecard)
  });

  it("knows when game is over", () => {
    for (var i = 0; i < 10; i++ ) {
      scorecard.receiveFrame([3,4]);
    }
    expect(scorecard.isGameOver()).toBe(true)
  });

  it('the cumulative score after each frame', function() {
    scorecard.bowlToScore(8);
    scorecard.bowlToScore(5);

    expect(scorecard.info.currentScores).toEqual([8, 5]);
  });
  
});

