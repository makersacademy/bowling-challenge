'use strict';

describe('Game', function() {
  let game;
  beforeEach(function() {
    game = new Game();
  });

  it('can roll all 0s', function() {
    for (let i = 0; i < 20; i++){
      game.roll(0)
    }
    expect(game.score()).toEqual(0);
  })

  it('can roll all 1s', function(){
    for (let i = 0; i < 20; i++){
    game.roll(1)
  }
  expect(game.score()).toEqual(20);
  })


})


// can roll all 0s
// can roll all 1s
// can roll all spares
// can roll a strike
// can roll a normal game
// can roll all strikes
