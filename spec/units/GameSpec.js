describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game;
  })

  it('is unfinished at the beginning', function() {
    expect(game.isOver).toBe(false);
  })

  // it('game.currentScore tells you the score', function() {
  //   game.bowl(2, 1);
  //   expect(game.currentScore).toBe(5);
  // })

  describe('game.bowl', function () {

    it('game.bowl changes the current roll', function() {
      game.bowl(0);
      expect(game.currentRoll).toBe(2);
    })

    it('game.bowl adds 2 scores to the frame', function() {
      game.bowl(5, 4);
      expect(game.scorecard.frames).toEqual([5, 4]);
    })
  })

  it('game.status checks if game has ended', function() {
    game.status();
    expect(game.isOver).toBe(false)
  })

  it('game.gameOver() will say when the game is over', function() {
    game.finish(true);
    expect(game.isOver).toBe(true);
  })
})
