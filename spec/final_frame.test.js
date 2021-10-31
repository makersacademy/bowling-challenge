const { describe } = require('jest-circus');
const FinalFrame = require('../src/final_frame');

describe('final frame', () => {
  const frame = new FinalFrame();

  test('sets rolls at null', () => {
    expect(frame.first_roll).toEqual(null);
    expect(frame.second_roll).toEqual(null);
    expect(frame.third_roll).toEqual(null);
  });

  test('updates first roll', () => {
    frame.firstRoll(3);
    expect(frame.first_roll).toEqual(3);
  });

  test('score updates with first roll', () => {
    expect(frame.score).toEqual(3);
  });

  test('updates second roll', () => {
    frame.secondRoll(4);
    expect(frame.second_roll).toEqual(4);
  });

  test('score updates with second roll', () => {
    expect(frame.score).toEqual(7);
  });
});
