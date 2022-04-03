const BowlingGame = require ('./bowlingGame');

describe ('Bowling game', () => {
  
  let game;
  beforeEach(() => {
    game = new BowlingGame();
  })

  test ('Can roll a gutter game', () => {
    for (let i=0; i<20; i++) {
      rollAmount(0,20)
    }
    expect(game.score()).toBe(0);
  });

  test ('Can roll all ones', () => {
    for (let i=0; i<20; i++) {
      rollAmount(1,20)
    }
    expect(game.score()).toBe(20);
  });
  //Helper method, didnt know how to require it from another file
  const rollAmount = (pins, rolls) => {
    for (let i = 0; i <rolls ; i++) {
      game.roll(pins);
    }
  };
  // helper method above
  test ('Can roll a spare', () => {
    game.roll(5)
    game.roll(5)
    game.roll(1)
    rollAmount(0,19)
    expect(game.score()).toBe(12);
  });

  test ('Can roll a strike', () => {
    game.roll(10)
    game.roll(4)
    game.roll(3)
    rollAmount(0,16)
    expect(game.score()).toBe(24);
  });

  test ('Can roll a perfect game', () => {
    rollAmount(10,12)
    expect(game.score()).toBe(300);
  });


})