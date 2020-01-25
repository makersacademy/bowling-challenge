'use strict' 

describe('Scorecard', function(){
  var scorecard 


  beforeEach(function(){
    scorecard = new Scorecard
    })

  describe('Keeps scores in Array',function(){
    it('initializes as an empty array',function(){
      expect(scorecard.getScorecard()).toEqual([])
    })

    it('adds a score to the scorecard',function(){
      scorecard.addPins(7)
      expect(scorecard.getScorecard()).toContain(7)
    })
  })
})