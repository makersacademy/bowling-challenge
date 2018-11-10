describe ('Final Frame', function () {
  var finalFrame

  beforeEach(function () {
    finalFrame = new FinalFrame()
  })

  describe ('A final frame', function () {
    it('should inherit from a regular frame', function () {
      spyOn(Frame.prototype, 'getBowls')
      finalFrame.getBowls()
      expect(Frame.prototype.getBowls).toHaveBeenCalled()
    })

    it('is finished when two normal bowls are played', function () {
      finalFrame.addBowl(3)
      finalFrame.addBowl(4)
      expect(finalFrame.isFinished()).toBe(true)
    })

    it('is not finished when a strike is played', function () {
      finalFrame.addBowl(10)
      expect(finalFrame.isFinished()).toBe(false)
    })

    it('is not finished if a strike is played then another shot', function () {
      finalFrame.addBowl(10)
      finalFrame.addBowl(5)
      console.log(finalFrame.isStrike())
      expect(finalFrame.isFinished()).toBe(false)
    })
  })
})
