const Scorecard = require('./scorecard');

describe('Scorecard', () => {
  let scorecard;

  beforeEach(() => {
    scorecard = new Scorecard();
  });

  test('empty scorecard', () => {
    expect(scorecard.calculateScore()).toEqual(0);
  });

  test('the score after one frame', () => {
    scorecard.addFrame(1, 4);
    expect(scorecard.calculateScore()).toEqual(5);
  });

  test('the score when there is a strike in frame three', () => {
    scorecard.addFrame(1, 4);
    scorecard.addFrame(4, 5);
    scorecard.addFrame(10, 0);
    expect(scorecard.calculateScore()).toEqual(24);
  });

  test('the score when there is a strike in the previous frame', () => {
    scorecard.addFrame(1, 4);
    scorecard.addFrame(4, 5);
    scorecard.addFrame(10, 0);
    scorecard.addFrame(5, 3);
    expect(scorecard.calculateScore()).toEqual(40);
  });

  test('the score when there is a spare in frame three', () => {
    scorecard.addFrame(1, 4);
    scorecard.addFrame(4, 5);
    scorecard.addFrame(6, 4);
    expect(scorecard.calculateScore()).toEqual(24);
  });

  test('the score when there is a spare in the previous frame', () => {
    scorecard.addFrame(1, 4);
    scorecard.addFrame(4, 5);
    scorecard.addFrame(6, 4);
    scorecard.addFrame(5, 3);
    expect(scorecard.calculateScore()).toEqual(37);
  });

  test('the score when there is no strike or spare in the tenth frame', () => {
    scorecard.addFrame(1, 4);
    scorecard.addFrame(4, 5);
    scorecard.addFrame(6, 4);
    scorecard.addFrame(5, 5);
    scorecard.addFrame(10, 0);
    scorecard.addFrame(0, 1);
    scorecard.addFrame(7, 3);
    scorecard.addFrame(6, 4);
    scorecard.addFrame(10, 0);
    scorecard.addFrame(2, 2);
    expect(scorecard.calculateScore()).toEqual(115);
  });
});