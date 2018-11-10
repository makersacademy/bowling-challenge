describe ('Final Frame', function () {
  var finalFrame

  beforeEach(function () {
    finalFrame = new FinalFrame()
  })

  describe ('A final frame', function () {
    it('should inherit from a regular frame', function () {
      spyOn(Frame.prototype, 'getBowls')
      finalFrame.getBowls()
      console.log(finalFrame.__proto__)
      expect(Frame.prototype.getBowls).toHaveBeenCalled()
    })
  })
})
