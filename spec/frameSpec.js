describe("Frame", function() {
  var frame;

  describe("non strikes", function() {
    beforeEach(function() {
      frame = new Frame(1)
    })

    describe("when frame is created", function() {
      it("has a first roll score of 1", function() {
        expect(frame.firstRollScore()).toEqual(1)
      })

      it("has a second roll score of null", function() {
        expect(frame._secondRoll).toEqual(null)
      })

      it("is a incomplete frame", function() {
        expect(frame.isComplete()).toBeFalsy()
      })

      it("has a first and second roll score of 1", function() {
        expect(frame.firstAndSecondRollScore()).toEqual(1)
      })
    })

    describe("when second roll of frame", function() {
      it("has a second roll score of 1", function() {
        frame.addSecondRoll(1)
        expect(frame._secondRoll).toEqual(1)
      })

      it("is a complete frame", function() {
        frame.addSecondRoll(1)
        expect(frame.isComplete()).toBeTruthy()
      })

      it("has a first and second roll score of 2", function() {
        frame.addSecondRoll(1)
        expect(frame.firstAndSecondRollScore()).toEqual(2)
      })
    })

    describe("strikes and spares", function() {
      it("returns false for strike", function() {
        expect(frame.isAStrike()).toBeFalsy()
      })

      it("returns false for spare if second roll is 1", function() {
        frame.addSecondRoll(1)
        expect(frame.isASpare()).toBeFalsy()
      })

      it("returns true for spare if second roll is 9", function() {
        frame.addSecondRoll(9)
        expect(frame.isASpare()).toBeTruthy()
      })
    })
  })

  describe("strikes", function() {
    beforeEach(function() {
      frame = new Frame(10)
    })

    describe("strike scored", function() {
      it("returns true for strike", function() {
        expect(frame.isAStrike()).toBeTruthy()
      })
    })
  })
})
