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

  it('has a score of 3 if 3 pins are knocked down', function(){
    game.roll(3)
    expect(game.score).toEqual(3)
  })

  it('has a score of 20 after 20 rolls of 1', function(){
    for (var i = 0; i < 20; i++) {
    game.roll(1) };
    expect(game.score).toEqual(20)
  })
  describe('it accounts for a spare', function() {
    it('adds a bonus for a spare', function(){
      game.roll(6);
      game.roll(4);
      game.roll(2);
      expect(game.score).toEqual(14)
    }) 
  })
  
})
