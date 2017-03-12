'use strict';

describe('Game', function() {

    var game;

    var bowlMany = function(n, pins) {
        for (var i = 0; i < n; i++) {
            game.bowl(pins)
        }
    }

    var bowlSpare = function() {
        game.bowl(5);
        game.bowl(5);
    }

    var bowlStrike = function() {
        game.bowl(10);
    }

    beforeEach(function() {
        game = new Game();
        game.start();
    });

    describe('game fundamentals', function() {

      it("handles one strike", function() {
          bowlStrike();
          game.bowl(3);
          game.bowl(4);
          bowlMany(16, 0);
          expect(game.score()).toEqual(24);
      });

      it('starts on frame 1', function() {
          expect(game._currentFrame).toEqual(1);
      });

      it('allows the player to bowl', function() {
          expect(game.bowl).not.toBeUndefined(); //TODO make a better test using spyOnObj
      });

      it('records the end of each frame', function() {
          game.bowl(7);
          game.bowl(2)
          expect(game.bowl(2)).toEqual(game.nextFrame());
      });

      it('records the scores of each frame', function() {
          game.bowl(7);
          game.bowl(2);
          expect(game.score()).toBe(9);
      });

    });

    describe('game mechanics', function() {

      it('handles a perfect game', function() {
          bowlMany(12, 10);
          expect(game.score()).toEqual(300);
      });

      it("handles all ones", function() {
          bowlMany(20, 1);
          expect(game.score()).toEqual(20);
      });

      it("handles gutter game", function() {
          bowlMany(20, 0);
          expect(game.score()).toEqual(0);
      });

      it("handles all ones", function() {
          bowlMany(20, 1);
          expect(game.score()).toEqual(20);
      });

      it("handles one spare", function() {
          bowlSpare();
          game.bowl(3);
          game.bowl(0);
          bowlMany(16, 0);
          expect(game.score()).toEqual(16);
      });

    });

    describe('game ending', function() {

      it('doesn\'t allow the user to bowl once the game has ended', function() {
          bowlMany(20, 1);
          expect(game.bowl(1)).toEqual("The game has ended");
      });

    });

});
