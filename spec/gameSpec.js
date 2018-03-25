'use strict';

describe('Game', function(){
  describe('a game with no specials', function(){
    it('allows frames to be added', function(){
      var mockFrame = 'frame';
      var game = new Game;
      game.addFrame(mockFrame);
      expect(game.frames()).toContain(mockFrame);
    });
    it('tallies the score', function(){
      var mockFrame = { score() { return 5 } };
      var game = new Game;
      for (var i = 1; i <= 5; i++) { game.addFrame(mockFrame) };
      expect(game.score()).toEqual(25);
    });
    it('knows when the game is over', function(){
      var mockFrame = 'frame';
      var game = new Game;
      for (var i = 1; i <= 10; i++) { game.addFrame(mockFrame) };
      expect(game.isOver()).toEqual(true);
    });
  });
});
