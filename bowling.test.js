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

})