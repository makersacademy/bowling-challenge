describe("Scorecard", function () {
  var scorecard
  var f1
  var f2
  var f3
  beforeEach(function () {
    scorecard = new Scorecard
    f1 = new Frame
    spyOn(f1, 'setNumber')
  })
  describe("#Add", function () {
    it("adds a frame to the scorecard and assigns it a number", function () {
      scorecard.add(f1)
      expect(f1.setNumber).toHaveBeenCalledWith(1)
      expect(scorecard.getFrame(0)).toEqual(f1)
    })
  })
})