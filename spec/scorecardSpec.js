
describe('Scorecard', function () {
  let scorecard
  let mockFrameClass
  let frameAddRollSpy

  function newMockFrameClass() {
    const frameAddRollSpy = []
    const stubAddRoll = (noOfPins) => { frameAddRollSpy.push(noOfPins) }
  
    const mockFrameClass = function() {
      this.score = () => 25
      this.addRoll = stubAddRoll
    }

    mockFrameClass.prototype.isScoreFinalised = function() { return true }
    mockFrameClass.prototype.isFinished = function() { return true }

    return { frameAddRollSpy, mockFrameClass }
  }

  beforeEach(function () {
    ({ frameAddRollSpy, mockFrameClass } = newMockFrameClass())

    scorecard = new Scorecard(mockFrameClass)
  })

  describe('When ball roll is added', function () {
    it('should instruct each frame with an unfinalised score to add the roll', function () {
      mockFrameClass.prototype.isScoreFinalised = function() { return false }

      scorecard.roll(7)

      expect(frameAddRollSpy).toEqual([7, 7]);
    })

    
    it('should return the total running scores for each frame with a finalised score', function () {
      expect(scorecard.roll(7).runningScores).toEqual([25, 50])
    })

    describe('Given frame for previous roll had NOT finished', function() {
      it('should return same frame as previous roll', function () {
        mockFrameClass.prototype.isFinished = function() { return false }
        expect(scorecard.roll(7).currentFrame).toEqual(scorecard.frames[0])
      })
    })

    describe('Given frame for previous roll HAD finished', function() {
      it('should return new frame', function () {
        expect(scorecard.roll(7).currentFrame).toEqual(scorecard.frames[1])
      })
    })
  })
})
