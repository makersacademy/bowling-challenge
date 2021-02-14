describe("frame scoring", () => {
  let bad_score = 1;
  let score = 5;
  let strike = 10;
  let frame;

  beforeEach(() => {
    frame = new Frame
  })
  describe("Adding a score", () => {
    it("changes the total score by that amount", () => {
      expect(frame.totalScore).toEqual(0)
      frame.addScore(score)
      expect(frame.totalScore).toEqual(score)
    })
  })
})
