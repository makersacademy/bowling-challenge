'use strict';

describe('Scorecard', function(){

    var game;

    beforeEach(function(){
      game = new Scorecard();
    });

    it('can calculate the score of a gutter game', function(){
      for (var i = 0; i < 20; i++) {
      game.roll(0) };
      expect(game.totalscore()).toBe(0);
    });

    it('can calculate the score where only 2s are rolled', function(){
      for (var i = 0; i < 20; i++) {
        game.roll(2) };
        expect(game.totalscore()).toBe(40);
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
      expect(game.totalscore()).toBe(74)
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
      expect(game.totalscore()).toBe(54)
    });

    it('can calculate the score of a game with strikes', function() {
      game.roll(10);
      game.roll(10);
      game.roll(5);
      game.roll(3);
      for (var i = 0; i < 14; i++) {
        game.roll(2) };
      expect(game.totalscore()).toBe(79)
    });

    it('can calculate a perfect score', function() {
      for (var i = 0; i < 12; i++) {
        game.roll(10) };
      expect(game.totalscore()).toBe(300)
    });

    it('can calculate the score on a frame where there is one strike', function() {
      game.roll(10);
      game.roll(5);
      game.roll(2);
      expect(game.framescore()).toBe(17)
    });

    it('can calculate the score on a frame where there are two strikes', function() {
      game.roll(10);
      game.roll(10);
      game.roll(2);
      expect(game.framescore()).toBe(22)
    });

    it('can calculate the score on a frame where there are three strikes', function() {
      game.roll(10);
      game.roll(10);
      game.roll(10);
      expect(game.framescore()).toBe(30)
    });

});
