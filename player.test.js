const Player = require('./player')

describe('Player class', () => {
  it('creates player instances', () => {
    expect(new Player('Emma')).toBeInstanceOf(Player)
  });
})