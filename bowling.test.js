const Bowling = require('./bowling');

describe('Bowling', () => {
  describe('Initially', () => {
    it('starts off with a total score of 0', () => {
      const bowling = new Bowling();
      expect(bowling.getScore()).toBe(0);
    })
  })

  it('returns 0 for a gutter game', () => {
    const bowling = new Bowling();
    bowling.playRound([0,0]);
    bowling.playRound([0,0]);
    bowling.playRound([0,0]);
    bowling.playRound([0,0]);
    bowling.playRound([0,0]);
    bowling.playRound([0,0]);
    bowling.playRound([0,0]);
    bowling.playRound([0,0]);
    bowling.playRound([0,0]);
    bowling.playRound([0,0]);
    expect(bowling.getScore()).toBe(0);
  })

  it('total score is 20 after 10 rounds of scoring [1,1]', () => {
    const bowling = new Bowling();
    bowling.playRound([1,1]);
    bowling.playRound([1,1]);
    bowling.playRound([1,1]);
    bowling.playRound([1,1]);
    bowling.playRound([1,1]);
    bowling.playRound([1,1]);
    bowling.playRound([1,1]);
    bowling.playRound([1,1]);
    bowling.playRound([1,1]);
    bowling.playRound([1,1]);
    expect(bowling.getScore()).toBe(20);
  })

  it('should end the game after the 10th round, with no strikes or spares', () => {
    const bowling = new Bowling();
    bowling.playRound([1,1]);
    bowling.playRound([1,1]);
    bowling.playRound([1,1]);
    bowling.playRound([1,1]);
    bowling.playRound([1,1]);
    bowling.playRound([1,1]);
    bowling.playRound([1,1]);
    bowling.playRound([1,1]);
    bowling.playRound([1,1]);
    bowling.playRound([1,1]);
    expect(bowling.getScore()).toBe(20);
    expect(bowling.getRound()).toEqual(10);
  })
})