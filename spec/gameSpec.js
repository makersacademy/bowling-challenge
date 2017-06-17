"use strict";

describe('Game', function(){
  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  });

  describe('scoreCard', function(){
    it('holds scores for 10 frames and an extra ball', function(){
      expect(game.scoreCard[0]).toEqual([0, 0]);
      expect(game.scoreCard[9]).toEqual([0, 0]);
      expect(game.scoreCard[10]).toEqual([0]);
    });

    it('wont change the scorecard after 10 frames', function(){
      for ( var i =0 ; i < 20; i++ ){
          game.incrementFrame();
      }
      expect(game.frame).toEqual(10);
    });
  });

  describe('scores', function(){
    it('records a frame score', function(){
      game.addFrameScore([5,4]);
      expect(game.scoreCard[0]).toEqual([5,4]);
    });

    it('adds all the scores on the scoreCard', function(){
      game.addFrameScore([5,4]);
      game.sumScores();
      console.log(game.sumScores());
      expect(game.sumScores()).toEqual(9);
    });
  });

});
