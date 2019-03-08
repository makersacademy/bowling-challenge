
describe('Scorecard', function () {
  let scorecard
  let mockFrameClass

  beforeEach(function () {
    mockFrameClass = function() {}
    scorecard = new Scorecard(mockFrameClass)
  })

  describe('When ball roll is added', function () {
    describe('Given frame for previous roll had NOT finished', function() {
      it('should return same frame as previous roll', function () {
        mockFrameClass.prototype.isFinished = function() { return false }
        expect(scorecard.roll(7).currentFrame).toEqual(scorecard.frames[0])
      })
    })

    describe('Given frame for previous roll HAD finished', function() {
      it('should return new frame', function () {
        mockFrameClass.prototype.isFinished = function() { return true }
        expect(scorecard.roll(7).currentFrame).toEqual(scorecard.frames[1])
      })
    })
  })
})
