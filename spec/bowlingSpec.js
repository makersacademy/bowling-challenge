describe("Bowling", () => {
  beforeEach(() => {
    bowling = new Bowling();
  });

  it("New frame after 2 rolls (no strike or spare)", () => {
    expect(bowling.frames.length).toEqual(1);
    bowling.roll(1);
    expect(bowling.frames.length).toEqual(1);
    bowling.roll(4);
    expect(bowling.frames.length).toEqual(2);
  });

  it("New frame after 2 rolls (spare)", () => {
    expect(bowling.frames.length).toEqual(1);
    bowling.roll(5);
    expect(bowling.frames.length).toEqual(1);
    bowling.roll(5);
    expect(bowling.frames.length).toEqual(2);
  });

  it("New frame after Strike", () => {
    expect(bowling.frames.length).toEqual(1);
    bowling.roll(10);
    expect(bowling.frames.length).toEqual(2);
  });

  it("gameStatus change from true to false after 10 frames of strike with 2 bonus roll", () => {
    for (i = 0; i < 11; i++) {
      bowling.roll(10);
      expect(bowling.gameStatus).toEqual(true);
    }
    bowling.roll(10);
    expect(bowling.gameStatus).toEqual(false);
  });

  it("Score 300 after 10 frames of strike with 2 bonus roll", () => {
    for (i = 0; i < 12; i++) {
      bowling.roll(10);
    }
    expect(bowling.totalScore).toEqual(300);
  });

  it("Example roll scores 133", () => {
    bowling.roll(1);
    bowling.roll(4);
    bowling.roll(4);
    bowling.roll(5);
    bowling.roll(6);
    bowling.roll(4);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(10);
    bowling.roll(0);
    bowling.roll(1);
    bowling.roll(7);
    bowling.roll(3);
    bowling.roll(6);
    bowling.roll(4);
    bowling.roll(10);
    bowling.roll(2);
    bowling.roll(8);
    bowling.roll(6);
    expect(bowling.totalScore).toEqual(133);
  });
});