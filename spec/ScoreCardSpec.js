describe("ScoreCard", () => {
let scorecard;

  beforeEach( () => {
    scorecard = new Scorecard();
  });

  it("will check if rolls are being pushed into frame", () => {
    scorecard.addFrame(5, 4)
    expect(scorecard.frame).toEqual([5, 4])
  })

  it("looks to see if scorecard accumulates values", () => {
    scorecard.addFrame(3, 5)
    expect(scorecard.accumScore()).toEqual(8)
  })

  it("calculates a gutter game", () => {
    scorecard.addFrame(0, 0), scorecard.addFrame(0, 0), scorecard.addFrame(0, 0), scorecard.addFrame(0, 0), scorecard.addFrame(0, 0)
    scorecard.addFrame(0, 0), scorecard.addFrame(0, 0), scorecard.addFrame(0, 0), scorecard.addFrame(0, 0), scorecard.addFrame(0, 0)
    scorecard.addFrame(0, 0), scorecard.addFrame(0, 0), scorecard.addFrame(0, 0), scorecard.addFrame(0, 0), scorecard.addFrame(0, 0)
    scorecard.addFrame(0, 0), scorecard.addFrame(0, 0), scorecard.addFrame(0, 0), scorecard.addFrame(0, 0), scorecard.addFrame(0, 0)
    expect(scorecard.accumScore()).toEqual(0)
  })

  it("tracks number of frames", () => {
    scorecard.addFrame(4, 4)
    scorecard.addFrame(3, 6)
    expect(scorecard.frameNumber).toEqual(2)
  })
});

