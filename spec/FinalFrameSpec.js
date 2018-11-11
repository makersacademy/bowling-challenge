describe('Final Frame', function () {
  var finalFrame

  beforeEach(function () {
    finalFrame = new FinalFrame()
  })

  describe('#addRoll', function () {
    it('sets roll three if there is a spare', function () {
      finalFrame.addRoll(5)
      finalFrame.addRoll(5)
      finalFrame.addRoll(5)

      expect(finalFrame.rollThree).toEqual(5)
    })

    it('sets roll three if there is a strike', function () {
      finalFrame.addRoll(10)
      finalFrame.addRoll(5)
      finalFrame.addRoll(5)

      expect(finalFrame.rollThree).toEqual(5)
    })
  })

  describe('#calculateScore', function () {
    it('sets score when there is a spare', function () {
      finalFrame.addRoll(5)
      finalFrame.addRoll(5)
      finalFrame.addRoll(5)
      finalFrame.calculateScore()

      expect(finalFrame.score).toEqual(15)
    })

    it('sets score when there is a strike', function () {
      finalFrame.addRoll(10)
      finalFrame.addRoll(5)
      finalFrame.addRoll(5)
      finalFrame.calculateScore()

      expect(finalFrame.score).toEqual(20)
    })

    it('sets score for multiple stries', function () {
      finalFrame.addRoll(10)
      finalFrame.addRoll(10)
      finalFrame.addRoll(10)
      finalFrame.calculateScore()

      expect(finalFrame.score).toEqual(30)
    })
  })
})
