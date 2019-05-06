'use strict'

describe('scorecard', function() {

  var scorecard

  beforeEach(function(){
    scorecard = new Scorecard()
  })

  describe('gutter game', function(){
    it('ends game', function() {
      expect(scorecard.over).toBe(true)
    })
    it('with a score of 0', function() {
      expect(scorecard.score).toEqual(0)
    })
  })

  describe('entering 2 balls per frame', function(){
    it('can enter 2 scores', function(){
      scorecard.ball1(1);
      scorecard.ball2(2);
      expect(scorecard.score).toEqual(3)
    })
  })

})
