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
    describe("when you score a spare", () => {
      beforeEach(() => {
        frame.addScore(score)
        frame.addScore(10 - score)
      })
      it("instantly sets need bonus to false", () => {
        expect(frame.isMissingBonus()).toBe(true)
        frame.addBonusScore(score)
        expect(frame.isMissingBonus()).toBe(false)
      })
    })
    describe("when the main score was a strike", () => {
      beforeEach(() => {
        frame.addScore(strike)
      })
      it("doesn't change need bonus after one bonus roll", () => {
        expect(frame.isMissingBonus()).toBe(true)
        frame.addBonusScore(score)
        expect(frame.isMissingBonus()).toBe(true)
      })
    })
  })

  describe("when it is the final frame", () => {
    let finalFrame;
    beforeEach(() => {
      finalFrame = new Frame({finalFrame: true})
    })
    describe("when you scored < 10 in the first two bowls", () => {
      it("should complete the frame", () => {
        expect(finalFrame.isComplete()).toBe(false)
        finalFrame.addScore(badScore)
        finalFrame.addScore(badScore)
        expect(finalFrame.isComplete()).toBe(true)
      })
    })
    describe("when you got a spare in the main frame", () => {
      it("should not be complete", () => {
        expect(finalFrame.isComplete()).toBe(false)
        finalFrame.addScore(score)
        finalFrame.addScore(score)
        expect(finalFrame.isComplete()).toBe(false)
      })
    })
  })
})
