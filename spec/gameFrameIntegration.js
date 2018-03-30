'use strict';

describe ('game and frame integrated' , function(){
  var game;
  beforeEach(function(){
    game = new Game(Frame)
  });
  describe('a perfect game', function(){
    it ('knows the score is 300', function(){
      for (var i = 1; i <= 12; i++) { game.roll(10) };
      expect(game.score()).toEqual(300);
    });
    it ('knows it is finished', function(){
      for (var i = 1; i <= 12; i++) { game.roll(10) };
      expect(game.isFinished()).toEqual(true);
    });
  });

  describe('a game with no specials', function(){
    it ('knows the score', function(){
      for (var i = 1; i <= 20; i++) { game.roll(4) };
      expect(game.score()).toEqual(80);
    });
    it ('knows it is finished', function(){
      for (var i = 1; i <= 20; i++) { game.roll(4) };
      expect(game.isFinished()).toEqual(true);
    });
  })
});
