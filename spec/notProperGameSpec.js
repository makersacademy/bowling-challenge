'use strict';

describe('Game', function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('has a starting score of zero', function() {
    expect(game.getCurrentScore()).toEqual(0);
  });

  it('can score points by number of fallen pins', function(){
    game.roll(5);
    expect(game.getCurrentScore()).toEqual(5);
  });

  it('can roll a gutter game', function() {
    completeGame(0, 20);
    expect(game.getCurrentScore()).toBe(0);
  });

  it('can roll a game of ones', function () {
    completeGame(1, 20);
    expect(game.getCurrentScore()).toBe(20);
  });

  var completeGame = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    };
  };
  
});