describe("ScoreCard", () => {
let scorecard;

  beforeEach( () => {
    scorecard = new Scorecard();
  });

  it("will check if rolls are being pushed into frame", () => {
    scorecard.addFrame(5, 4)
    expect(scorecard.frame).toEqual([5, 4])
  })

  it("can add all 2s", () => {
    for (var i = 0; i < 20; i++) {
      scorecard.addFrame(2, 0)
    }
    expect(scorecard.score()).toBe(20)
  })

  it("looks to see if scorecard accumulates values", () => {
    scorecard.addFrame(3, 5)
    expect(scorecard.totalScore()).toEqual(8)
  })

  it("calculates a gutter game", () => {
    for (var i = 0; i < 20; i++) {
      scorecard.addFrame(0,0)
    }
    expect(scorecard.totalScore()).toEqual(0)
  })

  it("tracks number of frames", () => {
    scorecard.addFrame(4, 4) 
    scorecard.addFrame(3, 6)
    expect(scorecard.frameNumber).toEqual(2)
  })

 
});

