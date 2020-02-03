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
    it('gives the maximum number of rolls as 20',function(){
      expect(scorecard._rolls).toEqual(20)
    })
    it('gives the player a chance for two bonus rolls on 10th turn', function(){
      expect(scorecard._hasBonus).toEqual(true)
    })
  })

  describe('addPins', function(){
    it('adds a score to the scorecard',function(){
      scorecard.addPins(4)
      scorecard.addPins(3)
      expect(scorecard.getScorecard()).toContain(7)
    })
  })

  xdescribe('rollUpdate', function(){
    it('reduces rolls by 0.5 if not a strike', function(){
      scorecard.rollUpdate(4)
      expect(scorecard._rolls).toEqual(19)
    })
    it('reduces the max number of rolls by 1 if a strike is made', function(){
      scorecard.rollUpdate(10)
      expect(scorecard._rolls).toEqual(18)
    })
    it('gives 2 extra rolls if strike on penultimate roll', function(){
      for(let i = 0; i < 18; i++){ scorecard.addPins(0) }
      scorecard.addPins(10)
      expect(scorecard._rolls).toEqual(2)
      expect(scorecard._hasBonus).toBe(false)
    })
    it('strikes only reduce rolls by 1 in last two rolls', function(){
      for(let i = 0; i < 18; i++){ scorecard.addPins(0) }
      scorecard.addPins(10)
      scorecard.addPins(10)
      expect(scorecard._rolls).toEqual(1)
    })
    it('gives an extra roll if spare is thrown on final roll', function(){
      for(let i = 0; i < 18; i++){ scorecard.addPins(0) }
      scorecard.addPins(4)
      scorecard.addPins(6)
      expect(scorecard._rolls).toEqual(1)
    })
  })

  describe('isGameOver', function(){
    it('Ends game in simple case of no strikes or spares',function(){
      for(let i = 0; i < 20; i++){ scorecard.addPins(1) }
      expect(scorecard.isGameOver()).toEqual("You finished the Game!")
    })
  })

  describe('score', function(){
    it('scores the player zero if they roll a gutter game', function(){
      for(let i = 0; i < 19; i++){ scorecard.addPins(0)}
      expect(scorecard.addPins(0)).toEqual(0)
    })
    it('returns a score of 20 where 1 pin is knocked down every game', function(){
      for(let i=0; i < 19; i++){scorecard.addPins(1)}
      expect(scorecard.addPins(1)).toEqual(20)
    })
    it('can score a spare correctly',function(){
      scorecard.addPins(9)
      scorecard.addPins(1)
      scorecard.addPins(1)
      scorecard.addPins(1)
      expect(scorecard._Card).toEqual([11,2])
    })
    it('can score a strike correctly',function(){
      scorecard.addPins(10)
      scorecard.addPins(1)
      scorecard.addPins(1)
      expect(scorecard._Card).toEqual([12,2])
    })
    it('can score multiple strikes correctly', function(){
      scorecard.addPins(10)
      scorecard.addPins(10)
      scorecard.addPins(3)
      scorecard.addPins(5)
      expect(scorecard._Card).toEqual([23,18,8])
    })
  })
})