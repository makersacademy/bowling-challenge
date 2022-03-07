const Scorecard = require('./scorecard');
const Frame = require('./frame');

describe('Scorecard', () => {
  it('calculates score of 2 frames', () => {
    const frame = new Frame()
    const scorecard = new Scorecard()

    frame.roll(1)
    frame.roll(3)
    frame.roll(5)
    frame.roll(2)
    expect(scorecard.score()).toBe(11)

  })

})