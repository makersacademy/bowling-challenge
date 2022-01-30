const BowlingGame = require('./BowlingGame')
const R = require('ramda')
describe(BowlingGame, () => {
  it('Can roll 0 score game', () => {
    const bowlingGame = new BowlingGame()
    R.call(R.times(() => {
      bowlingGame.roll(0)
    }), 20)
    expect(bowlingGame.getScore()).toBe(0)
  })
  it('Can roll gutter game', () => {
    const bowlingGame = new BowlingGame()
    R.call(R.times(() => {
      bowlingGame.roll(1)
    }), 20)
    expect(bowlingGame.getScore()).toBe(20)
  })
  it('Can roll a spare', () => {
    const bowlingGame = new BowlingGame()
    bowlingGame.roll(5)
    bowlingGame.roll(5)
    bowlingGame.roll(3)
    R.call(R.times(() => {
      bowlingGame.roll(0)
    }), 17)
    expect(bowlingGame.getScore()).toBe(16)
  })
  it('Can roll all 5/s game', () => {
    const bowlingGame = new BowlingGame()
    R.call(R.times(() => {
      bowlingGame.roll(5)
    }), 21)
    expect(bowlingGame.getScore()).toBe(150)
  })
  // it ('Can roll the Perfect Game',()=>{
  //   const bowlingGame = new BowlingGame;
  //   R.call(R.times(() => {
  //       bowlingGame.roll(10);
  //   }), 12);
  //   expect(bowlingGame.getScore()).toBe(300);
  // });
})
