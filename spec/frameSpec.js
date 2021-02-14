describe("frame scoring", () => {
  const badScore = 1;
  const score = 5;
  const strike = 10;
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

    describe("when you get less than 10 over two bowls", () => {
      it("doesn't doesn't set needing bonus true", () => {
        expect(frame.isMissingBonus()).toBe(false)
        frame.addScore(badScore)
        frame.addScore(badScore)
        expect(frame.isMissingBonus()).toBe(false)
      })
    })
  })
})
