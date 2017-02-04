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
      expect(bowling.score).toEqual([]);
    })
    it ('game initializes with rolls = []', function(){
      expect(bowling.rolls).toEqual([null,null]);
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
      expect(bowling.bonus).toEqual(["X"]);
    })

    it ('should return / from a half strike', function(){
      spyOn(Math,'random').and.returnValue(0.5);
      expect(bowling.play()).toEqual("5");
      expect(bowling.play()).toEqual("/");
      expect(bowling.bonus).toEqual(["/"]);
    })

    it ('should return 6 from hitting 3 pins then another 3 pins', function(){
      spyOn(Math,'random').and.returnValue(0.3);
      for (var i = 0; i < 2; i++){bowling.play()}
      expect(bowling.score).toEqual([6]);
      expect(bowling.rolls).toEqual([null,null]);
      expect(bowling.frame).toEqual(2);
    })

    it ('totalRolls should equal[[3,3],[3,3]] after knocking 3 pins 4 times]', function(){
      spyOn(Math,'random').and.returnValue(0.3);
      for (var i = 0; i < 4; i++){bowling.play()}
      expect(bowling.score).toEqual([6,6]);
      expect(bowling.totalRolls).toEqual([[3,3],[3,3]]);
    })

    it ('should have a score of [12,4] for knocking down spare then 2, 2', function(){
      spyOn(Math,'random').and.returnValue(0.5);
      for (var i = 0; i < 2; i++){bowling.play()}
      spyOn(bowling,'knockPins').and.returnValue(2)
      for (var i = 0; i < 2; i++){bowling.play()}
      expect(bowling.score).toEqual([12,4])
    })

    it ('should have a score of [14,4] for knocking down strike then 2, 2', function(){
      spyOn(Math,'random').and.returnValue(0.99);
      bowling.play()
      spyOn(bowling,'knockPins').and.returnValue(2)
      for (var i = 0; i < 2; i++){bowling.play()}
      expect(bowling.score).toEqual([14,4])
    })
  })
})

console.log("END OF: Jasmine Test: BowlingSpec")
