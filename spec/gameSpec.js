describe('Game', () => {

  beforeEach(() => {
    game = new Game();
  });

  it('enters a players rolls for a single frame', () => {
    game.enter_frame_rolls(3, 4);
    expect(game.frames).toContain([3, 4])
  });

});