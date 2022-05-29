const Frame = require('./frame')

describe('frame class', () => {
  it('score is 0 and frame is complete when first roll and second roll are 0', () =>{
    const frame = new Frame;
    frame.countRoll(0);
    frame.countRoll(0);
    frame.calculateScore();
    expect(frame.score).toEqual(0);
    expect(frame.complete).toEqual(true);
  })
  it('score is 5 and frame is complete when first roll is 2 and second roll is 3', () =>{
    const frame = new Frame;
    frame.countRoll(2);
    frame.countRoll(3);
    frame.calculateScore();
    expect(frame.score).toEqual(5);
    expect(frame.complete).toEqual(true);
  })
});