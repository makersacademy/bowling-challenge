describe('Bowling Scorecard', () => {
  let bowling;
  let framesArray;

  beforeEach(() => {
    bowling = new Bowling();
    framesArray = bowling.frames;
  });

  it('.totalScore tracks total score, and starts at 0', () => {
    expect(bowling.totalScore).toEqual(0);
  });

  it('a bowling game consists of 10 frames', () => {
    expect(framesArray.length).toEqual(10);
    // expect(framesArray.every(frame => frame instanceof Frame)).toBeTruthy();
    for (const frame of bowling.frames) {
      expect(frame instanceof Frame).toBeTruthy();
    }
  });

  it('every Frame is numbered', () => {

  });
});
