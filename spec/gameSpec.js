'use strict';

describe('Game',function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('starts with no frames by default', function(){
    expect(game.frames).toEqual([]);
  });
});
