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

})
