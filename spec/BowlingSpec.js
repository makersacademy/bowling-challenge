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
      expect(bowling.score).toEqual([0,0,0,0,0,0,0,0,0,0,0]);
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
    xit ('should return 1 from hitting 1 pin', function(){
      spyOn(Math,'random').and.returnValue(0.1);
      expect(bowling.play()).toEqual("1");
    })

    xit ('should return X from a strike', function(){
      spyOn(Math,'random').and.returnValue(0.99);
      expect(bowling.play()).toEqual("X");
      expect(bowling.bonus).toEqual(["X"]);
    })

    xit ('should return / from a half strike', function(){
      spyOn(Math,'random').and.returnValue(0.5);
      expect(bowling.play()).toEqual("5");
      expect(bowling.play()).toEqual("/");
      expect(bowling.bonus).toEqual(["/"]);
    })

    xit ('should return 6 from hitting 3 pins then another 3 pins', function(){
      spyOn(Math,'random').and.returnValue(0.3);
      for (var i = 0; i < 2; i++){bowling.play()}
      expect(bowling.score).toEqual([0,6,0,0,0,0,0,0,0,0,0]);
      expect(bowling.rolls).toEqual([null,null]);
      expect(bowling.frame).toEqual(2);
    })

    xit ('totalRolls should equal[[3,3],[3,3]] after knocking 3 pins 4 times]', function(){
      spyOn(Math,'random').and.returnValue(0.3);
      for (var i = 0; i < 4; i++){bowling.play()}
      expect(bowling.score).toEqual([0,6,6,0,0,0,0,0,0,0,0]);
      expect(bowling.totalRolls).toEqual([[3,3],[3,3]]);
    })

    xit ('should have a score of [12,4] for knocking down spare then 2, 2', function(){
      spyOn(Math,'random').and.returnValue(0.5);
      for (var i = 0; i < 2; i++){bowling.play()}
      spyOn(bowling,'knockPins').and.returnValue(2)
      for (var i = 0; i < 2; i++){bowling.play()}
      expect(bowling.score).toEqual([0,12,4,0,0,0,0,0,0,0])
    })

    xit ('should have a score of [14,4] for knocking down strike then 2, 2', function(){
      spyOn(Math,'random').and.returnValue(0.99);
      bowling.play()
      spyOn(bowling,'knockPins').and.returnValue(2)
      for (var i = 0; i < 2; i++){bowling.play()}
      expect(bowling.score).toEqual([0,14,4,0,0,0,0,0,0,0,0])
    })

    xit ('should have a score of [15,12,4] for knocking down spare, spare then 2, 2', function(){
      spyOn(Math,'random').and.returnValue(0.5);
      for (var i = 0; i < 4; i++){bowling.play()}
      spyOn(bowling,'knockPins').and.returnValue(2)
      for (var i = 0; i < 2; i++){bowling.play()}
      expect(bowling.score).toEqual([0,15,12,4,0,0,0,0,0,0,0])
    })

    xit ('should have a score of [20,14,4] for knocking down strike, strike then 2, 2', function(){
      spyOn(Math,'random').and.returnValue(0.99);
      bowling.play()
      bowling.play()
      spyOn(bowling,'knockPins').and.returnValue(2)
      for (var i = 0; i < 2; i++){bowling.play()}
      expect(bowling.score).toEqual([0,20,14,4])
    })

    xit ('should calculate the perfect game of 300 points', function(){
      spyOn(Math,'random').and.returnValue(0.99);
      for (var i = 0; i < 12; i++){bowling.play()}
      expect(bowling.score).toEqual([20,14,4])
    })
  })

  describe('Test Game', function() {
    it ('should return set vales', function(){
      // Frame 1
      bowling.play(10)
      // bowling.play(4)
      expect(bowling.score).toEqual([0,0,0,0,0,0,0,0,0,0,0])
      // Frame 2
      bowling.play(10)
      // bowling.play(5)
      expect(bowling.score).toEqual([0,0,0,0,0,0,0,0,0,0,0])
      // Frame 3
      bowling.play(10)
      // bowling.play(4)
      expect(bowling.score).toEqual([0,0,0,0,0,0,0,0,0,0,0])
      // Frame 4
      bowling.play(2)
      bowling.play(2)
      expect(bowling.score).toEqual([0,30,60,82,96,100,0,0,0,0,0])
      // // Frame 5
      // bowling.play(10)
      // expect(bowling.score).toEqual([0,5,14,26,30,0,0,0,0,0,0])
      // // Frame 6
      // bowling.play(2)
      // bowling.play(2)
      // expect(bowling.score).toEqual([0,5,14,26,30,44,48,0,0,0,0])
      // // Frame 7
      // bowling.play(2)
      // bowling.play(2)
      // expect(bowling.score).toEqual([0,5,14,12,4,0,0,0,0,0,0])
    })
  })
})

console.log("END OF: Jasmine Test: BowlingSpec")
