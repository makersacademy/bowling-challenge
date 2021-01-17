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
      scorecard.roll(10)
      scorecard.roll(1)
      scorecard.roll(6)
      scorecard.roll(1)
      scorecard.roll(2)
      scorecard.roll(4)
      scorecard.roll(3)
      scorecard.roll(7)
      scorecard.roll(3)
      scorecard.roll(2)
      scorecard.roll(8)
      scorecard.roll(2)
      scorecard.roll(1)
      expect(scorecard.calculateScore()).toEqual(88)
    })
  })

  describe('when every roll is a gutter ball', function(){
    it('can score a full game correctly', function(){
      scorecard.roll(0)
      scorecard.roll(0)
      scorecard.roll(0)
      scorecard.roll(0)
      expect(scorecard.calculateScore()).toEqual(0)
      scorecard.roll(0)
      scorecard.roll(0)
      scorecard.roll(0)
      scorecard.roll(0)
      scorecard.roll(0)
      scorecard.roll(0)
      scorecard.roll(0)
      scorecard.roll(0)
      scorecard.roll(0)
      scorecard.roll(0)
      scorecard.roll(0)
      scorecard.roll(0)
      scorecard.roll(0)
      scorecard.roll(0)
      scorecard.roll(0)
      scorecard.roll(0)
      expect(scorecard.calculateScore()).toEqual(0)
    })
  })

  describe('when there is a spare on the final frame', function(){
    it('can score a full game correctly', function(){
      scorecard.roll(10)
      scorecard.roll(2)
      scorecard.roll(3)
      scorecard.roll(3)
      scorecard.roll(4)
      scorecard.roll(10)
      scorecard.roll(1)
      scorecard.roll(6)
      scorecard.roll(1)
      scorecard.roll(2)
      scorecard.roll(4)
      scorecard.roll(3)
      scorecard.roll(7)
      scorecard.roll(3)
      scorecard.roll(2)
      scorecard.roll(8)
      scorecard.roll(8)
      scorecard.roll(2)
      scorecard.roll(2)
      expect(scorecard.calculateScore()).toEqual(103)
    })
  })

  describe('when there is a strike on the final frame', function(){
    it('can score a full game correctly', function(){
      scorecard.roll(10)
      scorecard.roll(2)
      scorecard.roll(3)
      scorecard.roll(3)
      scorecard.roll(4)
      scorecard.roll(10)
      scorecard.roll(1)
      scorecard.roll(6)
      scorecard.roll(1)
      scorecard.roll(2)
      scorecard.roll(4)
      scorecard.roll(3)
      scorecard.roll(7)
      scorecard.roll(3)
      scorecard.roll(2)
      scorecard.roll(8)
      scorecard.roll(10)
      scorecard.roll(2)
      scorecard.roll(2)
      expect(scorecard.calculateScore()).toEqual(107)
    })
  })

  describe('when the player bowls a perfect game', function(){
    it('can score a full game correctly', function(){
      scorecard.roll(10)
      scorecard.roll(10)
      scorecard.roll(10)
      scorecard.roll(10)
      scorecard.roll(10)
      scorecard.roll(10)
      scorecard.roll(10)
      scorecard.roll(10)
      scorecard.roll(10)
      scorecard.roll(10)
      scorecard.roll(10)
      scorecard.roll(10)
      expect(scorecard.calculateScore()).toEqual(300)
    })
  })

  describe('when the player tries to cheat by entering more a score greater than the available number of pins', function(){
    it('raises an error', function(){
      scorecard.roll(5)
      expect(() => scorecard.roll(7)).toThrow("CHEATER ALERT!!! PLEASE INPUT A SCORE EQUAL TO OR LOWER THAN THE NUMBER OF AVAILABLE PINS")
    })
  })

})
