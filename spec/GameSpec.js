"use strict";

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  })

  describe('if strike', function(){
    it('10 points + next 2 shots', function(){
      var frame = new Frame();
      var frame2 = new Frame();
      frame.play(10);
      frame2.play(4);
      frame2.play(4);
      expect(game.score).toEqual(18);
    })
  })
})
