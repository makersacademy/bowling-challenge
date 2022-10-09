const BowlingScorecard = require('./bowlingScorecard')

describe('BowlingScorecard', () => {
  it ('calculates score for one pin down', () => {
    const scoreboard = [ [ 1]];
  
    const scoring = new BowlingScorecard(scoreboard);
    scoring.calculateScoreFromPinsDown();
  
    expect(scoring.getScore()).toBe(1);
  });

  it ('calculates score for two pins down', () => {
    const scoreboard = [ [1, 2]];
  
    const scoring = new BowlingScorecard(scoreboard);
    scoring.calculateScoreFromPinsDown();
  
    expect(scoring.getScore()).toBe(3);
  });

  it ('calculates score for the pins down for the whole game', () => {
    const scoreboard = [ [ 0, 4 ], [ 4, 5 ],
      [ 3, 4 ], [ 2, 5 ], 
      [ 1, 0 ], [ 0, 1 ], 
      [ 1, 3 ], [ 5, 4 ], 
      [ 0, 1 ], [ 2, 4 ]];
  
    const scoring = new BowlingScorecard(scoreboard);
    scoring.calculateScoreFromPinsDown();
  
    expect(scoring.getScore()).toBe(49);
  });

  it ('calculates bonus for strike', () => {
    const scoreboard = [ [10], [1, 2]];
  
    const scoring = new BowlingScorecard(scoreboard);
    scoring.calculateBonuses();
    expect(scoring.getScore()).toBe(3);
  });

  it ('calculates bonus for spares', () => {
    const scoreboard = [ [2, 8], [1, 2]];
  
    const scoring = new BowlingScorecard(scoreboard);
    scoring.calculateBonuses();
    expect(scoring.getScore()).toBe(1);
  });


  it ('calculates the score for pins and bonuses', () => {
    const scoreboard = [ [ 1, 4 ], [ 4, 5 ],
      [ 6, 4 ], [ 5, 5 ], 
      [ 10 ], [ 0, 1 ], 
      [ 7, 3 ], [ 6, 4 ], 
      [ 10 ], [ 2, 8, 6 ]];

    const scoring = new BowlingScorecard(scoreboard);
    scoring.calculateScore();
    
    expect(scoring.getScore()).toBe(133);
  });
})