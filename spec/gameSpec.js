'use strict';

describe('Game', function(){

  var game;
  function MockFrame() {
    this._n = 0;
    this._i = 0;
    this._responses = [true, false];
    this._responses2 = [false, true];
  };
  MockFrame.prototype.nSet = function(n) { this._n = n };
  MockFrame.prototype.n = function() { return this._n };
  MockFrame.prototype.roll = function(score) {};
  MockFrame.prototype.score = function() {return 1};

  beforeEach(function() {
     game = new Game(MockFrame);
  });

  describe('a game', function(){
    it('initalises with a frame in play', function(){
      expect(game.frames()[0] instanceof MockFrame).toEqual(true);
    });
    it('numbers frames', function(){
      MockFrame.prototype.isFinished = function() { return false };
      expect(game.frames()[0].n()).toEqual(1);
    });
    it('adds a new frame when previous is finished', function(){
      MockFrame.prototype.isFinished = function() {
        return this._responses[this._n-1]
      }
      game.roll(2)
      expect(game.frames()[1] instanceof MockFrame).toEqual(true);
    });
    it('tallies a score', function(){
      MockFrame.prototype.isFinished = function() {
        return this._responses[this._n-1]
      }
      for (var i = 1; i < 5; i++) { game.roll(2) };
      var score = game.score();
      game.roll(2);
      expect(game.score()).toEqual(score);
    });
    it('knows when it is finished', function(){
      MockFrame.prototype.isFinished = function() {
        this._i++;
        return this._responses2[this._i-1];
       }
      for (var i = 1; i <= 20; i++) { game.roll(2) };
      expect(game.isFinished()).toEqual(true);
    });
    it('will not allow more rolls when it is finished', function(){
      MockFrame.prototype.isFinished = function() {
        this._i++;
        return this._responses2[this._i-1];
       }
      for (var i = 1; i <= 20; i++) { game.roll(2) };
      var score = game.score();
      game.roll(2);
      expect(game.score()).toEqual(score);
    });
  });
});
