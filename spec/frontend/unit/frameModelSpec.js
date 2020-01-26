"use strict"

describe("Frame Model", function() {

  var frameModel

  beforeEach(function() {
    frameModel = new FrameModel()
  })

  describe("::new", function() {
    it("Should create new FrameModel instance", function() {
      expect(frameModel instanceof FrameModel).toBe(true)
    })
  })

})
