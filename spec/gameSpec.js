'use strict'

describe ('Game', function(){

  var game;
  var frame;

  beforeEach(function(){
    game = new Game;
    frame = jasmine.createSpy('frame');
  });

  it('can track how many frames have been played', function(){
    expect(game._framesInPlay).toEqual([]);
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
