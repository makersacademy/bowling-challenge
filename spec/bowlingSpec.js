describe('Bowling', () => {
  let game;

  beforeEach(() => { game = new Bowling; });

  it('can add a normal frame', () => {
    for (let i = 0; i < 7; i++){ game.roll(2); }
    expect(game.frames.length).toEqual(3)
  });

})
