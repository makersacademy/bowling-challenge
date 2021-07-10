
describe ('Bowling', () => {
  it ('user scores a gutter game', () => {
    let bowling = new Bowling();
    frame = new Frame
    for (let i = 0; i < 10; i ++) {
      frame.addRoll(0);
      frame.addRoll(0);
      bowling.addFrame(frame._frameScore());
    }
    expect(bowling.score()).toEqual(0)
  });

  it ('user receives score after 1 frame', () => {
    let bowling = new Bowling
    spyOn(bowling, 'score').and.returnValue(8)
    expect(bowling.score()).toEqual(8)
  });

  it ('gives the user a spare bonus', () => {
    bowling = new Bowling
    let frame = new Frame
    frame.addRoll(5);
    frame.addRoll(5);
    frame.addRoll(5);
    bowling.addFrame(frame._frameScore())
    bowling.isSpare(frame);
    expect(bowling.score()).toEqual(15)
  })
});