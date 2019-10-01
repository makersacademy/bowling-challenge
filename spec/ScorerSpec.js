describe('Scorer', function () {
  if (typeof (require) !== 'undefined') {
    Scorer = require('../src/Scorer')
  }

  beforeEach(function () {
    scorer = new Scorer ()
  })

  describe('Add one roll', function () {
    it('No frames are scored', function () {
      scorer.addRoll(0)
      expect(scorer.runningTotals).toEqual([])
    })
  })

  describe('Add a basic frame', function () {
    it('One frame is scored', function () {
      scorer.addRoll(0)
      scorer.addRoll(1)
      expect(scorer.runningTotals).toEqual([1])
    })
  })

  describe('Add a basic frame plus one roll', function () {
    it('One frame is scored', function () {
      scorer.addRoll(0)
      scorer.addRoll(1)
      scorer.addRoll(2)
      expect(scorer.runningTotals).toEqual([1])
    })
  })

  describe('Add two basic frames', function () {
    it('Two frames are scored', function () {
      scorer.addRoll(0)
      scorer.addRoll(1)
      scorer.addRoll(2)
      scorer.addRoll(3)
      expect(scorer.runningTotals).toEqual([1, 6])
    })
  })

  describe('Add a strike and one roll', function () {
    it('No frames are scored', function () {
      scorer.addRoll(10)
      scorer.addRoll(0)
      expect(scorer.runningTotals).toEqual([])
    })
  })

  describe('Add a strike and a basic frame', function () {
    it('Two frames are scored', function () {
      scorer.addRoll(10)
      scorer.addRoll(1)
      scorer.addRoll(1)
      expect(scorer.runningTotals).toEqual([12, 14])
    })
  })

  describe('Three strikes in a row', function () {
    it('One frame is scored', function () {
      scorer.addRoll(10)
      scorer.addRoll(10)
      scorer.addRoll(10)
      expect(scorer.runningTotals).toEqual([30])
    })
  })

  describe('A spare', function () {
    it('No frames are scored', function () {
      scorer.addRoll(5)
      scorer.addRoll(5)
      expect(scorer.runningTotals).toEqual([])
    })
  })

  describe('A spare and one more roll', function () {
    it('One frame is scored', function () {
      scorer.addRoll(5)
      scorer.addRoll(5)
      scorer.addRoll(5)
      expect(scorer.runningTotals).toEqual([15])
    })
  })

  describe('Final frame', function () {
    describe('Strike in the final frame', function () {
      it('It needs 2 more rolls to score', function () {
        for (var i = 0; i < 18; i ++) {
          scorer.addRoll(0)
        }
        scorer.addRoll(10)
        scorer.addRoll(0)
        expect(scorer.runningTotals.length).toBe(9)
        scorer.addRoll(0)
        expect(scorer.runningTotals.length).toBe(10)
      })
    })

    describe('Spare in the final frame', function () {
      it('It needs 1 more roll to score', function () {
        for (var i = 0; i < 18; i ++) {
          scorer.addRoll(0)
        }
        scorer.addRoll(5)
        scorer.addRoll(5)
        expect(scorer.runningTotals.length).toBe(9)
        scorer.addRoll(0)
        expect(scorer.runningTotals.length).toBe(10)
      })
    })

    describe('Basic frame in final frame', function () {
      it('Scores immediately', function () {
        for (var i = 0; i < 18; i ++) {
          scorer.addRoll(0)
        }
        scorer.addRoll(5)
        scorer.addRoll(3)
        expect(scorer.runningTotals.length).toBe(10)
      })
    })
  })
})
