'use strict';

describe('Bowling', function(){
  var bowling;



  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('first throw', function(){
    it('they knocked down between on and ten pins', function() {

      expect(bowling.pinsKnockedOver()).toBeLessThan(11);
      expect(bowling.pinsKnockedOver()).not.toBeLessThan(0);
    });
  });

  describe('second throw', function() {
    it("checks that if they throw again the number of pins has decreased by the number knoecked down before", function(){
      bowling.pinsKnockedOver()
      bowling.check()
      expect(bowling.secondThrow).not.toBeGreaterThan(10 - bowling.pins)
    });
  });

  describe('reset', function(){
    it('completely empties the array', function(){
      bowling.pinsKnockedOver()
      bowling.check()
      bowling.pinsKnockedOver()
      bowling.check()
      bowling.pinsKnockedOver()
      bowling.check()
      bowling.pinsKnockedOver()
      bowling.check()
      bowling.pinsKnockedOver()
      bowling.check()
      bowling.pinsKnockedOver()
      bowling.check()
      bowling.pinsKnockedOver()
      bowling.check()
      bowling.pinsKnockedOver()
      bowling.check()
      bowling.pinsKnockedOver()
      bowling.check()
      bowling.pinsKnockedOver()
      bowling.check()
      bowling.pinsKnockedOver()
      bowling.check()
      bowling.settingRollsPerGame()
      expect(bowling.scores.length).toEqual(0)
    });
  });

  describe('Score per frame', function(){
    it('stores the total number of pins nocked over per frame', function(){
       bowling.pinsKnockedOver()
       bowling.check()
       expect(bowling.scores.length).toEqual(1)
    });
  });
});
