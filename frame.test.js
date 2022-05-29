const Frame = require('./frame')

describe('frame class', () => {
  it('score is 0 and frame is complete when first roll and second roll are 0', () =>{
    const frame = new Frame;
    frame.countRoll(0);
    frame.countRoll(0);
    frame.calculateScore();
    expect(frame.score).toEqual(0);
    expect(frame.complete).toEqual(true);
  });
  it('frame incomplete if only one roll less than 10', () =>{
    const frame = new Frame;
    frame.countRoll(3);
    expect(frame.complete).toEqual(false);
  });
  it('score is 5 and frame is complete when first roll is 2 and second roll is 3', () =>{
    const frame = new Frame;
    frame.countRoll(2);
    frame.countRoll(3);
    frame.calculateScore();
    expect(frame.score).toEqual(5);
    expect(frame.complete).toEqual(true);
  });
  it('score is 0 (bonusCount = 2 to count next 2 rolls) and frame is complete when first roll is 10 (strike)', () =>{
    const frame = new Frame;
    frame.countRoll(10);
    frame.calculateScore();
    expect(frame.score).toEqual(0);
    expect(frame.complete).toEqual(true);
    expect(frame.bonusCount).toEqual(2);
  });
  it('score is 0 (bonusCount = 1 to count next roll) and frame is complete when spare', () =>{
    const frame = new Frame;
    frame.countRoll(4);
    frame.countRoll(6);
    frame.calculateScore();
    expect(frame.score).toEqual(0);
    expect(frame.complete).toEqual(true);
    expect(frame.bonusCount).toEqual(1);
  });
  describe('addBonusScore', () => {
    it('no bonus score is added from next rolls when no spare or strike', () => {
      const frame = new Frame;
      frame.countRoll(3);
      frame.countRoll(4);
      frame.addBonusScore(2);
      frame.calculateScore();
      expect(frame.score).toEqual(7);
    })
    it('bonus from next 2 rolls added when strike', () => {
      const frame = new Frame;
      frame.countRoll(10);
      frame.addBonusScore(4);
      frame.addBonusScore(5);
      frame.addBonusScore(2);
      frame.calculateScore();
      expect(frame.score).toEqual(19);
    })
    it('bonus from next roll added when spare', () => {
      const frame = new Frame;
      frame.countRoll(5);
      frame.countRoll(5);
      frame.addBonusScore(4);
      frame.addBonusScore(5);
      frame.calculateScore();
      expect(frame.score).toEqual(14);
    })
  })
});