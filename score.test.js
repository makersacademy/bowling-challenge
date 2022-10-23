const Score = require('./score');

describe('ScoreCard', () => {
  it ('returns the frame score without stirkes or spares', () => {
    const score = new Score();
    const mockedFrame = { 
      getSum: () => 9, 
      strike: () => false,
      spare: () => false  
    }

    score.add(mockedFrame);
    expect(score.frameScore(1)).toBe(9);
  });

  it ('returns the frame score with strike', () => {
    const score = new Score();
    const mockedFrame1 = { 
      getSum: () => 10, 
      strike: () => true,
      spare: () => false  
    }

    const mockedFrame2 = { 
      getSum: () => 7, 
      strike: () => false,
      spare: () => false  
    }

    score.add(mockedFrame1);
    score.add(mockedFrame2);
    expect(score.frameScore(1)).toBe(17);
  })

  it ('returns the frame score with spare', () => {
    const score = new Score();
    const mockedFrame1 = { 
      getSum: () => 10, 
      strike: () => false,
      spare: () => true  
    }

    const mockedFrame2 = { 
      rollOne: 3,
      rollTwo: 4,
      getSum: () => 7, 
      strike: () => false,
      spare: () => false  
    }

    score.add(mockedFrame1);
    score.add(mockedFrame2);
    expect(score.frameScore(1)).toBe(13);
  })

  it('returns the frame score with two consecutive strikes', () => {
    const score = new Score();
    const mockedFrame1 = { 
      getSum: () => 10, 
      strike: () => true,
      spare: () => false  
    }

    const mockedFrame2 = { 
      getSum: () => 10, 
      strike: () => true,
      spare: () => false  
    }

    const mockedFrame3 = { 
      rollOne: 3,
      rollTwo: 4,
      getSum: () => 7, 
      strike: () => false,
      spare: () => false  
    }

    score.add(mockedFrame1);
    score.add(mockedFrame2);
    score.add(mockedFrame3);
    
    expect(score.frameScore(1)).toBe(23);
  })

  it('returns the total score of a gutter game', () => {
    const score = new Score();
    const mockedFrame = { 
      getSum: () => 0, 
      strike: () => false,
      spare: () => false  
    }
    for (let i = 1 ; i <= 10 ; i++) {
      score.add(mockedFrame);
    }

    expect(score.getTotalScore()).toBe(0);
  })

  it('returns the total score of a full game', () => {
    const score = new Score();
    const mockedFrame = { 
      getSum: () => 9, 
      strike: () => false,
      spare: () => false  
    }

    for (let i = 1 ; i <= 10 ; i++) {
      score.add(mockedFrame);
    };

    expect(score.getTotalScore()).toBe(90);
  })

  it('returns the total score of the perfect game', () => {
    const score = new Score();
    const mockedFrame = { 
      getSum: () => 10, 
      strike: () => true,
      spare: () => false  
    }

    for (let i = 1 ; i <= 11 ; i++) {
      score.add(mockedFrame);
    };
    
    expect(score.getTotalScore()).toBe(300);
  })
})