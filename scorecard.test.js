const Scorecard = require('./scorecard');
// const Frame = require('./frame');

describe('Scorecard class', () => {
  let scorecard;
  beforeEach(() => { scorecard = new Scorecard() })

  describe('.calculateScore method', () => {
    it('initially has zero points', () => {
      expect(scorecard.calculateScore()).toBe(0);
    })

    // it('returns zero points when player never hits a pin in all 10 frames', () => {

    // })
  })




})