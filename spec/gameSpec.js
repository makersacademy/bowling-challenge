"use strict";

describe('Game', function(){
  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  });

  describe('turns', function(){
    it('has a scorecard of 10 turns', function(){
      expect(game.scoreCard[8]).toEqual([0, 0]);
      expect(game.scoreCard[9]).toEqual([0, 0]);
      expect(game.scoreCard[10]).toEqual([0]);
    });

    it('shows the scores after one turn', function(){
      game.scoreCard[0] = [null, null];
      game.bowl();
      expect(game.scoreCard[0]).not.toEqual([null, null])
      expect(game.scoreCard[1]).toEqual([0, 0]);
    });

    it('shows the scores after a second turn', function(){
      game.scoreCard[1] = [null, null];
      game.turn = 1;
      game.bowl();
      expect(game.scoreCard[game.turn]).not.toEqual([null, null])
      expect(game.scoreCard[game.turn + 1]).toEqual([0, 0]);
    });

    it('wont bowl again after 10 turns', function(){
      for ( var i =0 ; i < 20; i++ ){
          game.bowl();
      }
      expect(game.turn).toEqual(10);
    });

    it('knows a game is over', function(){
      expect(game.over()).toMatch('Game Over -');
    });
  });

});
