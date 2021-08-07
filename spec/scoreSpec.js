/* eslint-disable */

describe ("Score", () => {
  beforeEach( () => {
    score = new Score();
  });
  it ('has a first roll function that accepts a number and sets to pins', () => { 
    score.firstRoll(5);
    expect(score.firstRollPins).toEqual(5);
  });

  it ('has a second roll function that sets num to pins and calcs score', () => { 
    score.firstRoll(4);
    score.secondRoll(5);
    expect(score.secondRollPins).toEqual(5);
    expect(score.calculateScore()).toEqual(9);
  });

  it ('initializes with scores and spare/strike set to null + false respectively', () => {
    expect(score.firstRollPins).toEqual(null);
    expect(score.secondRollPins).toEqual(null);
    expect(score.isStrike).toEqual(false);
    expect(score.isSpare).toEqual(false);
    expect(score.score).toEqual(null);
  });

  it('scoring 10 on first roll sets strike to true', () => { 
    score.firstRoll(10);
    expect(score.isStrike).toEqual(true);
    expect(score.calculateScore()).toEqual(0);
  });

  it('scoring 10 across two roll sets spare to true and score to 0', () => { 
    score.firstRoll(6);
    score.secondRoll(4);
    expect(score.isStrike).toEqual(false);
    expect(score.isSpare).toEqual(true);
    expect(score.calculateScore()).toEqual(0);

  });

})