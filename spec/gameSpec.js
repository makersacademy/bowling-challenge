'use strict';

describe('Game',function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('starts with no frames by default', function(){
    expect(game.frames).toEqual([]);
  });

  describe('adding frames', function(){
    it('can add a frame to a game', function(){
      game.addFrame('frame')
      expect(game.frames).toEqual(['frame']);
    });
  });
});
