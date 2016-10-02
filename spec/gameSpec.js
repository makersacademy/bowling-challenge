'use strict';

describe('Game', function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('bowling a frame', function() {
    it('the frame is over after one ball if a strike', function() {
      game.bowl(10);
      expect(game._frame).toEqual([])
      expect(game._frames).toEqual([[10]]);
    });

    it('the frame is over after two balls if no strike', function() {
      game.bowl(4);
      game.bowl(4);
      expect(game._frame).toEqual([])
      expect(game._frames).toEqual([[4, 4]]);
    });
  });

  describe('scoring a frame', function() {
    it('correctly scores a regular frame', function() {
      game.bowl(3);
      game.bowl(4);
      game.calculateScores();
      expect(game._finalScores).toEqual([7])
    });

    it('correctly scores a gutter frame', function() {
      game.bowl(0);
      game.bowl(0);
      game.calculateScores();
      expect(game._finalScores).toEqual([0])
    });

    it('correctly scores a solitary spare', function() {
      game.bowl(7);
      game.bowl(3);
      game.bowl(3);
      game.bowl(5);
      game.calculateScores();
      expect(game._finalScores).toEqual([13, 8]);
    });

    it('correctly scores a solitary strike', function() {
      game.bowl(10);
      game.bowl(3);
      game.bowl(3);
      game.bowl(5);
      game.bowl(3);
      game.calculateScores();
      expect(game._finalScores).toEqual([16, 6, 8]);
    });

    it('correctly scores two strikes in a row', function() {
      game.bowl(10);
      game.bowl(10);
      game.bowl(5);
      game.bowl(3);
      game.bowl(4);
      game.bowl(0);
      game.calculateScores();
      expect(game._finalScores).toEqual([25, 18, 8, 4]);
    });

    // it('correctly scores three strikes in a row', function() {
    //   game.bowl(10);
    //   game.bowl(10);
    //   game.bowl(10);
    //   game.bowl(3);
    //   game.bowl(4);
    //   game.bowl(0);
    //   game.calculateScores();
    //   expect(game._finalScores).toEqual([25, 18, 8, 4]);
    // });

    it('correctly scores a gutter game', function () {
      var i;
      for (i = 0; i < 10; i++) {
        game.bowl(0);
        game.bowl(0);}
        game.calculateScores();
      expect(game._finalScores.length).toEqual(10);
      expect(game._finalScores.reduce(function sum(total, num) {
        return total + num;})).toEqual(0);
    });


  });

  describe('Ending the game', function() {
    it('the game is over after 10 frames', function () {
      var i;
      for (i = 0; i < 10; i++) {
        game.bowl(4);
        game.bowl(5);}
      expect(game.over).toEqual(true);
    });
  });

});
