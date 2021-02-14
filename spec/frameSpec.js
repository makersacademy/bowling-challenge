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
      expect(frame.totalScore()).toEqual(0)
      frame.addScore(score)
      expect(frame.totalScore()).toEqual(score)
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

    describe("when you get a strike", () => {
      it("sets need bonus to true", () => {
        expect(frame.isMissingBonus()).toBe(false)
        frame.addScore(strike)
        expect(frame.isMissingBonus()).toBe(true)
      })
      it("should complete the frame", () => {
        expect(frame.isComplete()).toBe(false)
        frame.addScore(strike)
        expect(frame.isComplete()).toBe(true)
      })
    })

    describe("when the first bowl is not a strike", () => {
      beforeEach(() => {
        frame.addScore(badScore)
      })
      it("should not be complete", () => {
        expect(frame.isComplete()).toBe(false)
      })
      it("should be completed by second bowl", () => {
        frame.addScore(badScore)
        expect(frame.isComplete()).toBe(true)
      })
    })
  })

  describe("adding bonus scores", () => {
    it("should change the total score by the amount given", () => {
      frame.addScore(strike)
      expect(frame.totalScore()).toEqual(10)
      frame.addBonusScore(score)
      expect(frame.totalScore()).toEqual(10 + score)
    })
  })
})
