
describe ('Bowling', () => {
  it ('user scores a gutter game', () => {
    bowling = new Bowling();
    frame = new Frame(4, 0);
    for (let i = 0; i < 10; i ++) {
      bowling.addFrame(frame.frameScore());
    }
    expect(bowling.score).toEqual(40)
  });
})