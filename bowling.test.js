const Bowling = require("./bowling");
const Frame = require("./frame");

beforeEach(() => {
  bowling = new Bowling();
});

describe("Bowling", () => {
  it("initially returns a score of 0", () => {
    expect(bowling.totalScore()).toEqual(0);
  });

  it("adds a single frame with no spares or strikes", () => {
    let frame = new Frame();
    frame.roll(5);
    frame.roll(2);
    frame.totalScore;
    bowling.add(frame);
    expect(bowling.frames.length).toEqual(1);
  });

  it("adds three frames with no spares or strikes", () => {
    let frame1 = new Frame();
    frame1.roll(5);
    frame1.roll(2);
    bowling.add(frame1);
    let frame2 = new Frame();
    frame2.roll(4);
    frame2.roll(1);
    bowling.add(frame2);
    let frame3 = new Frame();
    frame3.roll(9);
    frame3.roll(0);
    bowling.add(frame3);
    expect(bowling.frames.length).toEqual(3);
  });

  it("scores a single frame with no pins knocked down", () => {
    let frame = new Frame();
    frame.roll(0);
    frame.roll(0);
    bowling.add(frame);
    bowling.sum();
    expect(bowling.totalScore()).toEqual(0);
  });

  it("scores a single frame with no pins knocked down", () => {
    let frame = new Frame();
    frame.roll(0);
    frame.roll(0);
    bowling.add(frame);
    bowling.sum();
    expect(bowling.totalScore()).toEqual(0);
  });

  it("scores three frames with no strikes or spares", () => {
    let frame1 = new Frame();
    frame1.roll(5);
    frame1.roll(2);
    bowling.add(frame1);
    bowling.sum();
    let frame2 = new Frame();
    frame2.roll(4);
    frame2.roll(1);
    bowling.resetCurrentFrame();
    bowling.add(frame2);
    bowling.sum();
    let frame3 = new Frame();
    frame3.roll(9);
    frame3.roll(0);
    bowling.resetCurrentFrame();
    bowling.add(frame3);
    bowling.sum();
    expect(bowling.totalScore()).toEqual(21);
  });

  it("doesnt score a spare until the next frame", () => {
    let frame1 = new Frame();
    frame1.roll(5);
    frame1.roll(5);
    bowling.add(frame1);
    bowling.sum();
    expect(bowling.totalScore()).toEqual(0);
  });

  it("correctly scores a spare", () => {
    let frame1 = new Frame();
    frame1.roll(5);
    frame1.roll(5);
    bowling.add(frame1);
    bowling.checkSpare();
    bowling.sum();
    let frame2 = new Frame();
    frame2.roll(4);
    frame2.roll(1);
    bowling.resetCurrentFrame();
    bowling.add(frame2);
    bowling.checkSpare();
    bowling.sum();
    expect(bowling.totalScore()).toEqual(19);
  });

  xit("can correctly score a spare in 3 frames", () => {
    let frame1 = new Frame();
    frame1.roll(2);
    frame1.roll(5);
    bowling.add(frame1);
    bowling.checkSpare();
    bowling.sum();
    expect(bowling.totalScore()).toEqual(7);
    let frame2 = new Frame();
    frame2.roll(7);
    frame2.roll(3);
    bowling.resetCurrentFrame();
    bowling.add(frame2);
    bowling.checkLastSpare();
    bowling.checkSpare();
    bowling.sum();
    let frame3 = new Frame();
    frame3.roll(6);
    frame3.roll(3);
    bowling.resetCurrentFrame();
    bowling.add(frame3);
    bowling.checkSpare();
    bowling.sum();
    expect(bowling.totalScore()).toEqual(32);
  });

  it("doesnt score a strike until the next frame", () => {
    let frame1 = new Frame();
    frame1.roll(10);
    frame1.roll(0);
    bowling.add(frame1);
    bowling.checkSpare();
    bowling.sum();
    expect(bowling.totalScore()).toEqual(0);
  });
});
