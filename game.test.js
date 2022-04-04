const Game = require('./game')

describe('bowling game', () => {
  it('can roll a gutter game', () => {
    const sut = new Game;
    for(let i=0; i<20; i++){
      sut.roll(0);
    }
    expect(sut.score()).toStrictEqual(0)
  })
  it('can roll one every time', () => {
    const sut = new Game;
    for(let i=0; i<20; i++){
      sut.roll(1);
    }
    expect(sut.score()).toStrictEqual(20)
  })
  it('can roll a spare', () => {
    const sut = new Game;
    sut.roll(5)
    sut.roll(5)
    sut.roll(3)
    for(let i=0; i<17; i++){
      sut.roll(0);
    }
    expect(sut.score()).toBe(16)
  });
  it('can roll a strike', () => {
    const sut = new Game;
    sut.roll(10)
    sut.roll(4)
    sut.roll(3)
    for(let i=0; i<16; i++){
      sut.roll(0);
    }
    expect(sut.score()).toStrictEqual(24)
  })
})
