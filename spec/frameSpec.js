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

    describe("when you get a spare", () => {
      it("sets need bonus to true", () => {
        expect(frame.isMissingBonus()).toBe(false)
        frame.addScore(score)
        frame.addScore(score)
        expect(frame.isMissingBonus()).toBe(true)
      })
    })
  })
})
