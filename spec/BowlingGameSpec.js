'use strict';

describe('Game', function (){
  var game

  beforeEach(function (){
    game = new BowlingGame();
  });

  var rollLoop = function (rolls, pins) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

  it('total score is 0 if no pins are knocked in any frame', function(){
    rollLoop(20, 0);
    expect(game.score()).toEqual(0);
  });

  it('can knock two pins per roll', function (){
    rollLoop(20, 2);
    expect(game.score()).toEqual(40);
  });

  it('can score a spare properly', function (){
    game.roll(1);
    game.roll(9);
    game.roll(5);
    rollLoop(17, 0);
    expect(game.score()).toEqual(20);
  });

  it('can score a strike properly', function (){
    game.roll(10);
    game.roll(4);
    game.roll(4);
    rollLoop(16, 0);
    expect(game.score()).toEqual(26);
  });

  it('can role a perfect game', function (){
    rollLoop(12, 10);
    expect(game.score()).toEqual(300);
  });

});
