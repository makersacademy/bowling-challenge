const Scorecard = require('./Scorecard');

describe('Scorecard', () => {
  it('handles a gutter game', () => {
    const gutterGame = new Scorecard();
    for(let i = 0; i < 20; i ++) {
      gutterGame.roll(0);
    }

    expect(gutterGame.calculateScore()).toEqual(0);
  })

  it('can roll a game with no spares or strikes', () => {
    const boringGame = new Scorecard();
    for(let i = 0; i < 20; i ++) {
      boringGame.roll(4);
    }

    expect(boringGame.calculateScore()).toEqual(80);
  })

  it('can roll a game with spares', () => {
    const spareGame = new Scorecard();
    spareGame.roll(5);
    spareGame.roll(5);
    for(let i = 0; i < 18; i ++) {
      spareGame.roll(4);
    }

    expect(spareGame.calculateScore()).toEqual(86);
  })

  it('can roll a strike', () => {
    const strikeGame = new Scorecard();
    strikeGame.roll(10);
    for(let i = 0; i < 18; i ++) {
      strikeGame.roll(4);
    }

    expect(strikeGame.calculateScore()).toEqual(90);
  })

  it('can roll a perfect game', () => {
    const perfectGame = new Scorecard();
    for(let i = 0; i < 12; i ++) {
      perfectGame.roll(10);
    }


    expect(perfectGame.calculateScore()).toEqual(300);
  })
})