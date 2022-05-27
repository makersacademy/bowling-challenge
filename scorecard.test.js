const Scorecard = require('./scorecard')

describe('Scorecard', () => {
  it('Displays the players total score for the game', () => {
    const scorecard = new Scorecard;
    expect(scorecard.displayScore()).toEqual(0);
  });

  it('Displays the current frame', () => {
    const scorecard = new Scorecard;
    expect(scorecard.displayFrame()).toEqual(1);
  });

  it('Displays the current roll', () => {
    const scorecard = new Scorecard;
    expect(scorecard.displayRoll()).toEqual(1);
  });

  it('Can add points for a roll to the total', () => {
    const scorecard = new Scorecard;
    scorecard.enter(7);
    expect(scorecard.displayScore()).toEqual(7);
  });

  it('Increments rolls from 1 to 2 when score is entered', () => {
    const scorecard = new Scorecard;
    scorecard.enter(7);
    expect(scorecard.displayRoll()).toEqual(2);
  });

  it('Resets rolls from 2 to 1 when score is entered', () => {
    const scorecard = new Scorecard;
    scorecard.enter(7);
    scorecard.enter(2);
    expect(scorecard.displayRoll()).toEqual(1);
  });

  it('Increases frame by 1 after second roll', () => {
    const scorecard = new Scorecard;
    scorecard.enter(7);
    scorecard.enter(2);
    expect(scorecard.displayFrame()).toEqual(2);
  });

  it('Returns the total score after every roll', () => {
    const scorecard = new Scorecard;
    expect(scorecard.enter(7)).toContain('Total Score: 7'); 
  });

  it('Returns the current roll after every roll', () => {
    const scorecard = new Scorecard;
    expect(scorecard.enter(7)).toContain('Roll: 2'); 
  });

  it('Returns the current frame after every roll', () => {
    const scorecard = new Scorecard;
    expect(scorecard.enter(7)).toContain('Frame: 1'); 
  });
});
