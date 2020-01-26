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
      scorecard.addPins(7)
      expect(scorecard.getScorecard()).toContain(7)
    })
  })

  describe('rollUpdate', function(){
    it('reduces rolls by 0.5 if not a strike', function(){
      scorecard.rollUpdate(4)
      expect(scorecard._rolls).toEqual(19)
    })
    
    it('reduces the max number of rolls by 1 if a strike is made', function(){
      scorecard.rollUpdate('X')
      expect(scorecard._rolls).toEqual(18)
    })

    it('gives 2 extra rolls if strike on penultimate roll', function(){
      for(let i = 0; i < 18; i++){ scorecard.addPins(0) }
      scorecard.addPins("X")
      expect(scorecard._rolls).toEqual(2)
      expect(scorecard._hasBonus).toBe(false)
    })

    it('strikes only reduce rolls by 1 in last two rolls', function(){
      for(let i = 0; i < 18; i++){ scorecard.addPins(0) }
      scorecard.addPins("X")
      scorecard.addPins("X")
      expect(scorecard._rolls).toEqual(1)
    })

    it('gives an extra roll if spare is thrown on final roll', function(){
      for(let i = 0; i < 19; i++){ scorecard.addPins(0) }
      scorecard.addPins("/")
      expect(scorecard._rolls).toEqual(1)
    })
  })

  describe('isGameOver', function(){
    it('Ends game in simple case of no strikes or spares',function(){
      for(let i = 0; i < 20; i++){ scorecard.addPins(1) }
      expect(scorecard.isGameOver()).toEqual("You finished the Game!")
    })
  })
})