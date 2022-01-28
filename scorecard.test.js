const Scorecard = require('./Scorecard');

describe('Scorecard', () => {
  it('handles gutter games', () => {
    const gutterGame = new Scorecard([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    expect(gutterGame.getScore()).toEqual(0);
  })
})