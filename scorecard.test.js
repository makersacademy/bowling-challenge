const Scorecard = require('./scorecard')



describe('Scorecard', () => {
  it('calculates the score when there are no strikes or spares', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    expect(scorecard.totalScores()).toEqual(6);
  });
    
  it('calculates the score when there is a spare', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(1, 2);
    scorecard.addFrame(5, 5);
    scorecard.addFrame(1, 2);
    expect(scorecard.totalScores()).toEqual(17);
    ;
  })

  it('calculates the score when there is a strike', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(1, 2);
    scorecard.addFrame(10, 0);
    scorecard.addFrame(1, 2);
    expect(scorecard.totalScores()).toEqual(19);
    ;
  })

  it('calculates the score when there is a spare and a strike', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(1, 2);
    scorecard.addFrame(10, 0);
    scorecard.addFrame(5, 5);
    scorecard.addFrame(1, 2);
    expect(scorecard.totalScores()).toEqual(37);
    ;
  })

});