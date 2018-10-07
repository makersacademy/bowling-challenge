describe("A Game", function() {
  var game;
  var scores;
  beforeEach(function() {
     game = new Game;
  })
  it('can be started', function() {
    expect(game.scores).toEqual(jasmine.any(Object));
  });

  it('uploads to localStorage', function() {
    game.newGame();
    let local = JSON.parse(localStorage.getItem('Scores'));
    expect(local).toEqual(jasmine.any(Object));
  })

  it('should be able to update current score for each stage', function() {
    game.newGame();
    game.getCurrentGame();
    game.setScore(1,2);
    expect(game.currentGame).toEqual(jasmine.objectContaining({
      1: {
      "try1": 1,
      "try2": 2,
      "score": 3
    }
    }));
  })
});
