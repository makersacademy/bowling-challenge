const calculateScore = require('./scoring')

describe('calculateScore', () => {
  it('calculates score without bonuses', () => {
    const userInput = [
      [3, 5], 
      [9, 0], 
      [5, 4], 
      [2, 3],
      [5, 4],
      [1, 6],
      [0, 9], 
      [8, 1],
      [9, 0],
      [2, 1]
    ];
    expect(calculateScore(userInput)).toEqual(77);
  });

  it('calculates score with strike bonus', () => {
    const userInput = [
      [3, 5], 
      [10, 0], // strike - adds next [5,4]
      [5, 4]
    ];
    expect(calculateScore(userInput)).toEqual(36);
  });

  it('calculates the score with spare bonus', () => {
    const userInput = [
      [3, 4],
      [8, 2], // spare - adds next [5]
      [5, 4]
    ];
    expect(calculateScore(userInput)).toEqual(31);
  });

  it('calculates the score with a spare and a strike', () => {
    const userInput = [
      [8, 2], // spare - adds next [3]
      [3, 4],
      [10, 0], // strike - adds next [5,4]
      [5, 4]
    ];
    expect(calculateScore(userInput)).toEqual(48);
  });
  
  it('calculates the score with zero points', () => {
    const userInput = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ];
    expect(calculateScore(userInput)).toEqual(0);
  });

  it('calculates the score with 10th frame strike, followed by 2 bonus rolls (strike each', () => {
    userInput = [
      [3, 5], 
      [9, 0], 
      [5, 4], 
      [2, 3],
      [5, 4],
      [1, 6],
      [0, 9], 
      [8, 1],
      [9, 0],
      [10, 0], // 10th frame strike
      [10, 10] // 2 bonus rolls, strike each
    ];
    expect(calculateScore(userInput)).toEqual(104);
  });

  it('calculates the score with 10th frame strike, followed by 2 bonus rolls (totalling 10', () => {
    userInput = [
      [3, 5], 
      [9, 0], 
      [5, 4], 
      [2, 3],
      [5, 4],
      [1, 6],
      [0, 9], 
      [8, 1],
      [9, 0],
      [10, 0], // 10th frame strike
      [2, 8] // 2 bonus rolls, strike 
    ];
    expect(calculateScore(userInput)).toEqual(94);
  });
  
  it('calculates the score with 10th frame spare, followed by 1 bonus roll', () => {
    userInput = [
      [3, 5], 
      [9, 0], 
      [5, 4], 
      [2, 3],
      [5, 4],
      [1, 6],
      [0, 9], 
      [8, 1],
      [9, 0],
      [5, 5], // 10th frame spare
      [2, 0] // 1 bonus roll
    ];
    expect(calculateScore(userInput)).toEqual(86);
  });

  it('calculates the score with 10th frame spare, followed by 1 bonus roll (with a strike)', () => {
    userInput = [
      [3, 5], 
      [9, 0], 
      [5, 4], 
      [2, 3],
      [5, 4],
      [1, 6],
      [0, 9], 
      [8, 1],
      [9, 0],
      [5, 5], // 10th frame spare
      [10, 0] // 1 bonus roll, strike
    ];
    expect(calculateScore(userInput)).toEqual(94);
  });
});