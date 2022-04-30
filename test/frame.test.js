let Frame = require('../lib/frames');

describe('frames', () => {
  it('return total of frame', () => {
    let frame = new Frame([3,4]);
    expect(frame.total()).toBe(7);
  });

  it('return the total of spare frame', () =>{
    let frame = new Frame([4,6]);
    let nextFrame = new Frame([1,2]);
    expect(frame.total(nextFrame)).toBe(11);
  });

  it('return the strike total', () => {
    var frame = new Frame([10]);
    var nextFrame = new Frame([2,0]);
    expect(frame.total(nextFrame)).toBe(12)
  });
});