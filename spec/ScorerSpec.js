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

})
