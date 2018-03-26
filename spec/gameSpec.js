'use strict';

describe('Game', function(){
  describe('a game with no specials', function(){
    it('initalises with a frame in play', function(){
      function MockFrame() {}
      MockFrame.prototype.nSet = function(n) {};
        MockFrame.prototype.isFinished = function() { return false }
      var game = new Game(MockFrame);
      expect(game.frames()[0] instanceof MockFrame).toEqual(true);
    });
    it('numbers frames', function(){
      function MockFrame() { this._n = 0 }
      MockFrame.prototype.nSet = function(n) { this._n = n };
      MockFrame.prototype.n = function() { return this._n };
      MockFrame.prototype.isFinished = function() { return false }
      var game = new Game(MockFrame);
      expect(game.frames()[0].n()).toEqual(1);
    });
    it('adds a new frame when previous is finished', function(){
      function MockFrame() {
        this._n = 0;
        this._responses = [true, false]
      }
      MockFrame.prototype.nSet = function(n) { this._n = n };
      MockFrame.prototype.isFinished = function() { return this._responses[this._n-1] }
      MockFrame.prototype.roll = function(score) {}
      var game = new Game(MockFrame);
      game.roll(2)
      expect(game.frames()[1] instanceof MockFrame).toEqual(true);
    });
    it('knows when it is finished', function(){
      function MockFrame() {
        this._i = 0
        this._responses = [true, false]
      }
      MockFrame.prototype.nSet = function(n) { };
      MockFrame.prototype.isFinished = function() {
        this._i++;
        return this._responses[this._i-1];
       }
      MockFrame.prototype.roll = function(score) {}
      var game = new Game(MockFrame);
      for (var i = 1; i <= 10; i++) { game.roll(2) };
      expect(game.isFinished()).toEqual(true);
    });
  });
});
