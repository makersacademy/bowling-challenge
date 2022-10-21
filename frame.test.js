const Frame = require('./frame');

describe('Frame', () => {
  it('Adds roll 1 and 2', () => {
    let frame1 = new Frame();
    frame1.addRoll(2);
    frame1.addRoll(4);
    expect(frame1.roll1).toEqual(2);
    expect(frame1.roll2).toEqual(4);
  });

  it('When strike / strike true', () => {
    let frame1 = new Frame();
    frame1.addRoll(10);
    expect(frame1.roll1).toEqual(10);
    expect(frame1.strike).toEqual(true);
  });

  it('When spare / spare true', () => {
    let frame1 = new Frame();
    frame1.addRoll(4);
    frame1.addRoll(6);
    expect(frame1.roll1).toEqual(4);
    expect(frame1.roll2).toEqual(6);
    expect(frame1.total()).toEqual(10);
    expect(frame1.spare).toEqual(true);
  });
});
