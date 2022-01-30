const ScoreCard = require('./scoreCard');

describe('ScoreCard class', () => {
  const sc = new ScoreCard();

  it ('prints the frame scores', () => {
    expect(sc.printFrameScores()).toEqual("Frame: 1, First roll: 1, Second roll: 0, Bonus: none")
  });

  it('prints the total scores', () => {
    sc.frameResult([2, 5, 'none']);
    expect(sc.printTotalScore()).toEqual('Total: 8');
  });

});