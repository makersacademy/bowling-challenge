describe("Frame", function() {
  let frame;

  beforeEach(function() {
    frame = new Frame(3);
  })

  it("knows which number frame it is", function() {
    expect(frame.number).toEqual(3)
  })

  it("can have rolls added to it", function() {
    frame.addRoll(3)
    expect(frame.rolls).toContain(3)
  })

  it("knows if it's ended (except 10th frame)", function() {
    frame.addRoll(3)
    frame.addRoll(2)
    expect(frame.isCompleted()).toBe(true)
  })

  it("knows if it ended early (except 10th frame)", function() {
    frame.addRoll(10)
    expect(frame.isCompleted()).toBe(true)
  })

  it("won't add rolls if completed", function() {
    frame.addRoll(10)
    expect(function() {
      frame.addRoll(2);
    }).toThrowError("This frame is completed")
  })

  it("knows it's owed 2 extra rolls for scoring on a strike", function() {
    frame.addRoll(10)
    expect(frame.owedRolls()).toEqual(2)
  })

  it("knows it's owed 1 extra roll for scoring on a spare", function() {
    frame.addRoll(3)
    frame.addRoll(7)
    expect(frame.owedRolls()).toEqual(1)
  })

  describe("has special rules for 10th frame; it", function() {
    beforeEach(function() {
      frame = new Frame(10);
    })

    it("is completed with 2 rolls if no spare/strike", function() {
      frame.addRoll(3)
      frame.addRoll(2)
      expect(frame.isCompleted()).toBe(true)
    })

    it("is not completed with 2 rolls if a spare", function() {
      frame.addRoll(3)
      frame.addRoll(7)
      expect(frame.isCompleted()).toBe(false)
    })

    it("is completed with 3 rolls if a spare/strike", function() {
      frame.addRoll(3)
      frame.addRoll(7)
      frame.addRoll(5)
      expect(frame.isCompleted()).toBe(true)
    })
  })

  describe("stores the display version of the rolls", function () {
    it("'X' for a strike", function () {
      frame.addRoll(10)
      expect(frame.displayResults()).toEqual(["", "X"])
    })

    it("'/' for a spare", function () {
      frame.addRoll(1)
      frame.addRoll(9)
      expect(frame.displayResults()).toEqual(["1", "/"])
    })

    it("the actual numbers if no strike/spare", function () {
      frame.addRoll(2)
      frame.addRoll(3)
      expect(frame.displayResults()).toEqual(["2", "3"])
    })

    it("just first roll if no strike/spare and not finished", function () {
      frame.addRoll(2)
      expect(frame.displayResults()).toEqual(["2", ""])
    })

    it("works fine if rolling 0s", function () {
      frame.addRoll(0)
      frame.addRoll(0)
      expect(frame.displayResults()).toEqual(["0", "0"])
    })

    describe("with special 10th frame rules", function () {
      beforeEach(function() {
      frame = new Frame(10);
      })

      it("two empty strings if no strike or spare", function () {
        frame.addRoll(2)
        frame.addRoll(3)
        expect(frame.displayResults()).toEqual(["2", "3", "", ""])
      })

      it("strike", function () {
        frame.addRoll(10)
        expect(frame.displayResults()).toEqual(["", "X", "", ""])
      })

      it("spare then another roll", function () {
        frame.addRoll(2)
        frame.addRoll(8)
        frame.addRoll(3)
        expect(frame.displayResults()).toEqual(["2", "/", "3", ""])
      })

      it("strike then strike", function () {
        frame.addRoll(10)
        frame.addRoll(10)
        expect(frame.displayResults()).toEqual(["", "X", "X", ""])
      })

      it("strike, strike, not strike", function () {
        frame.addRoll(10)
        frame.addRoll(10)
        frame.addRoll(2)
        expect(frame.displayResults()).toEqual(["", "X", "X", "2"])
      })

      it("strike then spare", function () {
        frame.addRoll(10)
        frame.addRoll(3)
        frame.addRoll(7)
        expect(frame.displayResults()).toEqual(["", "X", "3", "/"])
      })
    })
  })

})
