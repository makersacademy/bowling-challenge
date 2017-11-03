'use strict';

describe('Game',function(){
var game;
  beforeEach(function (){

    game = new Game();
  });

  describe('new Game', function(){
    it('starts a new game', function (){
      expect(game.newGame()).toEqual(undefined);
    });

    it('there are 10 frames in a game', function(){
      expect(game.frameList()).toEqual(10);
    });
  });
});
