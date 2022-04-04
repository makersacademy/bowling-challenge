const Frame = require('../../lib/frame');

describe('Frame class', () => {

  test('feedRoll method should feed a number into the this.rollHistoy instance variable', () => {
    const frame = new Frame;
    frame.feedRoll(10);
    expect(frame.rolls).toEqual([10])
  });
  
  test('calculateScore method should add the tree fist element of the rolls array if the sum of the first two elements of rolls the rolls array are morethan or equal to 10 ', () => {
    const frame = new Frame;
    frame.feedRoll(5);
    frame.feedRoll(5);
    frame.feedRoll(5);
    frame.calculateScore();
    expect(frame.rolls).toEqual([5, 5, 5])
    expect(frame.score).toEqual(15)
  });
  
  test('calculateScore method should add the tree fist element of the rolls array if the sum of the first two elements of rolls the rolls array are morethan or equal to 10 ', () => {
    const frame = new Frame;
    frame.feedRoll(5);
    frame.feedRoll(4);
    frame.feedRoll(5);
    frame.calculateScore();
    expect(frame.rolls).toEqual([5, 4, 5])
    expect(frame.score).toEqual(9)
  });


  
});
