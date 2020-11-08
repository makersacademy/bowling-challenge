describe("Scorecard", function () {
  var scorecard
  var f1
  var f2
  var f3
  beforeEach(function () {
    scorecard = new Scorecard
    f1 = new Frame
    f2 = new Frame
    f3 = new Frame
    spyOn(f1, 'setNumber')
    spyOn(f2, 'setNumber')
    spyOn(f3, 'setNumber')
    spyOn(f1, 'score')
    spyOn(f2, 'score')
    spyOn(f3, 'score')
  })
  describe("#Add", function () {
    it("adds a frame to the scorecard and assigns it a number", function () {
      scorecard.add(f1)
      expect(f1.setNumber).toHaveBeenCalledWith(1)
      expect(scorecard.getFrame(0)).toEqual(f1)
    })
  })

  describe("#score", function () {
    it("calls score on each frame with the next two frames as arguments", function () {
      scorecard.add(f1)
      scorecard.add(f2)
      scorecard.add(f3)
      scorecard.score()
      expect(f1.score).toHaveBeenCalledWith(f2, f3)
      expect(f2.score).toHaveBeenCalledWith(f3, undefined)
      expect(f3.score).toHaveBeenCalledWith(undefined, undefined)
    })
  })

  describe("#roll", function () {
    var frameClass
    beforeEach(function () {
    })
    describe("First roll", function () {
      it("creates a frame, calls roll on it and adds it to the scorecard", function () {
        scorecard.roll(8)
        var frame = scorecard.getFrame(0)
        expect(frame).toBeInstanceOf(Frame)
        expect(frame.getRoll(0)).toEqual(8)
      })
    })
    describe("Current frame incomplete", function () {
      it("calls roll on that frame", function () {
        spyOn(f1, 'isComplete').and.returnValue(false)
        spyOn(f1, 'roll')
        scorecard.add(f1)
        scorecard.roll(2)
        expect(f1.roll).toHaveBeenCalledWith(2)
      })
    })
    describe("Current frame is complete", function () {
      it("creates a new frame, calls rolls on it and adds it to the scorecard", function () {
        spyOn(f1, 'isComplete').and.returnValue(true)
        scorecard.add(f1)
        scorecard.roll(8)
        expect(scorecard.getLastFrame()).not.toEqual(f1)
        expect(scorecard.getLastFrame().getRoll(0)).toEqual(8)
      })
    })
  })
})