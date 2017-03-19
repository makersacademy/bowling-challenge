'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('Frames one to nine', function(){

    xit('ends the current frame if the player got a strike on the last ball', function() {
      expect(game.endFrame()).toEqual(true);
    });

  });

})
