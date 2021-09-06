describe('Game', () => {

  beforeEach(() => {
    game = new Game();
  });

  it('initializes with an empty array', () => {
    expect(game.frames).toEqual([])
  });

  describe('frameRolls', () => {

    it('creates a new frame', () => {
      game._newFrame();
      expect(game.frames[0]).toBeInstanceOf(Frame);
    });

    it('enters a players rolls for the current frame', () => {
      game.frameRolls(3, 4);
      expect(game.frames[0]).toBeInstanceOf(Frame);
      expect(game.frames[0].roll_one).toEqual(3);
      expect(game.frames[0].roll_two).toEqual(4);
    });

    it('enters a players rolls for multiple frames', () => {
      game.frameRolls(3, 4);
      game.frameRolls(1, 7);
      game.frameRolls(2, 3);
      expect(game.frames[0]).toBeInstanceOf(Frame);
      expect(game.frames[1]).toBeInstanceOf(Frame);
      expect(game.frames[2]).toBeInstanceOf(Frame);
      expect(game.frames[0].roll_one).toEqual(3);
      expect(game.frames[1].roll_one).toEqual(1);
      expect(game.frames[2].roll_one).toEqual(2);
    });

  });

  describe('score', () => {

    it('shows the score for the current frame', () => {
      game.frameRolls(2, 3);
      expect(game.frameScore()).toEqual(5);
    });

    it('shows the total score for played frames in a game of bowing, no matter which frame a player is on', () => {
      game.frameRolls(3, 4);
      game.frameRolls(1, 7);
      expect(game.totalScore()).toEqual(15);
    });

  });

});
