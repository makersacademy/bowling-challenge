'use strict';

describe ('Game and Frame integration' , function(){
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

  describe ('a gutter game', function(){
    it ('knows the score is zero', function(){
      for (var i = 1; i <= 20; i++) { game.roll(0) };
      expect(game.score()).toEqual(0);
    });
    it ('knows it is finished', function(){
      for (var i = 1; i <= 20; i++) { game.roll(0) };
      expect(game.isFinished()).toEqual(true);
    });
  });

  describe('a game with no specials', function(){
    it ('knows the score is 80', function(){
      for (var i = 1; i <= 20; i++) { game.roll(4) };
      expect(game.score()).toEqual(80);
    });
    it ('knows it is finished', function(){
      for (var i = 1; i <= 20; i++) { game.roll(4) };
      expect(game.isFinished()).toEqual(true);
    });
  })

  describe ('a 163 point game with specials', function(){
    it ('knows the score is 163', function(){
      var gamerolls = [10, 8, 1, 10, 10, 7, 3, 5, 3, 0, 6, 10, 7, 3, 10, 8, 1]
      gamerolls.forEach(function(roll) { game.roll(roll) });
      expect(game.score()).toEqual(163);
    });
    it ('knows it is finished', function(){
      var gamerolls = [10, 8, 1, 10, 10, 7, 3, 5, 3, 0, 6, 10, 7, 3, 10, 8, 1]
      gamerolls.forEach(function(roll) { game.roll(roll) });
      expect(game.isFinished()).toEqual(true);
    });
  });
});
