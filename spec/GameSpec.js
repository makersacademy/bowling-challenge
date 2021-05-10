describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('can roll a guttar game', function () {
    loopFunction(0,20)
    expect(game.score()).toEqual(0);
  });

  it('can roll all ones', function() {
    loopFunction(1,20)
    expect(game.score()).toEqual(20);
  });

  it('can roll a spare', function() {
    game.roll(5)
    game.roll(5)
    game.roll(4)
    loopFunction(0,17);
    expect(game.score()).toEqual(18);
  })

  it('can roll a strike', function() {
    game.roll(10)
    game.roll(2)
    game.roll(4)
    loopFunction(0, 17)
    expect(game.score()).toEqual(22);

  })
 
  function loopFunction(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }
})

