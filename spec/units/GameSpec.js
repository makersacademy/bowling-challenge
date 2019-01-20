describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game;
  })

  it('is unfinished at the beginning', function() {
    expect(game.isOver).toBe(false);
  })

  describe('#currentScore', function () {
    it('#currentScore tells you the score', function() {
      game.bowl(2, 1);
      expect(game.currentScore()).toEqual(3);
    })
  })

  describe('#bowl', function () {
    it('#bowl adds 2 scores to the frame', function() {
      game.bowl(5, 4);
      expect(game.frames[0]).toEqual([5, 4]);
    })
  })

  describe('#currentFrame', function () {
    it('#currentFrame returns current frame number', function() {
      game.bowl(3, 5);
      expect(game.currentFrame()).toBe(1);
    })
  })

  describe('#status', function () {
    it('#status checks if game has ended', function() {
      game.status();
      expect(game.isOver).toBe(false)
    })
  })

  it('#finish will say when the game is over', function() {
    game.finish(true);
    expect(game.isOver).toBe(true);
  })
})
