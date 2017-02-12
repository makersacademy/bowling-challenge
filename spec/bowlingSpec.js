'use strict'

describe('Bowling', function(){
  var bowling;
  var player;
  var pins;

  beforeEach(function(){
    // player = new Player();
    // pins = new Pins();
    bowling = new Bowling();
  })

  describe('#initialize', function(){
    it ('game initializes with frame = 0', function(){
      expect(bowling.frame).toEqual(0);
    })
  })

  describe('Test random pins', function(){
    it ('game select random amount of pins to knock down', function(){
      spyOn(Math,'random').and.returnValue(0.1);
      bowling.play();
      expect(bowling.player.scoreCard).toContain([1,null])
    })
  })

  describe('Test one frame', function(){
    it ('allows you to play a normal frame', function(){
      bowling.play(2);
      bowling.play(3);
      expect(bowling.player.scoreCard).toContain([2,3])
      expect(bowling.player.score).toContain(5)
    })

    it ('allows you to play a frame with a strike', function(){
      bowling.play(10);
      expect(bowling.player.scoreCard).toContain([10,null])
      expect(bowling.player.score).toContain("X")
    })

    it ('allows you to play a frame with a spare', function(){
      bowling.play(2);
      bowling.play(8);
      expect(bowling.player.scoreCard).toContain([2,8])
      expect(bowling.player.score).toContain("/")
    })
  })

  describe('Test multiple frames', function(){
    it ('allows you to play a normal frame', function(){
      bowling.play(2);
      bowling.play(3);
      bowling.play(4);
      bowling.play(5);
      expect(bowling.player.scoreCard).toContain([2,3],[4,5])
      expect(bowling.player.score).toContain(5,9)
    })

    it ('allows you to play a frame with a strike', function(){
      bowling.play(10);
      bowling.play(1);
      bowling.play(1);
      expect(bowling.player.scoreCard).toContain([10,null],[1,1])
      expect(bowling.player.score).toContain(12,2)
    })

    it ('allows you to play a frame with a spare', function(){
      bowling.play(2);
      bowling.play(8);
      bowling.play(4);
      bowling.play(5);
      expect(bowling.player.scoreCard).toContain([2,8],[4,5])
      expect(bowling.player.score).toContain(14,9)
    })
  })

  describe('Test multiple strikes and spares', function(){
    it ('allows you to play a frame with multiple strikes and spares', function(){
      bowling.play(10);
      bowling.play(1);
      bowling.play(9);
      bowling.play(10);
      bowling.play(2);
      bowling.play(4);
      expect(bowling.player.scoreCard).toContain([10,null],[1,9],[10,null],[2,4])
      expect(bowling.player.score).toContain(20,29,16,6)
    })
  })

  describe('Test for perfect game (300 points)', function(){
    it ('allows you to play the perfect gane', function(){
      for (var i = 0; i <= 11; i++){bowling.play(10)}
      expect(bowling.player.scoreCard).toEqual([[10,null],[10,null],[10,null],[10,null],[10,null],[10,null],[10,null],[10,null],[10,null],[10,10,10],[null]])
      expect(bowling.player.score).toEqual([30,30,30,30,30,30,30,30,30,30])
    })
  })

  describe('Error handling', function(){
    it ('displays an error if you select a pin less than 0', function(){
      expect(function() {bowling.play(-1)}).toThrowError("Pin value should be >= 0");
    })

    it ('displays an error if you select a pin greater than 10', function(){
      expect(function() {bowling.play(22)}).toThrowError("Pin value should be <= 10");
    })

    it ('displays an error if you select two pins that combined are greater than 10', function(){
      bowling.play(9);
      expect(function() {bowling.play(2)}).toThrowError("Combined pin total should be <= 10");
    })

    it ('displays an error if you try and play after the game has finished', function(){
      for (var i = 0; i <= 11; i++){bowling.play(10)}
      expect(function() {bowling.play(2)}).toThrowError("Game Over");
    })
  })
})
