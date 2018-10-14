describe('Feature Tests', function () {
  beforeEach(function () {
    this.scorecard = new Scorecard()
  })

  describe('Game', function () {
    describe('first bowl (not a strike)', function () {
      beforeEach(function () {
        this.scorecard.bowl(4)
        this.frame = this.scorecard.frames[0]
      })

      it('should create a new frame', function () {
        expect(this.scorecard.frames.length).toEqual(1)
      })

      it('should have one entry in the frames array', function () {
        expect(this.frame.rolls.length).toEqual(1)
      })

      it('should record the number of pins knocked down', function () {
        expect(this.frame.rolls[0].pins).toEqual(4)
      })

      it('should not complete the frame', function () {
        expect(this.frame.complete).toEqual(false)
      })

      it('should have a frame score of zero', function () {
        expect(this.frame.score).toEqual(0)
      })

      it('should have a total score of zero', function () {
        expect(this.scorecard.totalScore).toEqual(0)
      })
    })

    describe('first bowl is a strike!', function () {
      beforeEach(function () {
        this.scorecard.bowl(10)
        this.frame = this.scorecard.frames[0]
        this.roll = this.frame.rolls[0]
      })

      it('should create a new frame', function () {
        expect(this.scorecard.frames.length).toEqual(1)
      })

      it('should not complete the frame', function () {
        expect(this.frame.complete).toEqual(false)
      })

      it('should record 10 pins knocked down', function () {
        expect(this.roll.pins).toEqual(10)
      })

      it('should have an outcome of Strike', function () {
        expect(this.roll.outcome).toEqual('Strike')
      })
    })

    describe('second bowl (not a spare)', function () {
      beforeEach(function () {
        this.scorecard.bowl(2)
        this.scorecard.bowl(6)
        this.frame = this.scorecard.frames[0]
      })

      it('should only have one frame', function () {
        expect(this.scorecard.frames.length).toEqual(1)
      })

      it('should record the number of pins knocked down', function () {
        expect(this.frame.rolls).toEqual([
          { pins: 2, outcome: '' },
          { pins: 6, outcome: '' }
        ])
      })

      it('should complete the frame', function () {
        expect(this.frame.complete).toEqual(true)
      })

      it('should have a frame score of 8', function () {
        expect(this.frame.score).toEqual(8)
      })
    })

    describe('second bowl is a spare!', function () {
      beforeEach(function () {
        this.scorecard.bowl(2)
        this.scorecard.bowl(8)
        this.frame = this.scorecard.frames[0]
      })

      it('should only have one frame', function () {
        expect(this.scorecard.frames.length).toEqual(1)
      })

      it('should record the number of pins knocked down', function () {
        expect(this.frame.rolls).toEqual([
          { pins: 2, outcome: '' },
          { pins: 8, outcome: 'Spare' }
        ])
      })

      it('should not complete the frame', function () {
        expect(this.frame.complete).toEqual(false)
      })

      it('should not have a frame score yet', function () {
        expect(this.frame.score).toEqual(0)
      })
    })
  })
})
