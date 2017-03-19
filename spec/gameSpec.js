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

  it('has a .frameCount of 0 to start', function(){
    expect(game.frameCount).toEqual(0);
  });

  it('returns the current frame', function(){
    expect(game.getCurrentFrame()).toEqual(jasmine.any(Frame));
  });

  it('starts a new frame', function(){
    expect(game.newFrame()).toEqual(jasmine.any(Frame));
  });

  describe('Frames one to nine', function(){
    xit('ends the current frame if the player got a strike on the last ball', function() {
      expect(game.endFrame()).toEqual(true);
    });

  });

})
