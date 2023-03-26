const Frame = require('./frame')

describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  it('adds the pins score, when not a strike or spare', () => {
    frame.addRoll(4);
    frame.addRoll(4);
    expect(frame.getScore()).toEqual(8)
  })

  it('adds the pins score for a strike', () => {
    frame.addRoll(10);
    expect(frame.getScore()).toEqual(10)
  })

  it('adds the pins score for a spare', () => {
    frame.addRoll(6);
    frame.addRoll(4);
    expect(frame.getScore()).toEqual(10)
  })

  it('throws an error when too many pins are added to a frame', () => {
    frame.addRoll(6);
    frame.addRoll(4);
    expect(() => { frame.addRoll(3);}).toThrow('Frame is already complete');
  })
  
} 
)