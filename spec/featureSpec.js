'use strict'

describe('Features', () => {
  const ScoreCard = require('../src/scoreCard')
  let scoreCard;

  beforeEach(() => {
    scoreCard = new ScoreCard();
  });

  it('completes a game after 20 rolls of 0', () => {
    for(let i = 1 ; i < 11 ; i++){
      return scoreCard.recordScore(i, 0, 0);
    };
    expect(scoreCard.isGameComplete()).toEqual(true);
    expect(scoreCard.totalScore()).toEqual(0);
  });

  it('can score a game without any strikes or spares accurately', () => {
    for(let i = 1 ; i < 11 ; i++){
      return scoreCard.recordScore(i, 2, 3);
    };
    expect(scoreCard.isGameComplete()).toEqual(true);
    expect(scoreCard.finalScore()).toEqual(50);
  });

  // it('can score a game with that starts with a strike', () => {
  //   scoreCard.recordScore(1, 10, 0);
  //   for(let i = 1 ; i < 10 ; i++){
  //     return scoreCard.recordScore(2, 1, 1);
  //   }
  //   expect(scoreCard.scoreArray).toEqual([ [1, 10, 0], [2, 1, 1] ]);
  //   expect(scoreCard.finalScore()).toEqual(14);
  // });

  it('can score a game with 1 strike', () =>{
    scoreCard.recordScore(10, 0);
    for(let i = 3 ; i < 11 ; i++){
      scoreCard.recordScore(i, 1, 1);
    }
    
    expect(scoreCard.experiment()).toEqual(30);
    expect(scoreCard.finalScore()).toEqual(30);
  });
  
  it('can score a game with 2 consecutive strikes', () =>{
    scoreCard.recordScore(1, 1, 1);
    scoreCard.recordScore(2, 10, 0);
    scoreCard.recordScore(3, 10, 0);
    for(let i = 4 ; i < 11 ; i++){
      scoreCard.recordScore(i, 1, 1);
    }
    expect(scoreCard.experiment()).toEqual(49);
    expect(scoreCard.finalScore()).toEqual(49);
  });



});