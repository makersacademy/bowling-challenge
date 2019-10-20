'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });
  
  it('is possible to start a new game', function() {
    expect(game).toEqual(game);
  });

  it('knows the current roll', function() {
    game.roll(3);
    game.roll(3);
    expect(game.currentRoll).toEqual(2)
  })

  it('stores bowls', function() {
    game.roll(2);
    game.roll(6);
    expect(game.rolls).toEqual([2,6])
  })

  it('allows a gutter game', function(){
    multiRoll(20, 0);
    expect(game.calculateScore()).toEqual(0)
  })

  it('adds the score of bowls', function() {
    game.roll(5);
    game.roll(4);
    multiRoll(18, 0);
    expect(game.calculateScore()).toEqual(9)
  })

  it('has a score of 20 after 20 rolls of 1', function(){
    multiRoll(20, 1);
    expect(game.calculateScore()).toEqual(20)
  })

    it('adds a bonus for a strike', function(){
      game.roll(10);
      multiRoll(19, 1);
      expect(game.calculateScore()).toEqual(30)
    }) 
  

  it('it accounts for a spare', function() {
    game.roll(5);
    game.roll(5);
    multiRoll(18, 1);
    expect(game.calculateScore()).toEqual(29)
  })

  it('calculates a perfect game', function() {
    multiRoll(12, 10);
    expect(game.calculateScore()).toEqual(300)
  })

  it('can calculate the score of an unfinished game', function() {
    multiRoll(16, 4)
    expect(game.calculateScore()).toEqual(64)
  })

  function multiRoll(rolls, pins) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins) };
  }
  
})
