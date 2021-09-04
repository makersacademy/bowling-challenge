describe('Game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
  })
  
  it('starts with one frame', () => {
    console.log(game);
    console.log(game.frames);
    expect(game.frames.length).toEqual(1);
  })
})