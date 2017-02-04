'use strict';

describe('bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  })

  describe('#initialize', function() {
    it ('game initializes with frame = 1', function(){
      expect(bowling.frame).toEqual(1);
    })
    it ('game initializes with score = 0', function(){
      expect(bowling.score).toEqual(0);
    })
    it ('game initializes with rolls = []', function(){
      expect(bowling.rolls).toEqual([]);
    })
    it ('game initializes with totalRolls = []', function(){
      expect(bowling.totalRolls).toEqual([]);
    })
    it ('game initializes with bonus = []', function(){
      expect(bowling.bonus).toEqual([]);
    })
  })

  describe('Game outcomes', function() {
    it ('should return 1 from hitting 1 pin', function(){
      spyOn(Math,'random').and.returnValue(0.1);
      expect(bowling.play()).toEqual("1");
    })
    it ('should return X from a strike', function(){
      spyOn(Math,'random').and.returnValue(0.99);
      expect(bowling.play()).toEqual("X");
    })
    it ('should return / from a half strike', function(){
      spyOn(Math,'random').and.returnValue(0.5);
      expect(bowling.play()).toEqual("5");
      expect(bowling.play()).toEqual("/");
    })
    it ('should return 6 from hitting 3 then 3 pins', function(){
      spyOn(Math,'random').and.returnValue(0.3);
      expect(bowling.play()).toEqual("3");
      expect(bowling.play()).toEqual("3");
      // expect(bowling.score).toEqual(6);
      expect(bowling.rolls).toEqual([]);
      expect(bowling.frame).toEqual(2);
    })
    it ('totalRolls should equal[[3,3],[3,3]] after knocking 3 pins 4 times]', function(){
      spyOn(Math,'random').and.returnValue(0.3);
      expect(bowling.play()).toEqual("3");
      expect(bowling.play()).toEqual("3");
      expect(bowling.play()).toEqual("3");
      expect(bowling.play()).toEqual("3");
      expect(bowling.totalRolls).toEqual([[3,3],[3,3]]);
    })
  })
})

console.log("END OF: Jasmine Test: BowlingSpec")
