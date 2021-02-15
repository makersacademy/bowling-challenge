describe('Bowling', () => {
  let game;

  beforeEach(() => { game = new Bowling; });

  it('can add the score of a normal game' () => {
    for (let i = 0; i < 19; i++){ game.roll(2); }
    expect(game.roll(2)).toEqual(40);
  });

})
