describe('bowling', function() {

  let game;
  
  beforeEach(function() {
    game = new bowlingGame()
  });

  it('can roll a game of zeros', function() {
    for(let i = 0; i < 20; i++) {game.roll(0)};
    expect(game.score()).toBe(0);
  });

  it('can roll a game of ones', function() {
    for(let i = 0; i < 20; i++) {game.roll(1)};
    expect(game.score()).toBe(20);
  });

  it('can roll a spare', function() {
    game.roll(7)
    game.roll(3)
    game.roll(5)
    for(let i = 0; i < 17; i++) {game.roll(0)};
    expect(game.score()).toBe(20);
  })
})