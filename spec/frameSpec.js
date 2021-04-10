describe("Frame", () => {
  beforeEach(() => {
    frame = new Frame();
  });

  it ("Strike if roll 10 in first go", () => {
    frame.roll(10);
    expect(frame.pinsLeft).toEqual(0);
    expect(frame.score).toEqual(10);
    expect(frame.result).toEqual("Strike");
    expect(frame.rolls[0]).toEqual(10);
  });

  it ("Spare if roll 10 in two rolls", () => {
    frame.roll(5);
    expect(frame.pinsLeft).toEqual(5);
    expect(frame.rolls[0]).toEqual(5);
    frame.roll(5);
    expect(frame.pinsLeft).toEqual(0);
    expect(frame.score).toEqual(10);
    expect(frame.result).toEqual("Spare");
    expect(frame.rolls[1]).toEqual(5);
  });

  it ("Can not roll more than pinsLeft", () => {
    expect(function() {frame.roll(11)}).toThrow("Not enough pins left");
  })

  it ("can reset pinsLeft (for bonus roll)", () => {
    expect(frame.pinsLeft).toEqual(10);
    frame.setPins(5);
    expect(frame.pinsLeft).toEqual(5);
  });

  it ("can add score (for adjust scores for past strike/spare frames)", () => {
    expect(frame.score).toEqual(0);
    frame.addScore(6);
    expect(frame.score).toEqual(6);
  })

});
