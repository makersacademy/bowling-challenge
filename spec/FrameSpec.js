describe("Frame", () => {
let frame;
let scorecard
  beforeEach( () => {
    frame = new Frame();
    scorecard = new Scorecard();
  });

  it("checks for scores to be in frames array", () => {
    scorecard.bowlToScore(5, 3)
    expect(frame.frames).toEqual([5, 3])
  })
});