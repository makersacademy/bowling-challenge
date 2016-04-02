describe ("Game", function() {
  var game;
  var pins;

  beforeEach(function() {
    game = new Game()
    pins = 5
  })

  it('starts a new game with an empty scoreboard', function() {
    expect(game.currentScore()).toEqual(0);
  })

  xit('adds roll to score', function() {
    game.roll(pins)
    expect(game.currentScore()).toEqual(pins)
  })

  it('is a gutter game', function() {
    for(i = 0 ; i === 20; i++) { game.roll(0) }
    expect(game.currentScore()).toEqual(0)
  })
});

// if array has 2 then add no more rolls, move onto next.
