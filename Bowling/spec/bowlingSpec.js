describe('Bowling Scorecard', () => {
  var bowling;

  beforeEach(() => {
    bowling = new Bowling();
  });

  it('.totalScore tracks total score, and starts at 0', () => {
    expect(bowling.totalScore).toEqual(0);
  });

  it('a bowling game consists of 10 frames', () => {
    expect(bowling.frames.length).toEqual(10);

    // expect(bowling.frames.reduce(
    //   (accumulator, current) => accumulator && (current instanceof Frame), true))
    //   .toBeTruthy();

    // allFrames.forEach((frame) => {
    //   console.log(frame);
    //   expect(frame).toEqual(jasmine.any(Frame));
    // });

    expect(bowling.frames[0] instanceof Frame).toBeTruthy();
  });
});
