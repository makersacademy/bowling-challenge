'use strict'

describe('Game', function(){

  it('can start a new game', function(){
    var game = new Game();
  });

  it('starts a new game with a score of 0', function(){
    var game = new Game;
    expect(game.score).toEqual(0);
  });
});
