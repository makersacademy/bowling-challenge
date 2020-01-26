"use strict"

describe("Frame Model", function() {

  var frameModel

  beforeEach(function() {
    frameModel = new FrameModel(1)
  })

  describe("::new", function() {
    it("Should create new FrameModel instance", function() {
      expect(frameModel instanceof FrameModel).toBe(true)
    })
    it("Should initialize with a framenumber", function() {
      expect(frameModel.frameNumber).toEqual(1)
    })
  })

  describe("#addRoll", function() {
    it("Should return total score and frame number after two rolls", function() {
      frameModel.addRoll(3)
      expect(frameModel.addRoll(4)).toEqual([7, 1])
    })
    it("Should return total score and frame number after three rolls if first two rolls equal 10 (spare)", function() {
      frameModel.addRoll(3)
      frameModel.addRoll(7)
      expect(frameModel.addRoll(4)).toEqual([14, 1])
    })
    it("Should return total score and frame number after three rolls the first roll is equal to 10 (strike)", function() {
      frameModel.addRoll(10)
      frameModel.addRoll(7)
      frameModel.addRoll(2)
      expect(frameModel.addRoll(4)).toEqual([19, 1])
    })
  })

})
