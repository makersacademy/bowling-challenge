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

  it("allows a person to record a gutter game", function() {
    for (i=0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score).toEqual(0);
  });

  it("allows a person to record a normal score, no bonuses", function() {
    for (i=0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score).toEqual(20);
  });

});
