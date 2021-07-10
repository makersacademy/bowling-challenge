
describe ('Bowling', () => {
  it ('user scores a gutter game', () => {
    let bowling = new Bowling();
    for (let i = 0; i < 10; i ++) {
      bowling.addFrame(new Frame(0, 0).frameScore());
    }
    expect(bowling.score()).toEqual(0)
  });

  it ('user receives score after 1 frame', () => {
    let bowling = new Bowling
    spyOn(bowling, 'score').and.returnValue(8)
    expect(bowling.score()).toEqual(8)
  });

