describe("ScoreCard", () => {
let scorecard;

  beforeEach( () => {
    scorecard = new Scorecard();
  });

  it("will check if rolls are being pushed into frame", () => {
    scorecard.addFrame(5, 4)
    expect(scorecard.frame).toEqual([5, 4])
  })
});

