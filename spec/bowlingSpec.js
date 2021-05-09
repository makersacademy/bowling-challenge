'use strict';

describe ('Bowling', () => {
  let game; 
  
  beforeEach(() => {
   game = new Bowling();
  });

  it('can roll a gutter game', () => {
    for (let i = 0; i < 20; i++){}
    game.roll(0);
    expect(game.score()).toEqual(0);
  });
});
