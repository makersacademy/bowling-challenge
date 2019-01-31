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
    rollMany(2, 0, 20)
    expect(scorecard.score()).toBe(20)
  })

  it("looks to see if scorecard accumulates values", () => {
    scorecard.addFrame(3, 5)
    expect(scorecard.totalScore()).toEqual(8)
  })

  it("calculates a gutter game", () => {
    rollMany(0, 0, 20)
    expect(scorecard.totalScore()).toEqual(0)
  })

  it("tracks number of frames", () => {
    scorecard.addFrame(4, 4) 
    scorecard.addFrame(3, 6)
    expect(scorecard.frameNumber).toEqual(2)
  })

  var rollMany = (pin1, pin2, rolls) => {
    for (var i = 0; i < rolls; i++) {
      scorecard.addFrame(pin1, pin2);
    }
  }
 
});

