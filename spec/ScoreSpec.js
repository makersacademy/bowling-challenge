describe("Game", function() {
  var score;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it("should have an initial score of 0", function() {
    expect(game.score).toEqual(0);
  });

  describe('Retrieving score from Frame', function() {
    it('uses frame to get the score', function() {
      game.add_score(5)
      game.add_score(3)
      expect(game.score).toEqual(8)
    });
  });
  it('adds a new frame after round', function() {
    game.add_score(5)
    game.add_score(3)
    expect(game.frames.length).toEqual(2)
  })
  it('adds new scores into new frame', function() {
    game.add_score(5)
    game.add_score(3)
    game.add_score(6)
    game.add_score(3)
    expect(game.score).toEqual(17)
  })

});
