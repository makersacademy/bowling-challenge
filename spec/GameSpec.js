describe('Game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
  })
  
  it('starts with one frame', () => {
    expect(game.framesCount).toEqual(1);
  })
})
