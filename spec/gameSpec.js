// Looks after the scoring for entire game
'use strict';

describe('Game', function(){
  var game;
  beforeEach(function(){
    game = new Game();
  });

  it('expects the game to have 10 frames', function(){
    expect(game.frames.length).toEqual(10);
  });



});
