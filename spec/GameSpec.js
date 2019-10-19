describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("initializes a new game with an array", function() {
    expect(game.getScore()).toEqual({1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]}
   )})


  it('adds players bowls to frame scores', function () {
    game.bowl(1)
    game.bowl(2)
    expect(game.gameScore[1]).toEqual([1,2])
  })

  it('adds players 2nd frame bowls to scores', function () {
    game.bowl(1)
    game.bowl(2)
    game.bowl(3)
    game.bowl(4)
    expect(game.gameScore[2]).toEqual([3,4])
  })

  it('adds players 3rd frame bowls to scores', function () {
    game.bowl(1)
    game.bowl(2)
    game.bowl(3)
    game.bowl(4)
    game.bowl(5)
    game.bowl(6)
    expect(game.gameScore[3]).toEqual([5,6])
  })

  it('keeps returns players total score', function () {
    game.bowl(5)
    game.bowl(4)
    game.bowl(5)
    game.bowl(4)
    expect(game.totalScore()).toEqual(18)
  })
})



