'use strict'

describe ('Game', function() {
  var game;

  beforeEach(function(){
      game = new Game();
  });

    it ('shows the score of first roll', function (){
      var random = Math.floor(Math.random() * 11);
      console.log(random)
      expect(game.roll(random)).toEqual([random]);
    })

    it ('shows the score of the second roll', function (){
      var randomRoll1 = Math.floor(Math.random() * 11);
      console.log(randomRoll1)
      var randomRoll2 = Math.floor(Math.random() * 11);
      console.log(randomRoll2)
      game.roll(randomRoll1)
      expect(game.roll(randomRoll2)).toEqual([randomRoll1,randomRoll2]);
    })

    it ('inserts the finished frame to the allFrames with limited two rolls in one frame', function(){
      game.roll(0)
      game.roll(0)
      console.log(game.frame)
      expect(game.finishFrame()).toEqual([[0,0]])
    })


    it ('inserts the finished frame to the allFrames and allows to play two frames', function(){
      game.roll(0)
      game.roll(0)
      game.roll(7)
      game.roll(0)
      console.log(game.frame)
      expect(game.finishFrame()).toEqual([[0,0], [7,0]])
    })

    it ('inserts the points from the Gutter Game', function() {
      game.roll(0)
      game.roll(0)
      game.roll(0)
      game.roll(0)
      game.roll(0)
      game.roll(0)
      game.roll(0)
      game.roll(0)
      game.roll(0)
      game.roll(0)
      game.roll(0)
      game.roll(0)
      game.roll(0)
      game.roll(0)
      game.roll(0)
      game.roll(0)
      game.roll(0)
      game.roll(0)
      game.roll(0)
      game.roll(0)
      console.log(game.allFrames)
      expect(game.finishFrame()).toEqual([[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]])
    })

    it ('shows the score of the bowling game', function (){
      game.roll(8)
      game.roll(8)
      game.roll(8)
      game.finishFrame()
      expect(game.getTotalScore()).toEqual(24);
    })
});
