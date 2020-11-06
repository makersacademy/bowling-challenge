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
})