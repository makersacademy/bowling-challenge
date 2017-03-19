'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    var player = new Player("Bob");
    game = new Game(player);
  });

  it('has a player', function(){
    expect(game.player).toBeDefined();
  });

  describe('Frames one to nine', function(){

    xit('ends the current frame if the player got a strike on the last ball', function() {
      expect(game.endFrame()).toEqual(true);
    });

  });

})
