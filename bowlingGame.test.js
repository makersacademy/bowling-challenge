const BowlingGame = require('./BowlingGame')

describe(BowlingGame, () => {
  it('Can roll gutter game', () => {
    const bowlingGame = new BowlingGame()
    for (let roll = 0; roll <20; roll ++){
      bowlingGame.roll(0)
    }
    expect(bowlingGame.getScore()).toBe(0)
  });

  it('Can roll 20*1 game', () => {
    const bowlingGame = new BowlingGame()
    for (let roll = 0; roll <20; roll ++){
      bowlingGame.roll(1)
    }
    expect(bowlingGame.getScore()).toBe(20)
  })
  it('Can roll a spare', () => {
    const bowlingGame = new BowlingGame()
    bowlingGame.roll(5)
    bowlingGame.roll(5)
    bowlingGame.roll(3)
    for (let roll = 0; roll <17; roll ++){
      bowlingGame.roll(0)
    }
    expect(bowlingGame.getScore()).toBe(16)
  })

  it('Can roll 2 spares', () => {
    const bowlingGame = new BowlingGame()
    bowlingGame.roll(5)
    bowlingGame.roll(5)
    bowlingGame.roll(3)
    
    for (let roll = 0; roll <15; roll ++){
      bowlingGame.roll(0)
    }
    bowlingGame.roll(5)
    bowlingGame.roll(5)
    bowlingGame.roll(3)
    expect(bowlingGame.getScore()).toBe(29)
  })

  it('Can roll all 5/s game', () => {
    const bowlingGame = new BowlingGame()
    for (let roll = 0; roll <21; roll ++){
      bowlingGame.roll(5)
    }
    expect(bowlingGame.getScore()).toBe(150)
  })
  it ('Can roll the Perfect Game',()=>{
    const bowlingGame = new BowlingGame;
    for (let roll = 0; roll <12; roll ++){
      bowlingGame.roll(10)
    }
    expect(bowlingGame.getScore()).toBe(300);
  });
})
