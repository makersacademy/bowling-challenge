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
    it('adds a new frame to the game, following 2 normal rolls', () => {
      game.roll(2);
      game.roll(4);
      expect(game.frames.length).toEqual(2);
    })

    it('adds a new frame following a strike', () => {
      game.roll(10);
      expect(game.frames.length).toEqual(2);
    })

    it('adds a new frame following a split', () => {
      game.roll(5);
      game.roll(5);
      expect(game.frames.length).toEqual(2);
    })

    it('does nothing if 10 frames already in game', () => {
      for (let i = 0; i < 10; i++) {
        game.roll(10);
      }
      expect(game.frames.length).toEqual(10);
    })
  })

  describe('checkFrameOver', () => {
    it('updates the status to closed if no rolls remaining', () => {
      game.roll(2);
      game.roll(3);
      expect(game.frames[0].closed).toEqual(true);
    })

    it('adds a frame score only once', () => {
      game.roll(1);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      expect(game.score).toEqual(1);
    })
  })

  it('does nothing if trying to add rolls after game over', () => {
    for (let i = 0; i < 12; i++) {
      game.roll(10);
    }
    game.roll(2);
    expect(game.score).toEqual(300);
  })
})
