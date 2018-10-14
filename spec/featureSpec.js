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

  describe('Full Game', function () {
    beforeEach(function () {
      this.scorecard.bowl(1)
      this.scorecard.bowl(4)
      this.scorecard.bowl(4)
      this.scorecard.bowl(5)
      this.scorecard.bowl(6)
      this.scorecard.bowl(4)
      this.scorecard.bowl(5)
      this.scorecard.bowl(5)
      this.scorecard.bowl(10)
      this.scorecard.bowl(0)
      this.scorecard.bowl(1)
      this.scorecard.bowl(7)
      this.scorecard.bowl(3)
      this.scorecard.bowl(6)
      this.scorecard.bowl(4)
      this.scorecard.bowl(10)
      this.scorecard.bowl(2)
      this.scorecard.bowl(8)
      this.scorecard.bowl(6)
    })
    it('should have a score of 5 for frame 1', function () {
      expect(this.scorecard.frames[0].score).toEqual(5)
    })
    it('should not have an oucome for frame 1', function () {
      expect(this.scorecard.frames[0].rolls[0].outcome).toEqual('')
      expect(this.scorecard.frames[0].rolls[1].outcome).toEqual('')
    })
    it('should have a score of 9 for frame 2', function () {
      expect(this.scorecard.frames[1].score).toEqual(9)
    })
    it('should not have an oucome for frame 2', function () {
      expect(this.scorecard.frames[1].rolls[0].outcome).toEqual('')
      expect(this.scorecard.frames[1].rolls[1].outcome).toEqual('')
    })
    it('should have a score of 15 for frame 3', function () {
      expect(this.scorecard.frames[2].score).toEqual(15)
    })
    it('should have an oucome of Spare for frame 3', function () {
      expect(this.scorecard.frames[2].rolls[0].outcome).toEqual('')
      expect(this.scorecard.frames[2].rolls[1].outcome).toEqual('Spare')
    })
    it('should have a score of 20 for frame 4', function () {
      expect(this.scorecard.frames[3].score).toEqual(20)
    })
    it('should have an oucome of Spare for frame 4', function () {
      expect(this.scorecard.frames[3].rolls[0].outcome).toEqual('')
      expect(this.scorecard.frames[3].rolls[1].outcome).toEqual('Spare')
    })
    it('should have a score of 11 for frame 5', function () {
      expect(this.scorecard.frames[4].score).toEqual(11)
    })
    it('should have an oucome of Strike for frame 5', function () {
      expect(this.scorecard.frames[4].rolls[0].outcome).toEqual('Strike')
    })
    it('should have a score of 1 for frame 6', function () {
      expect(this.scorecard.frames[5].score).toEqual(1)
    })
    it('should have an oucome of Bad luck for frame 6', function () {
      expect(this.scorecard.frames[5].rolls[0].outcome).toEqual('Bad luck')
      expect(this.scorecard.frames[5].rolls[1].outcome).toEqual('')
    })
    it('should have a score of 16 for frame 7', function () {
      expect(this.scorecard.frames[6].score).toEqual(16)
    })
    it('should have an oucome of Spare for frame 7', function () {
      expect(this.scorecard.frames[6].rolls[0].outcome).toEqual('')
      expect(this.scorecard.frames[6].rolls[1].outcome).toEqual('Spare')
    })
    it('should have a score of 20 for frame 8', function () {
      expect(this.scorecard.frames[7].score).toEqual(20)
    })
    it('should have an oucome of Spare for frame 8', function () {
      expect(this.scorecard.frames[7].rolls[0].outcome).toEqual('')
      expect(this.scorecard.frames[7].rolls[1].outcome).toEqual('Spare')
    })
    it('should have a score of 20 for frame 9', function () {
      expect(this.scorecard.frames[8].score).toEqual(20)
    })
    it('should have an oucome of Strike for frame 9', function () {
      expect(this.scorecard.frames[8].rolls[0].outcome).toEqual('Strike')
    })
    it('should have a score of 16 for frame 10', function () {
      expect(this.scorecard.frames[8].score).toEqual(20)
    })
    it('should have an oucome of Spare for frame 10', function () {
      expect(this.scorecard.frames[9].rolls[0].outcome).toEqual('')
      expect(this.scorecard.frames[9].rolls[1].outcome).toEqual('Spare')
      expect(this.scorecard.frames[9].rolls[2].outcome).toEqual('')
    })
  })
})
