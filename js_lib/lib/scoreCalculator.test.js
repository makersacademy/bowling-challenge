const ScoreCalculator = require('./scoreCalculator');

describe('ScoreCalculator', () => {
  it('should calculate score correctly with all strikes', () => {
    const frames = [
      [10, 0], 
      [10, 0], 
      [10, 0], 
      [10, 0], 
      [10, 0], 
      [10, 0], 
      [10, 0], 
      [10, 0], 
      [10, 0], 
      [10, 10, 10],
    ];

    const score = ScoreCalculator.calculate_score(frames);

    expect(score).toBe(300);
  });

  it('should calculate score correctly with all spares', () => {
    const frames = [
      [5, 5, 0],
      [5, 5, 0],
      [5, 5, 0],
      [5, 5, 0],
      [5, 5, 0],
      [5, 5, 0],
      [5, 5, 0],
      [5, 5, 0],
      [5, 5, 0],
      [5, 5, 5],
    ];

    const score = ScoreCalculator.calculate_score(frames);

    expect(score).toBe(150);
  });

  it('calculates the score for a game without strikes or spares', () => {
    const frames = [
      [2, 3],
      [4, 5],
      [6, 3],
      [1, 4],
      [5, 2],
      [3, 6],
      [4, 2],
      [1, 3],
      [5, 3],
      [2, 1],
    ];

    const score = ScoreCalculator.calculate_score(frames);

    expect(score).toBe(65);
  });

  it('should calculate score correctly with a mix of strikes, spares, and open frames', () => {
    const frames = [
      [10, 0, 0],
      [7, 3, 0],
      [9, 0, 0],
      [0, 10, 0],
      [10, 0, 0],
      [10, 0, 0],
      [2, 3, 0],
      [8, 1, 0],
      [10, 0, 0],
      [10, 9, 0],
    ];

    const score = ScoreCalculator.calculate_score(frames);

    expect(score).toBe(167);
  });

  it('should calculate the score for a game with strikes and spares and the thrid roll on the tenth frame', () => {
    const frames = [
      [10, 0, 0],
      [7, 3, 0],
      [9, 0, 0],
      [0, 10, 0],
      [10, 0, 0],
      [10, 0, 0],
      [2, 3, 0],
      [8, 1, 0],
      [10, 0, 0],
      [10, 10, 10],
    ];

    const score = ScoreCalculator.calculate_score(frames);

    expect(score).toBe(179);
  });
});
