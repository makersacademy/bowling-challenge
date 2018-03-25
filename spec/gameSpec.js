'use strict';

describe('Game', function(){
  describe('a game with no specials', function(){
    it('creates frames when .play is called', function(){
      function MockFrame() {}
      var game = new Game(MockFrame);
      game.play();
      expect(game.frames()[0] instanceof MockFrame).toEqual(true);
    });
    it('tallies the score', function(){
      function MockFrame() {}
      MockFrame.prototype.score = function() { return 5 }
      var game = new Game(MockFrame);
      for (var i = 1; i <= 5; i++) { game.play() };
      expect(game.score()).toEqual(25);
    });
    it('knows when the game is over', function(){
      function MockFrame() {}
      var game = new Game(MockFrame);
      for (var i = 1; i <= 10; i++) { game.play() };
      expect(game.isOver()).toEqual(true);
    });
  });
});
