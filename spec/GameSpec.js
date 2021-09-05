describe('Game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
  })
  
  it('starts with one frame', () => {
    expect(game.frames.length).toEqual(1);
  })

  it('starts with a score of 0', () => {
    expect(game.score).toEqual(0);
  })

  it('starts with no frame scores', () => {
    expect(game.frameScores).toHaveSize(0);
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
