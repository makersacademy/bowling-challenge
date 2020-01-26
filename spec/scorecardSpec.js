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
  })

  describe('addPins', function(){
    it('adds a score to the scorecard',function(){
      scorecard.addPins(7)
      expect(scorecard.getScorecard()).toContain(7)
    })

    it('reduces rolls by 0.5 if not a strike', function(){
      scorecard.addPins(4)
      expect(scorecard._rolls).toEqual(19)
    })
    
    it('reduces the max number of rolls by 1 if a strike is made', function(){
      scorecard.addPins('X')
      expect(scorecard._rolls).toEqual(18)
    })
  })

  describe('gameLimit', function(){
    
    xit('Removes a turn if a strike is made past first turn', function(){
      scorecard.addPins(1)
      scorecard.addPins(3)
      scorecard.addPins('X')
      console.log(scorecard._Card[-1])
      scorecard.gameLimit()
      expect(scorecard._rolls).toEqual(19)
    })
    xit('Removes a turn if a strike is make on the first roll', function(){
      scorecard.addPins('X')
      scorecard.gameLimit()
      expect(scorecard._rolls).toEqual(19)
    })
  })

  describe('isGameOver', function(){
    it('Ends game in simple case of no strikes or spares',function(){
      for(let i = 0; i < 20; i++){
        scorecard.addPins(1)
      }
      expect(scorecard.isGameOver()).toEqual("You finished the Game!")
    })
  })
})