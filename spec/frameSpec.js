
describe('Frame', function () {
  beforeEach(function () {
    frame = new Frame(1)
  })

  it('should return frame number', function () {
    expect(frame.number).toEqual(1)
  })

  describe('Given it is NOT the tenth frame (ie frame 1-9)', function () {
    describe('And that frame had only normal rolls (IE non-strikes, spares)', function () {
      beforeEach(function () {
        frame.addRoll(3)
        frame.addRoll(2)
      })

      it('should be finished after two rolls', function () {
        expect(frame.isFinished()).toEqual(true)
      })

      it('frame score should equal total number of pins hit in frame', function () {
        expect(frame.score()).toEqual(5)
      })

      it('frame score should be finalised after two rolls', function () {
        expect(frame.isScoreFinalised()).toEqual(true)
      })
    })

    describe('And that frame had a strike', function () {
      beforeEach(function () {
        frame.addRoll(10)
      })

      it('should be finished after one roll', function () {
        frame.addRoll(10)
        expect(frame.isFinished()).toEqual(true)
      })

      it('frame score should only be finalised after three rolls', function () {
        frame.addRoll(10)
        expect(frame.isScoreFinalised()).toEqual(false)

        frame.addRoll(10)
        expect(frame.isScoreFinalised()).toEqual(true)
      })
    })

    describe('And that frame had a spare', function () {
      it('frame score should only be finalised after three rolls', function () {
        frame.addRoll(5)
        frame.addRoll(5)
        expect(frame.isScoreFinalised()).toEqual(false)
        
        frame.addRoll(10)
        expect(frame.isScoreFinalised()).toEqual(true)
      })
    })
  })
})
