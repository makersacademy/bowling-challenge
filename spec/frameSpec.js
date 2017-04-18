describe("Frame tests:", function() {
  var frame

  beforeEach(function() {
    frame = new Frame()
  })

  describe("at start", function() {
    it("has a frame number of 1", function() {
      expect(frame._frameNumber).toEqual(1)
    })

    it("is the first roll", function() {
      expect(frame._isFirstRollOfFrame).toBeTruthy()
    })

    it("has zero bonus rolls", function() {
      expect(frame._bonusRolls).toEqual(0)
    })
  })

  describe("first roll", function() {
    describe("when knock down three pins", function() {
      it("returns a score of 3", function() {
        expect(frame.score(3)).toEqual(3)
      })

      it("returns false for being the first roll in the frame", function() {
        frame.score(3)
        expect(frame._isFirstRollOfFrame).toBeFalsy()
      })
    })

    describe("when knock down 10 pins", function() {
      it("returns a score of 10", function() {
        expect(frame.score(10)).toEqual(10)
      })

      it("returns true for being the first roll in the frame", function() {
        frame.score(10)
        expect(frame._isFirstRollOfFrame).toBeTruthy()
      })

      it("returns 2 for frame number", function() {
        frame.score(10)
        expect(frame._frameNumber).toEqual(2)
      })

      it("returns 2 bonus rolls if get a strike", function() {
        frame.score(10)
        expect(frame._bonusRolls).toEqual(2)
      })
    })
  })




})
