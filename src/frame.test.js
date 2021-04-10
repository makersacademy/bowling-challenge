import Frame from './frame.js';

let frame;

describe("Frame", () => {
  beforeEach(() => {
    frame = new Frame();
  });

  test ("Strike if roll 10 in first go", () => {
    frame.roll(10);
    expect(frame.pinsLeft).toEqual(0);
    expect(frame.score).toEqual(10);
    expect(frame.result).toEqual("Strike");
    expect(frame.rolls[0]).toEqual(10);
  });

  test ("Spare if roll 10 in two rolls", () => {
    frame.roll(5);
    expect(frame.pinsLeft).toEqual(5);
    expect(frame.rolls[0]).toEqual(5);
    frame.roll(5);
    expect(frame.pinsLeft).toEqual(0);
    expect(frame.score).toEqual(10);
    expect(frame.result).toEqual("Spare");
    expect(frame.rolls[1]).toEqual(5);
  });

  test ("Can not roll more than pinsLeft", () => {
    expect(function() {frame.roll(11)}).toThrow("Not enough pins left");
  })

  test ("can reset pinsLeft (for bonus roll)", () => {
    expect(frame.pinsLeft).toEqual(10);
    frame.setPins(5);
    expect(frame.pinsLeft).toEqual(5);
  });

  test ("can add score (for adjust scores for past strike/spare frames)", () => {
    expect(frame.score).toEqual(0);
    frame.addScore(6);
    expect(frame.score).toEqual(6);
  })

});