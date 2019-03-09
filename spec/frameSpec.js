
describe('Frame', function () {
  beforeEach(function () {
    frame = new Frame(1)
  })

  it('should return frame number', function () {
    expect(frame.number).toEqual(1)
  })


  it('should be finished after two rolls', function () {
    frame.addRoll(3)
    frame.addRoll(2)
    expect(frame.isFinished()).toEqual(true)
  })

  describe('Given frame had only normal rolls (IE non-strikes, spares)', function () {
    it('frame score should equal total number of pins hit in frame', function () {
      frame.addRoll(3)
      frame.addRoll(2)
      expect(frame.score()).toEqual(5)
    })

    it('frame score should be finalised after two rolls', function () {
      frame.addRoll(3)
      frame.addRoll(2)
      expect(frame.isScoreFinalised()).toEqual(true)
    })
  })
})
