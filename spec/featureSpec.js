'use strict'

describe('Feature tests: The app', () => {
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

  it('can score a game with 1 strike', () =>{
    scoreCard.recordScore(1, 1);
    scoreCard.recordScore(10, 0);
    for(let i = 3 ; i < 11 ; i++){
      scoreCard.recordScore(1, 1);
    }
    
    expect(scoreCard.experiment()).toEqual(30);
  });
  
  it('can score a game with 2 consecutive strikes', () =>{
    scoreCard.recordScore(1, 1);
    scoreCard.recordScore(10, 0);
    scoreCard.recordScore(10, 0);
    for(let i = 4 ; i < 11 ; i++){
      scoreCard.recordScore(2, 3);
    }
    expect(scoreCard.experiment()).toEqual(74);
  });
  
  it('can score a game with 3 consecutive strikes', ()=>{
    scoreCard.recordScore(1, 1);
    scoreCard.recordScore(1, 1);
    scoreCard.recordScore(10, 0);
    scoreCard.recordScore(10, 0);
    scoreCard.recordScore(10, 0);
    for(let i = 6 ; i < 11 ; i++){
      scoreCard.recordScore(1, 1);
    }
    
    expect(scoreCard.experiment()).toEqual(77);
  })

  it('can score a game with 1 spare', () => {
    scoreCard.recordScore(5, 5);
    for(let i = 2 ; i < 11 ; i++){
      scoreCard.recordScore(1, 1);
    }    
    expect(scoreCard.experiment()).toEqual(29);
  });

  it('can score a game with 2 consecutive spares', () => {
    scoreCard.recordScore(5, 5);
    scoreCard.recordScore(5, 5);
    for(let i = 3 ; i < 11 ; i++){
      scoreCard.recordScore(1, 1);
    }        
    expect(scoreCard.experiment()).toEqual(42);
  });

  it('can score a game with 3 consecutive spares', () => {
    scoreCard.recordScore(5, 5);
    scoreCard.recordScore(5, 5);
    scoreCard.recordScore(5, 5);
    for(let i = 4 ; i < 11 ; i++){
      scoreCard.recordScore(1, 1);
    }        
    expect(scoreCard.experiment()).toEqual(55);
  });

  it('can score a game with a consecutive strike and spare', () => {
    scoreCard.recordScore(5, 5);
    scoreCard.recordScore(10, 0);
    for(let i = 3 ; i < 11 ; i++){
      scoreCard.recordScore(1, 1);
    }  
    expect(scoreCard.experiment()).toEqual(48);
  });

  it('can score a game with 2 consecutive strikes and spares', () =>{
    scoreCard.recordScore(5, 5);
    scoreCard.recordScore(5, 5);
    scoreCard.recordScore(10, 0);
    scoreCard.recordScore(10, 0);
    for(let i = 5; i < 11 ; i++){
      scoreCard.recordScore(1, 1);
    }    
    expect(scoreCard.experiment()).toEqual(80);
  });

  it('can take 3 rolls in case of a strike or spare', () => {
    scoreCard.recordScore(1, 1);
    scoreCard.recordScore(1, 1);
    scoreCard.recordScore(10, 0);
    for(let i = 4; i < 10 ; i++){
      scoreCard.recordScore(1, 1);
    }
    scoreCard.recordScore(6, 4, 1);

    expect(scoreCard.experiment()).toEqual(39);

  });

  it('can score a game with 3 strikes to finish', () =>{
    for(let i = 1; i < 10 ; i++){
      scoreCard.recordScore(1, 1);
    }
    scoreCard.recordScore(10, 10, 10);
    expect(scoreCard.experiment()).toEqual(48);
  });

});