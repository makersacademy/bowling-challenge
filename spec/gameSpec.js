'use strict';

describe('Game', function(){
  describe('a game with no specials', function(){
    it('initalises with a frame in play', function(){
      function MockFrame() {}
      MockFrame.prototype.nSet = function(n) {};
      var game = new Game(MockFrame);
      expect(game.frames()[0] instanceof MockFrame).toEqual(true);
    });
    it('adds scores to the newest frame when playing', function(){
      function MockFrame() { this._score }
      MockFrame.prototype.nSet = function(n) {};
      MockFrame.prototype.roll = function(number) {this._score = number};
      MockFrame.prototype.score = function() {return this._score};
      var game = new Game(MockFrame);
      game.roll(5);
      expect(game.frames()[0].score()).toEqual(5);
    });
    it('starts a new frame when the current one returns a response string', function(){
      function MockFrame () { this.i = 1; this.responses = [1, 2, 'a string'] }
      MockFrame.prototype.nSet = function(n) {};
      MockFrame.prototype.roll = function(number) { this.i++; return this.responses[this.i-1]}
      var game = new Game(MockFrame);
      game.roll(1)
      game.roll(1)
      game.roll(1)
      expect(game.frames().length).toEqual(2)
    });
    it('tallies the score', function(){
      function MockFrame() {}
      MockFrame.prototype.nSet = function(n) {};
      MockFrame.prototype.roll = function() { };
      MockFrame.prototype.score = function() { return 5 };
      var game = new Game(MockFrame);
      game.roll(5);
      expect(game.score()).toEqual(5);
    });
    it('numbers frames', function(){
        function MockFrame () {
          this.i = 1; this.responses = [1, 2, 'a string'];
          this._n;
         }
      MockFrame.prototype.nSet = function(n) {};
      MockFrame.prototype.roll = function(number) { this.i++; return this.responses[this.i-1]}
      MockFrame.prototype.nSet = function(n) { this._n = n };
      MockFrame.prototype.n = function() { return this._n };
      var game = new Game(MockFrame);
      game.roll(1)
      game.roll(1)
      expect(game.frames()[1].n()).toEqual(2);
    });
  });
});
