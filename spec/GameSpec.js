describe('Game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
  })
  
  it('starts with one frame', () => {
    expect(game.frames.length).toEqual(1);
  })

  describe('addFrame', () => {
    it('adds a new frame to the game', () => {
      game.addFrame();
      expect(game.frames.length).toEqual(2);
    })

    it('does nothing if 10 frames already in game', () => {
      for (let i = 0; i < 10; i++) {
        game.addFrame();
      }
      expect(game.frames.length).toEqual(10);
    })
  })
})
