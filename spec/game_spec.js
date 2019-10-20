describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('displays the players score.', function() {
  expect(game.score).toEqual(0)
  });

  describe('roll', function() {
    it('increments the temp', function() {
      game.roll(1)
      expect(game.score).toEqual(1)
    })
  })

  it('frame', function() {
  expect(game.frame).toEqual(1)
  });

});
