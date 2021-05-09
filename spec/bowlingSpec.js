'use strict';

describe('Bowling', () => {
  let game;

  beforeEach(() => {
    game = new Bowling();
  });

  it('can roll a guttar game', function () {
    loopFunction(0,20)
    expect(game.score()).toEqual(0);
  });

  it('can roll all ones', function() {
    loopFunction(1,20)
    expect(game.score()).toEqual(20);

  });

  function loopFunction(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }
})