const SpecialFrame = require('./specialFrame')

describe('special frame (frame 10) class', () => {
  it('score is 0 and frame is complete when first roll and second roll are 0', () =>{
    const frame = new SpecialFrame;
    frame.countRoll(0);
    frame.countRoll(0);
    frame.calculateScore();

    expect(frame.score).toEqual(0);
    expect(frame.complete).toEqual(true);
  });
  it('when strike (on first roll), frame is not complete until 2 more rolls and add those to the score', () =>{
    const frame = new SpecialFrame;
    frame.countRoll(10);

    expect(frame.complete).toEqual(false);

    frame.countRoll(2);

    expect(frame.complete).toEqual(false);

    frame.countRoll(5);
    frame.calculateScore();

    expect(frame.score).toEqual(17);
    expect(frame.complete).toEqual(true);
  });
  it('when spare, frame is not complete until 1 more roll and add that to the score', () =>{
    const frame = new SpecialFrame;
    frame.countRoll(5);

    expect(frame.complete).toEqual(false);

    frame.countRoll(5);

    expect(frame.complete).toEqual(false);

    frame.countRoll(10);
    frame.calculateScore();

    expect(frame.score).toEqual(20);
    expect(frame.complete).toEqual(true);
  });
})