const Bowling = require('./bowling');

describe('Bowling', () => {
  
  describe('Initially', () => {
    it('starts off with a total score of 0', () => {
      const bowling = new Bowling([[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]);
      expect(bowling.scorecard()).toBe(0);
    })
  })

  it('returns 0 for a gutter game', () => {
    const bowling = new Bowling([[0,0], [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]);
    expect(bowling.scorecard()).toEqual(0);
  })

  it('total score is 20 after 10 rounds of scoring [1,1]', () => {
    const bowling = new Bowling([[1,1], [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]);
    expect(bowling.scorecard()).toBe(20);
  })

  it('strike adds bonus of 2 for one strike in the game followed by 1,1', () => {
    const bowling = new Bowling([[10], [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]])
    expect(bowling.scorecard()).toEqual(30);
  })

  it('returns the correct score for 2 strikes', () => {
    const bowling = new Bowling([[10], [1,1],[1,1],[10],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]])
    expect(bowling.scorecard()).toEqual(40);
  })

  it('returns the correct score for 2 strikes in a row', () => {
    const bowling = new Bowling([[10], [10],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]])
    expect(bowling.scorecard()).toEqual(49);
  })

  it('returns the correct score for a game with a spare', () => {
    const bowling = new Bowling([[5,5], [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]])
    expect(bowling.scorecard()).toEqual(29);
  })

  it('returns the correct score for a game with 2 spare', () => {
    const bowling = new Bowling([[5,5], [1,1],[7,3],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]])
    expect(bowling.scorecard()).toEqual(38);
  })

  it('returns the correct score for a game with 2 spares in a row', () => {
    const bowling = new Bowling([[5,5], [5,5],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]])
    expect(bowling.scorecard()).toEqual(42);
  })

})