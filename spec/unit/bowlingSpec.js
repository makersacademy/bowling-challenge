
describe ('Bowling', () => {
  describe('Bowling_&_Frame', () => {
    beforeEach(function () {
      bowling = new Bowling();
      frame = new Frame();
    });

  it ('user scores a gutter game', () => {
    for (let i = 0; i < 10; i ++) {
      frame.addRoll(0);
      frame.addRoll(0);
      bowling.addFrame(frame.frameScore());
    }
    expect(bowling.score()).toEqual(0)
  });

  it ('user receives score after 1 frame', () => {
    frame.addRoll(4)
    frame.addRoll(4)
    bowling.addFrame(frame.frameScore())
    expect(bowling.score()).toEqual(8)
  });

  it ('gives the user a spare bonus', () => {
    frame.addRoll(5);
    frame.addRoll(5);
    bowling.addFrame(frame.frameScore(), frame)
    frame.addRoll(3)
    //bonus points of 3 are added to the first frame
    frame.addRoll(3)
    bowling.addFrame(frame.frameScore(), frame)
    expect(bowling.score()).toEqual(19)
  })
})
});