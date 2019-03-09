
describe('Scorecard', function () {
  let scorecard
  let mockFrameClass
  let addRollCalls

  beforeEach(function () {
    addRollCalls = []
    const stubAddRoll = (noOfPins) => { addRollCalls.push(noOfPins) }

    mockFrameClass = function() {
      this.score = () => 25
      this.addRoll = stubAddRoll
    }

    mockFrameClass.prototype.isScoreFinalised = function() { return true }
    mockFrameClass.prototype.isFinished = function() { return true }

    scorecard = new Scorecard(mockFrameClass)
  })

  describe('When ball roll is added', function () {
    it('should instruct each frame with an unfinalised score to add the roll', function () {
      mockFrameClass.prototype.isScoreFinalised = function() { return false }

      scorecard.roll(7)

      expect(addRollCalls).toEqual([7, 7]);
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
