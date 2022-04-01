const Bowling = require('./bowling.js');

describe('Bowling', () => {
  it('can roll a gutter game', () => {
    const sut = new Bowling();
    for(let i = 0 ; i < 20 ; i++) {
      sut.roll(0);
    }
    expect(sut.score()).toStrictEqual(0)
  });
  it('can roll 1 every time', () => {
    const sut = new Bowling();
    for(let i = 0 ; i < 20 ; i++) {
      sut.roll(1);
    }
    expect(sut.score()).toStrictEqual(20)
  });
  // it('can roll a spare', () => {
  //   const sut = new Bowling();
  //   sut.roll(5);
  //   sut.roll(5);
  //   sut.roll(7);
  //   expect(sut.score()).toStrictEqual(24)
  // });

});