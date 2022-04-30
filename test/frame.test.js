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
  it('return the score for three strikes', () => {
    var frame = new Frame([10]);
    var nextFrame = new Frame([10]);
    var next_to_next = new Frame([2, 1]);
    expect(frame.total(nextFrame, next_to_next)).toBe(22);
  });

  it("can deal with mutiple strikes in a row", function(){
    var frame = new Frame([10]);
    var next_to_next = new Frame([10]);
    var next_to_next_1 = new Frame([10]);
    expect(frame.total(next_to_next, next_to_next_1)).toEqual(30);
  });
  it ("all strikes in final frame", function(){
    var frame = new Frame([10,10,10]);
    expect(frame.total()).toEqual(30);
  });

  it('it can calaculate all strikes in final but score for 30 if there is strike before', ()=> {
    var frame = new Frame([10]);
    var next = new Frame([10,10,10]);
    expect(frame.total(next)).toEqual(30);
  });
});