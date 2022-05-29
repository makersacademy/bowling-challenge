const SpecialFrame = require('./specialFrame');

describe('special frame (frame 10) class', () => {
  it('score=0 and frame complete when first roll and second roll are 0', () =>{
    const frame = new SpecialFrame;
    frame.countRoll(0);
    frame.countRoll(0);
    frame.calculateScore();

    expect(frame.score).toEqual(0);
    expect(frame.complete).toEqual(true);
  });
  it('when strike, frame not complete. 2 more rolls and add to score', () =>{
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
  it('when spare, frame not complete until 1 more roll and add to score', () =>{
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
});
