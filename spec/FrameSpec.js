/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
describe('A frame of bowling', function () {
  it('adds two rolls together', function () {
    const frame = new Frame([1, 3]);
    expect(frame.total()).toEqual(4);
  });

  it('adds a spare bonus', function () {
    const frame = new Frame([9, 1]);
    const nextFrame = new Frame([4, 1]);
    expect(frame.total(nextFrame)).toEqual(14);
  });
});
