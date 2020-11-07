'use strict';

describe('feature tests', function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('when there are no strikes or spares', function(){
    it('can score several frames correctly', function(){
      scorecard.roll(5)
      scorecard.roll(2)
      scorecard.roll(4)
      scorecard.roll(1)
      scorecard.roll(3)
      scorecard.roll(6)
      expect(scorecard.calculateScore()).toEqual(21)
    });

    it('can score a full game correctly', function(){
      scorecard.roll(5)
      scorecard.roll(2)
      scorecard.roll(2)
      scorecard.roll(3)
      scorecard.roll(3)
      scorecard.roll(4)
      scorecard.roll(6)
      scorecard.roll(2)
      scorecard.roll(1)
      scorecard.roll(6)
      scorecard.roll(1)
      scorecard.roll(2)
      scorecard.roll(4)
      scorecard.roll(3)
      scorecard.roll(7)
      scorecard.roll(1)
      scorecard.roll(2)
      scorecard.roll(1)
      scorecard.roll(2)
      scorecard.roll(1)
      expect(scorecard.calculateScore()).toEqual(58)
    });

  });

  describe('when there are spares, but not on the final frame', function(){
    it('can score a full game correctly', function(){
      scorecard.roll(5)
      scorecard.roll(2)
      scorecard.roll(2)
      scorecard.roll(3)
      scorecard.roll(3)
      scorecard.roll(4)
      scorecard.roll(6)
      scorecard.roll(2)
      scorecard.roll(1)
      scorecard.roll(6)
      scorecard.roll(1)
      scorecard.roll(2)
      scorecard.roll(4)
      scorecard.roll(3)
      scorecard.roll(7)
      scorecard.roll(1)
      scorecard.roll(2)
      scorecard.roll(8)
      scorecard.roll(2)
      scorecard.roll(1)
      expect(scorecard.calculateScore()).toEqual(67)
    })
  })

  describe('when there are spares and strikes, but not on the final frame', function(){
    it('can score a full game correctly', function(){
      scorecard.roll(10)
      scorecard.roll(2)
      scorecard.roll(3)
      expect(scorecard.calculateScore()).toEqual(20)
      scorecard.roll(3)
      scorecard.roll(4)
      scorecard.roll(6)
      scorecard.roll(2)
      scorecard.roll(1)
      scorecard.roll(6)
      scorecard.roll(1)
      scorecard.roll(2)
      scorecard.roll(4)
      scorecard.roll(3)
      scorecard.roll(7)
      scorecard.roll(1)
      scorecard.roll(2)
      scorecard.roll(8)
      scorecard.roll(2)
      scorecard.roll(1)
      expect(scorecard.calculateScore()).toEqual(75)
    })
  })

})
