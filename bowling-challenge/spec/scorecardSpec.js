'use strict'

describe('scorecard', function(){

  var scorecard

  beforeEach(function(){
    scorecard = new Scorecard()
  })

  describe('gutter game', function(){
    it('ends game', function(){
      for (var i = 1; i <= 10; i++) {
        scorecard.ball1(0);
        scorecard.ball2(0);
      };

      expect(scorecard.isOver()).toBe(true)
    })
    it('with a score of 0', function(){
      for (var i = 1; i <= 10; i++) {
        scorecard.ball1(0);
        scorecard.ball2(0);
      };
      expect(scorecard.totalScore()).toEqual(0)
    })
  })

  describe('scoring a frame', function(){
    it('can enter the score for 2 balls', function(){
      scorecard.ball1(1);
      scorecard.ball2(2);
      expect(scorecard.totalScore()).toEqual(3)
    })
  })

  describe('playing a full game', function(){
    it('allows me to enter scores for 10 frames', function(){
      for (var i = 1; i <= 10; i++) {
        scorecard.ball1(1);
        scorecard.ball2(2);
      };
      expect(scorecard.totalScore()).toEqual(30)
    })
  })

describe('viewing frame scores', function(){
  it('correctly calculates the score for each frame', function(){
    scorecard.ball1(7);
    scorecard.ball2(1);
    scorecard.ball1(3);
    scorecard.ball2(4);
    scorecard.ball1(3);
    scorecard.ball2(6);
    expect(scorecard.frameScores[0]).toEqual(8);
    expect(scorecard.frameScores[1]).toEqual(7);
    expect(scorecard.frameScores[2]).toEqual(9);
  })
})

  describe('calculating the bonus for spares', function(){
    it('adds the next ball to my frame score', function(){
      scorecard.ball1(5);
      scorecard.ball2(5);
      scorecard.ball1(5);
      scorecard.ball2(4);
      expect(scorecard.totalScore()).toEqual(24)
    })
    it('applies the spare bonus correctly over multiple frames', function(){
      for (var i = 1; i <= 5; i++) {
        scorecard.ball1(5);
        scorecard.ball2(5);
      };
      expect(scorecard.totalScore()).toEqual(70)
    })
  })

  describe('calculating the bonus for strikes', function(){
    it('adds the next 2 balls to my frame score', function(){
      scorecard.ball1(10);
      scorecard.ball2(0);
      scorecard.ball1(5);
      scorecard.ball2(4);
      expect(scorecard.totalScore()).toEqual(28)
    })
    it('applies the strike bonus correctly over multiple frames', function(){
      for (var i = 1; i <= 5; i++) {
        scorecard.ball1(10);
        scorecard.ball2(0);
      };
      expect(scorecard.totalScore()).toEqual(120)
    })
  })

  describe('scoring the perfect game', function(){
    it('calculates the score of a perfect game to be 300', function(){
      for (var i = 1; i <= 9; i++) {
        scorecard.ball1(10);
        scorecard.ball2(0);
      };
      scorecard.ball1(10);
      scorecard.ball2(10);
      scorecard.ball3(10);
      expect(scorecard.totalScore()).toEqual(300)
    })
  })

  describe('scoring an average game', function(){
    it('calculates the score of my average game to be 115', function(){
      scorecard.ball1(6);
      scorecard.ball2(2);
      scorecard.ball1(8);
      scorecard.ball2(0);
      scorecard.ball1(6);
      scorecard.ball2(4);
      scorecard.ball1(10);
      scorecard.ball2(0);
      scorecard.ball1(3);
      scorecard.ball2(4);
      scorecard.ball1(7);
      scorecard.ball2(0);
      scorecard.ball1(10);
      scorecard.ball2(0);
      scorecard.ball1(4);
      scorecard.ball2(4);
      scorecard.ball1(9);
      scorecard.ball2(0);
      scorecard.ball1(6);
      scorecard.ball2(4);
      scorecard.ball3(3);
      expect(scorecard.totalScore()).toEqual(115)
    })
  })

  describe('scoring an average game', function(){
    it('calculates the score of another average game to be 111', function(){
      scorecard.ball1(6);
      scorecard.ball2(2);
      scorecard.ball1(8);
      scorecard.ball2(0);
      scorecard.ball1(6);
      scorecard.ball2(4);
      scorecard.ball1(10);
      scorecard.ball2(0);
      scorecard.ball1(3);
      scorecard.ball2(4);
      scorecard.ball1(7);
      scorecard.ball2(0);
      scorecard.ball1(10);
      scorecard.ball2(0);
      scorecard.ball1(4);
      scorecard.ball2(4);
      scorecard.ball1(9);
      scorecard.ball2(0);
      scorecard.ball1(6);
      scorecard.ball2(3);
      expect(scorecard.totalScore()).toEqual(111)
    })
  })

})

// console.log()
