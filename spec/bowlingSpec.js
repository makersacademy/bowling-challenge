'use strict';

describe('Bowling', () => {

  it('can create a game', function () {
    let game = new Bowling();
  })

  it('can roll a guttar game', function () {
    let game = new Bowling();
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  })



})