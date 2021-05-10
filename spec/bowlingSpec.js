'use strict';

describe ('Bowling', () => {
  let game; 
  
  beforeEach(() => {
   game = new Bowling();
  });

  it('can roll a gutter game', () => {
    for (let i = 0; i < 20; i++){
    game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

  it('can roll a spare', () => {
    game.roll(4)
    game.roll(6)
    game.roll(4)
    for (let i = 0; i < 17; i++){
    game.roll(0);
    }
    expect(game.score()).toEqual(18);
  });
});
