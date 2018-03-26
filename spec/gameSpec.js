'use strict';

describe('Game', function(){
  describe('a game with no specials', function(){
    it('initalises with a frame in play', function(){
      function MockFrame() {}
      MockFrame.prototype.nSet = function(n) {};
      var game = new Game(MockFrame);
      expect(game.frames()[0] instanceof MockFrame).toEqual(true);
    });
    it('numbers frames', function(){
      function MockFrame() { this._n = 0 }
      MockFrame.prototype.nSet = function(n) { this._n = n };
      MockFrame.prototype.n = function() { return this._n };
      var game = new Game(MockFrame);
      expect(game.frames()[0].n()).toEqual(1);
    });
  });
});
