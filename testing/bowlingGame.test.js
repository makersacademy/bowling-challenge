const Bowling = require('../bowlingGame.js')

describe('class Bowling', () => {
  beforeEach(()=> {
    bowling = new Bowling();
  })
  it('starts with a total score of 0', () => {
    expect(bowling.getTotalScore()).toEqual(0);
  })
})