'use strict';

describe('Game', function(){

    var game;

    beforeEach(function(){
      game = new Game();
    });

    it('gutter game score', function(){
      for (var i = 0; i < 20; i++) {
      game.roll(0) };
      expect(game.score()).toBe(0);
    });

    it('can roll a game of 2s', function(){
      for (var i = 0; i < 20; i++) {
        game.roll(2) };
        expect(game.score()).toBe(40);
    });

});
