'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });
  
  it('is possible to start a new game', function() {
    expect(game).toEqual(game)
  });

  it('begins a game with a score of zero', function(){
    expect(game.score).toEqual(0)
  })
})
