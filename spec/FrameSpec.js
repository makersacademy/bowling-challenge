/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
describe('A frame of bowling', function () {  
  it('adds two rolls together', function () {
    let frame = new Frame([1, 3]);
    expect(frame.total()).toEqual(4);
  });

  it('adds a spare bonus', function () {
    let frame = new Frame([9, 1]);
    let nextFrame = new Frame([4, 1]);
    expect(frame.total(nextFrame)).toEqual(14);
  });

  it('adds a strike bonus', function  () {
    let frame = new Frame([10]);
    let nextFrame = new Frame([5, 1]);
    expect(frame.total(nextFrame)).toEqual(16);
  });

  it('calculates a total for two strikes in a row', function () {
    let frame = new Frame([10]);
    let nextFrame = new Frame([10]);
    let thirdFrame = new Frame([5, 1]);
    expect(frame.total(nextFrame, thirdFrame)).toEqual(25);
  });

  it ('calculates a strike in the final frame', function () {
    let frame = new Frame([10, 10, 10]);
    expect(frame.total()).toEqual(30);
  });

  it ('calculates a strike in the final frame but one', function () {
    let frame = new Frame([10]);
    let nextFrame = new Frame([10, 10, 10]);
    expect(frame.total(nextFrame)).toEqual(30);
  });
});
