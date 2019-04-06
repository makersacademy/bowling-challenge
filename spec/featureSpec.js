'use strict'

describe('Feature test', function(){
  var scorecard
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


  describe('one frame game', function(){

    it('gives accumulative total score', function(){
      scorecard.roll(5)
      scorecard.roll(4)
      scorecard.roll(6)
      expect(scorecard.total()).toEqual(15)
      expect(scorecard.isComplete()).toBe(true)
    })
  })
  

})