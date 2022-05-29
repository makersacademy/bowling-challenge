const ScoreCard = require('./scoreCard');

describe('ScoreCard class', () => {
  it('gutter game (20 zero scores) gives a score of 0', () =>{
    const card = new ScoreCard;
    for(i = 0; i < 20 ; i ++) {
      card.includingRollResult(0);
    }

    expect(card.score).toEqual(0);
  });

  it('perfect game (12 strikes) gives a score of 300', () =>{
    const card = new ScoreCard;
    for(let i = 0; i < 12 ; i ++) {
      card.includingRollResult(10);
    }

    expect(card.score).toEqual(300);
  });

  it('Game with all spares (example: 21 rolls  kncking 5 pins) gives a score of 150', () =>{
    const card = new ScoreCard;
    for(let i = 0; i < 21 ; i ++) {
      card.includingRollResult(5);
    }

    expect(card.score).toEqual(150);
  });

  it('Gives right result on test game 1', () => {
    const card = new ScoreCard;
    card.includingRollResult(10);
    card.includingRollResult(4);
    card.includingRollResult(6);
    card.includingRollResult(10);
    card.includingRollResult(10);
    card.includingRollResult(0);
    card.includingRollResult(0);
    card.includingRollResult(6);
    card.includingRollResult(2);
    card.includingRollResult(10);
    card.includingRollResult(2);
    card.includingRollResult(6);
    card.includingRollResult(10);
    card.includingRollResult(3);
    card.includingRollResult(3);

    expect(card.score).toEqual(126)
  });

  it('Gives right result on test game 2', () => {
    const card = new ScoreCard;
    card.includingRollResult(3);
    card.includingRollResult(4);
    card.includingRollResult(1);
    card.includingRollResult(9);
    card.includingRollResult(0);
    card.includingRollResult(10);
    card.includingRollResult(3);
    card.includingRollResult(6);
    card.includingRollResult(10);
    card.includingRollResult(10);
    card.includingRollResult(2);
    card.includingRollResult(6);
    card.includingRollResult(4);
    card.includingRollResult(3);
    card.includingRollResult(3);
    card.includingRollResult(2);
    card.includingRollResult(7);
    card.includingRollResult(3);
    card.includingRollResult(1);

    expect(card.score).toEqual(110)
  });

})