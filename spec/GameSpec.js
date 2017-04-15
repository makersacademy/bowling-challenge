'use strict';

describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('initialize', function(){
    it('game starts with zero points', function(){
        expect(game.getScore()).toEqual(0);
    });
    it('game starts on frame 1', function(){
        expect(game.getFrameNo()).toEqual(1);
    })
    it('game starts on roll 0', function(){
        expect(game.getRollCount()).toEqual(0);
    })
  });

  describe('frame transition', function(){
    it('frame increases by three after six rolls', function(){
      for(var i=0; i<6; i++){
        game.makeRoll(5);
      }
      expect(game.getFrameNo()).toEqual(4);
    })
    it('frame increases by one after 3 rolls', function(){
      for(var i=0; i<3; i++){
      game.makeRoll(5);
      }
      expect(game.getFrameNo()).toEqual(2);
    })
  })

  describe('frame storage', function(){
    it('stores frame scores in frame history array', function(){
      game.makeRoll(5);
      game.makeRoll(3);
      expect(game.getFrameHistory()).toEqual([[5,3]])
    })
  })


});
