'use strict';

describe('Bowling Game', function(){
  var game;
  beforeEach(function(){
    game = new Game
  })

  describe('#score', function() {

    it ('scorecard is zero by default', function() {
        expect(game.scoreCard()).toEqual(game.frames);
    });

    it ('returns the first bowl score', function() {
      expect(game.scoreCard()).toEqual([])
      game.addFrame(4)
      expect(game.scoreCard()).toEqual([4])
    });

    it ('returns the second bowl score', function() {
      expect(game.scoreCard()).toEqual([])
      game.addFrame(4)
      expect(game.scoreCard()).toEqual([4])
      game.addFrame(5)
      expect(game.scoreCard()).toEqual([4, 5])
    });

    it('gives total score', function(){
      game.addFrame(4)
      game.addFrame(5)
      for (var i = 0; i < 18; i++) {
        game.addFrame(0)
      };
      expect(game.score()).toBe(9)
    });
        
    it('has a score of 0 for a game of gutterballs', function(){
      for (var i = 0; i < 20; i++){
        game.addFrame(0)
      }
      expect(game.score()).toBe(0)
    });

    it('has a score of 40 for 20 twos', function(){
      for (var i = 0; i <20; i++) {
      game.addFrame(2);
      }
      expect(game.score()).toBe(40)
    });

    it('calculates a different score for a spare', function(){
        game.addFrame(3);
        game.addFrame(7);
        game.addFrame(8);
        for (var i = 0; i < 17; i++) {
          game.addFrame(0)
        };
        expect(game.score()).toBe(26);
      });

    it('calculates a different score for a strike', function(){
        game.addFrame(10);
        game.addFrame(4);
        game.addFrame(3);
        for (var i = 0; i < 17; i++) {
          game.addFrame(0)
        };
        expect(game.score()).toBe(24)
    })


    it('returns 300 for a perfect game', function(){
        for (var i = 0; i < 20; i++) {
          game.addFrame(10)
        }
      expect(game.score()).toBe(300)
    })
  });
});
