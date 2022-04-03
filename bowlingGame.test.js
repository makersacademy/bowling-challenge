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

})