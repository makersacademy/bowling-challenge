'use strict'

// # pseudocode

// scorecard = new Scorecard()

// 20.times do
//   scorecard.roll(0)
// end

// assertEquals(scorecard.total(), 0)
// assertEquals(scorecard.isComplete(), true)

describe('Feature test', function(){
  let scorecard
  beforeEach(function(){
    scorecard = new Scorecard()
  })

  describe('gutter balls', function(){
    it('gives zero score', function(){
      for (var i = 0; i < 21; i++) {
        scorecard.roll(0)
      }
      expect(scorecard.total()).toEqual(0)
      expect(scorecard.isComplete()).toBe(true)
    })
  })

})