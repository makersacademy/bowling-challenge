'use strict';

describe('Game', function(){

    var game;

    beforeEach(function(){
      game = new Game();
    });

    it('can calculate the score of a gutter game', function(){
      for (var i = 0; i < 20; i++) {
      game.roll(0) };
      expect(game.score()).toBe(0);
    });

    it('can calculate the score where only 2s are rolled', function(){
      for (var i = 0; i < 20; i++) {
        game.roll(2) };
        expect(game.score()).toBe(40);
    });

    it('can calculate the score of a game with no spares or strikes', function() {
      game.roll(2);
      game.roll(5);
      game.roll(3);
      game.roll(4);
      game.roll(4);
      game.roll(2);
      game.roll(5);
      game.roll(4);
      game.roll(4);
      game.roll(4);
      game.roll(2);
      game.roll(5);
      game.roll(3);
      game.roll(4);
      game.roll(4);
      game.roll(2);
      game.roll(5);
      game.roll(4);
      game.roll(4);
      game.roll(4);
      expect(game.score()).toBe(74)
    });

    it('can calculate the score of a game with spares', function() {
      game.roll(2);
      game.roll(2);
      game.roll(5);
      game.roll(5);
      game.roll(5);
      game.roll(2);
      for (var i = 0; i < 14; i++) {
        game.roll(2) };
      expect(game.score()).toBe(54)
    });

});
