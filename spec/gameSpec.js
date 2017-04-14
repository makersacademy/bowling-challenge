'use strict'

describe ('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game;
  });

  describe('Random Rolls', function(){
    it('#generateRandRoll1 - randomly generates number of knocked pins between 1 - 10', function(){
      game.generateRandRoll1();
      expect(game._randRoll1).toBeLessThan(11);
    });

    it('#generateRandRoll2 - randomly generates number of knocked pins from leftover pins', function(){
      game.generateRandRoll2();
      expect(game._randRoll1 + game._randRoll2).toBeLessThan(11);
    });
  });



})
