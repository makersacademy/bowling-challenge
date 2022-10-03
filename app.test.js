const { randomFillSync } = require('crypto');
const Application = require('./app');

describe('Application', () => {
  it('returns the correct scores for all rounds if there are no strikes and spares', () => {
    let i = -1;
    const fakeRollInput = {
      // returns a the next number in the array every time it is called
      getRoll: () => {
        const rolls = [3, 5, 6, 3, 0, 0, 2, 3, 7, 2, 5, 4, 6, 1, 0, 2, 2, 3, 5, 1];
        i++;
        return rolls[i];
      }
    }
    app = new Application(fakeRollInput);
    app.run();
    expect(app.frames[0].score).toBe(8);
    expect(app.frames[1].score).toBe(9);
    expect(app.frames[2].score).toBe(0);
    expect(app.frames[3].score).toBe(5);
    expect(app.frames[4].score).toBe(9);
    expect(app.frames[5].score).toBe(9);
    expect(app.frames[6].score).toBe(7);
    expect(app.frames[7].score).toBe(2);
    expect(app.frames[8].score).toBe(5);
    expect(app.frames[9].score).toBe(6);
  });

  it('returns the correct scores and bonuses for strikes and spares if they are on their own', () => {
    let i = -1;
    const fakeRollInput = {
      // returns a the next number in the array every time it is called
      getRoll: () => {
        const rolls = [3, 4, 7, 3, 3, 4, 9, 0, 10, 2, 6, 5, 5, 0, 0, 10, 5, 1];
        i++;
        return rolls[i];
      }
    }
    app = new Application(fakeRollInput);
    app.run();
    expect(app.frames[0].score).toBe(7);
    expect(app.frames[1].score).toBe(13);
    expect(app.frames[2].score).toBe(7);
    expect(app.frames[3].score).toBe(9);
    expect(app.frames[4].score).toBe(18);
    expect(app.frames[5].score).toBe(8);
    expect(app.frames[6].score).toBe(10);
    expect(app.frames[7].score).toBe(0);
    expect(app.frames[8].score).toBe(16);
    expect(app.frames[9].score).toBe(6);
  });
});