const Scorecard = require('./scorecard')

describe('Frame', () => {
  it('calculates the score when there are no strikes or spares', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);

    expect(scorecard.getScore()).toEqual(30);
  })

  it('calculates the score when there are spares', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 9);
    scorecard.addFrame(3, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(5, 5);
    scorecard.addFrame(9, 0);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);

    expect(scorecard.getScore()).toEqual(64);
  })

  it('calculates the score when there are strikes', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(10);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(10);
    scorecard.addFrame(3, 2);

    expect(scorecard.getScore()).toEqual(54);
  })

  it('calculates the score when there are multiple strikes in a row', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(10);
    scorecard.addFrame(10);
    scorecard.addFrame(10);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(1, 2);
    scorecard.addFrame(3, 2);
    scorecard.addFrame(3, 2);

    expect(scorecard.getScore()).toEqual(89);
  })

  describe('when the 10th frame is a spare', () => {
    it('adds the first endgame bonus score to the total score', () => {
      const scorecard = new Scorecard();
      scorecard.addFrame(1, 2);
      scorecard.addFrame(1, 2);
      scorecard.addFrame(10);
      scorecard.addFrame(10);
      scorecard.addFrame(10);
      scorecard.addFrame(1, 2);
      scorecard.addFrame(1, 2);
      scorecard.addFrame(1, 2);
      scorecard.addFrame(3, 2);
      scorecard.addFrame(3, 7);
      
      scorecard.addFrame(3);
  
      expect(scorecard.getScore()).toEqual(97);
    })
  })

  describe('when the 10th frame is a strike', () => {
    it('adds the first endgame bonus score to the total score', () => {
      const scorecard = new Scorecard();
      scorecard.addFrame(1, 2);
      scorecard.addFrame(1, 2);
      scorecard.addFrame(10);
      scorecard.addFrame(10);
      scorecard.addFrame(10);
      scorecard.addFrame(1, 2);
      scorecard.addFrame(1, 2);
      scorecard.addFrame(1, 2);
      scorecard.addFrame(3, 2);
      scorecard.addFrame(10);

      scorecard.addFrame(3, 10);
  
      expect(scorecard.getScore()).toEqual(107);
    })
  })

  describe('the game ends with two strikes in a row', () => {
    it('the first endgame bonus is used as a bonus for the ninth frame', () => {
      const scorecard = new Scorecard();
      scorecard.addFrame(1, 2);
      scorecard.addFrame(1, 2);
      scorecard.addFrame(10);
      scorecard.addFrame(10);
      scorecard.addFrame(10);
      scorecard.addFrame(1, 2);
      scorecard.addFrame(1, 2);
      scorecard.addFrame(1, 2);
      scorecard.addFrame(10);
      scorecard.addFrame(10);

      scorecard.addFrame(3, 10);
  
      expect(scorecard.getScore()).toEqual(125);
    })
  })

  it('is a perfect game with score 300 when the game is all strikes', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(10);
    scorecard.addFrame(10);
    scorecard.addFrame(10);
    scorecard.addFrame(10);
    scorecard.addFrame(10);
    scorecard.addFrame(10);
    scorecard.addFrame(10);
    scorecard.addFrame(10);
    scorecard.addFrame(10);
    scorecard.addFrame(10);

    scorecard.addFrame(10, 10);

    expect(scorecard.getScore()).toEqual(300);
    expect(scorecard.isPerfectGame()).toEqual(true);
    expect(scorecard.isGutterGame()).toEqual(false);
  })

  it('is a gutter game with score 0 when the game is all 0s', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(0, 0);
    scorecard.addFrame(0, 0);
    scorecard.addFrame(0, 0);
    scorecard.addFrame(0, 0);
    scorecard.addFrame(0, 0);
    scorecard.addFrame(0, 0);
    scorecard.addFrame(0, 0);
    scorecard.addFrame(0, 0);
    scorecard.addFrame(0, 0);
    scorecard.addFrame(0, 0);

    expect(scorecard.getScore()).toEqual(0);
    expect(scorecard.isPerfectGame()).toEqual(false);
    expect(scorecard.isGutterGame()).toEqual(true);
  })
  it('is not a gutter game when the player hits one pin', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(0, 0);
    scorecard.addFrame(0, 0);
    scorecard.addFrame(0, 0);
    scorecard.addFrame(0, 0);
    scorecard.addFrame(0, 0);
    scorecard.addFrame(0, 0);
    scorecard.addFrame(0, 0);
    scorecard.addFrame(0, 0);
    scorecard.addFrame(0, 0);
    scorecard.addFrame(0, 1);

    expect(scorecard.getScore()).toEqual(1);
    expect(scorecard.isPerfectGame()).toEqual(false);
    expect(scorecard.isGutterGame()).toEqual(false);
  })
  it('is not a perfect game when the player all but one pin', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(10);
    scorecard.addFrame(10);
    scorecard.addFrame(10);
    scorecard.addFrame(10);
    scorecard.addFrame(9, 1);
    scorecard.addFrame(10);
    scorecard.addFrame(10);
    scorecard.addFrame(10);
    scorecard.addFrame(10);
    scorecard.addFrame(10);

    scorecard.addFrame(10, 10);

    expect(scorecard.getScore()).toEqual(279);
    expect(scorecard.isPerfectGame()).toEqual(false);
    expect(scorecard.isGutterGame()).toEqual(false);
  })
})