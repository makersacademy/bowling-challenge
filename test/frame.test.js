const { Frame } = require('../lib/frame');

describe(Frame, () => {
  
  let frame;
  beforeEach(() => {
    frame = new Frame();
  })

  describe("addRolls method", () => {

    it("can add a single roll into the rolls property", () => {
      frame.addRolls(5)
      expect(frame.rolls).toEqual([5])
    })
    it("can add two rolls into the rolls property", () => {
      frame.addRolls(5, 4)
      expect(frame.rolls).toEqual([5, 4])
    })
    it("can add either one or two rolls into the rolls property", () => {
      frame.addRolls(10)
      expect(frame.rolls).toEqual([10])
    })
    it("should also set the status property to 'SPARE' if the total rolls score is 10", () => {
      frame.addRolls(5, 5)
      expect(frame.status).toEqual("SPARE")
    })
    it("should also set the status to 'STRIKE' if roll is a single 10", () => {
      frame.addRolls(10)
      expect(frame.status).toEqual("STRIKE")
    })
    it("should leave the status to undefined if the frame is neither a spare nor a strike", () => {
      frame.addRolls(3, 4)
      expect(frame.status).toBe(undefined)
    })
  })

  describe("add bonus method", () => {
    it(`can add a bonus in the bonus property when the frame is spare`, () => {
      frame.addRolls(5, 5)
      frame.addBonus(4)
      expect(frame.bonus).toEqual([4])
    })
    it(`can add another bonus points when the frame is a strike`, () => {
      frame.addRolls(10)
      frame.addBonus(3)
      frame.addBonus(5)
      expect(frame.bonus).toEqual([3,5])
    })
    it(`can not add more than one bonus when the frame is a spare`, () => {
      frame.addRolls(5, 5)
      frame.addBonus(3)
      frame.addBonus(5)
      expect(frame.bonus).toEqual([3])
    })
    it(`can not add more than two bonuses when the frame is a strike`, () => {
      frame.addRolls(10)
      frame.addBonus(3)
      frame.addBonus(5)
      frame.addBonus(5)
      expect(frame.bonus).toEqual([3,5])
    })
  })

  describe("totalScore method", () => {
    it("should evaluate the total score when the frame is neither a spare nor a strike", () => {
      frame.addRolls(3, 4)
      expect(frame.totalScore()).toEqual(7)
    })
    it("should return '/' when the frame is a spare but the bonus is not collected yet", () => {
      frame.addRolls(5, 5)
      expect(frame.totalScore()).toEqual('/')
    })
    it("should return 'X' when the frame is a strike but the bonus is not collected yet", () => {
      frame.addRolls(10)
      expect(frame.totalScore()).toEqual('X')
    })
    it("should return 'X' when the frame is a strike but one bonus is missing", () => {
      frame.addRolls(10)
      frame.addBonus(3)
      expect(frame.totalScore()).toEqual('X')
    })
  })
})