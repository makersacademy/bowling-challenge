describe('Final Frame', function () {
  var finalFrame

  beforeEach(function () {
    finalFrame = new FinalFrame()
  })

  describe('A final frame', function () {
    it('should inherit from a regular frame', function () {
      spyOn(Frame.prototype, 'getBowls')
      finalFrame.getBowls()
      expect(Frame.prototype.getBowls).toHaveBeenCalled()
    })

    it('is finished when two normal bowls are played', function () {
      finalFrame.bowl(3)
      finalFrame.bowl(4)
      expect(finalFrame.isFinished()).toBe(true)
    })

    it('is not finished when a strike is played', function () {
      finalFrame.bowl(10)
      expect(finalFrame.isFinished()).toBe(false)
    })

    it('is not finished if a strike is played then another shot', function () {
      finalFrame.bowl(10)
      finalFrame.bowl(5)
      expect(finalFrame.isFinished()).toBe(false)
    })

    it('is not finished if a spare is played', function () {
      finalFrame.bowl(8)
      finalFrame.bowl(2)
      expect(finalFrame.isFinished()).toBe(false)
    })

    it('cannot score more than 10 with 2 normal bowls', function () {
      message = "You can't knock over more than 10 pins!"
      finalFrame.bowl(8)
      expect(function () { finalFrame.bowl(3) }).toThrow(message)
    })
  })

  describe("The final frame's score", function () {
    it('should calculate normal score', function () {
      finalFrame.bowl(4)
      finalFrame.bowl(5)
      expect(finalFrame.getScore()).toEqual(9)
    })

    it('should calculate spare without bonus', function () {
      finalFrame.bowl(5)
      finalFrame.bowl(5)
      finalFrame.bowl(5)
      expect(finalFrame.getScore()).toEqual(15)
    })

    it('should calculate strikes without bonus', function () {
      finalFrame.bowl(10)
      finalFrame.bowl(10)
      finalFrame.bowl(10)
      expect(finalFrame.getScore()).toEqual(30)
    })
  })
})
