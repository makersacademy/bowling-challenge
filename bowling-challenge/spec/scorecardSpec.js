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

  describe('scoring a frame frame', function(){
    it('can enter the score for 2 balls', function(){
      scorecard.ball1(1);
      scorecard.ball2(2);
      expect(scorecard.score).toEqual(3)
    })
  })

  describe('playing a full game', function(){
    it('allows me to enter scores for 10 frames', function(){
      for (var i = 1; i <= 10; i++) {
        scorecard.ball1(1);
        scorecard.ball2(2);
      };
      expect(scorecard.score).toEqual(30)
    })
  })

})
