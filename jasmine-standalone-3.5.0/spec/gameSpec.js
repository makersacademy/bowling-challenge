describe('bowling', function() {

  let game;
  
  beforeEach(function() {
    game = new bowlingGame()
  });

  it('can have a gutter game of zeros', function() {
    for(let i = 0; i < 9; i++) { game.addFrame([0, 0])}
    game.addLastFrame([0, 0]);
    expect(game.gameTotal()).toBe(0);
  });

  it('can have a game of only ones', function() {
    for(let i = 0; i < 9; i++) { game.addFrame([1, 1])}
    game.addLastFrame([1, 1]);
    expect(game.gameTotal()).toBe(20);
  });

  it('can have a game of only twos', function() {
    for(let i = 0; i < 9; i++) { game.addFrame([2, 2])}
    game.addLastFrame([2, 2]);
    expect(game.gameTotal()).toBe(40);
  });

  it('can have a game of only strikes', function() {
    for(let i = 0; i < 9; i++) {game.addFrame([10, 0])}
    game.addLastFrame([10, 10, 10]);
    expect(game.gameTotal()).toBe(300);
  });

  it('can have a game of ones, ending in strikes', function() {
    for(let i = 0; i < 9; i++) {game.addFrame([1, 1])}
    game.addLastFrame([10, 10, 10])
    expect(game.gameTotal()).toBe(48)
  });

  it('can have a mixed game, with a spare', function() {
    game.addFrame([1, 2])
    game.addFrame([6, 3])
    game.addFrame([3, 7])
    game.addFrame([5, 2])
    for(let i = 0; i < 5; i++) {game.addFrame([0, 0])}
    game.addLastFrame([4, 4])
    expect(game.gameTotal()).toBe(42)
  });

  it('can end in a spare', function() {
    game.addFrame([1, 2])
    game.addFrame([6, 3])
    game.addFrame([3, 7])
    game.addFrame([5, 2])
    for(let i = 0; i < 5; i++) {game.addFrame([0, 0])}
    game.addLastFrame([4, 6, 8])
    expect(game.gameTotal()).toBe(52)
  })
})