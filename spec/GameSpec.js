describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("initializes a new game with an array", function() {
    game.getScores;
    expect(game.getScores()).toEqual([]);
  })

  it('adds players first frame bowls to scores', function () {
    game.bowl(4)
    game.bowl(5)
    expect(game.getScores()).toEqual([4,5])
  })

  // it('adds players second frame bowls to scores', function () {
  //   game.bowl(4)
  //   game.bowl(5)
  //   game.bowl(3)
  //   game.bowl(6)
  //   expect(game.getScores()).toEqual([4,5],[3.6])
  // })
})


