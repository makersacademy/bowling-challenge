'use strict';

describe('Game', function(){
  describe('a game with no specials', function(){
    it('initalises with a frame in play', function(){
      function MockFrame() {}
      var game = new Game(MockFrame);
      expect(game.frames()[0] instanceof MockFrame).toEqual(true);
    });
    it('adds scores to the newest frame when playing', function(){
      function MockFrame() {this._score}
      MockFrame.prototype.roll = function(number) {this._score = number}
      MockFrame.prototype.score = function() {return this._score}
      var game = new Game(MockFrame);
      game.roll(5);
      expect(game.frames()[0].score()).toEqual(5);
    });
    // it('tallies the score', function(){
    //   function MockFrame() {}
    //   MockFrame.prototype.score = function() { return 5 }
    //   var game = new Game(MockFrame);
    //   for (var i = 1; i <= 5; i++) { game.play() };
    //   expect(game.score()).toEqual(25);
    // });
    // it('knows when the game is over', function(){
    //   function MockFrame() {}
    //   var game = new Game(MockFrame);
    //   for (var i = 1; i <= 10; i++) { game.play() };
    //   expect(game.isOver()).toEqual(true);
    // });
  });
});
