describe('bowling', function() {

  let game;
  
  beforeEach(function() {
    game = new bowlingGame()
  });

  it('can roll a game of zeros (gutter game)', function() {
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

  it('can roll two spares', function() {
    game.roll(7)
    game.roll(3)
    game.roll(5)
    game.roll(5)
    game.roll(8)
    for(let i = 0; i < 15; i++) {game.roll(0)};
    expect(game.score()).toBe(41)
  });

  it('can roll a strike', function() {
    game.roll(10);
    game.roll(4);
    game.roll(3);
    for(let i = 0; i < 16; i++) {game.roll(0)};
    expect(game.score()).toBe(24)
  })

  it('can roll a perfect game', function() {
    for(let i = 0; i < 12; i++) {game.roll(10)};
    expect(game.score()).toBe(300)
  })
})