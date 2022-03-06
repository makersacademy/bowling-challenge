/* eslint-disable */
describe ("Frame", () => {
  
  beforeEach(() => {
    frame = new Frame(1);
  });

  it ('is expected to init with nested score class and round num', () => {
    expect(frame.score).toBeInstanceOf(Score)
    expect(frame.round).toEqual(1)
  })

  it ('is expected to pass first rolls and second rolls to score', () => {
    frame.firstRoll(5)
    frame.secondRoll(5)
    expect(frame.score.firstRollPins).toEqual(5)
    expect(frame.score.secondRollPins).toEqual(5)
    expect(frame.isSpare).toEqual(true)
  })

  it ('can correctly calculate score when not strike or spare', () => {
    frame.firstRoll(5)
    frame.secondRoll(3)
    expect(frame.frameScore).toEqual(8)
  })

}) 