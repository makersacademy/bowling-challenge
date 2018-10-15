var Frame = require('../src/frame.js')

describe('Frame', function () {
  beforeEach(function () {
    this.frame = new Frame()
  })

  describe('constructor', function () {
    it('should be incomplete', function () {
      expect(this.frame.complete).toEqual(false)
    })

    it('should have an empty roll array', function () {
      expect(this.frame.rolls).toEqual([])
    })

    it('should have a score of zero', function () {
      expect(this.frame.score).toEqual(0)
    })
  })

  describe('bowl', function () {
    describe('first bowl', function () {
      describe('knocks down 3 pins', function () {
        beforeEach(function () {
          this.frame.bowl(3)
        })

        it('should have one entry in the rolls array', function () {
          expect(this.frame.rolls.length).toEqual(1)
        })

        it('should record the number of pins knocked down', function () {
          expect(this.frame.rolls[0].pins).toEqual(3)
        })
      })

      describe('is a strike', function () {
        beforeEach(function () {
          this.frame.bowl(10)
        })

        it('should have one entry in the rolls array', function () {
          expect(this.frame.rolls.length).toEqual(1)
        })

        it('should record the number of pins knocked down', function () {
          expect(this.frame.rolls[0].pins).toEqual(10)
        })

        it('should have an outcome of Strike', function () {
          expect(this.frame.rolls[0].outcome).toEqual('Strike')
        })
      })
    })
  })
})
