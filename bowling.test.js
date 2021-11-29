const Bowling = require("./bowling");

beforeEach(() => {
  bowling = new Bowling();
});
describe("constructor function", () => {
  test("initialize with default values we want to see before any method", () => {
    expect(bowling.gameArray).toEqual([]);
    expect(bowling.roundArray).toEqual([]);
    expect(bowling.firstBowl).toBeNull();
    expect(bowling.secondBowl).toBeNull();
  });
});
describe("addFirstBowl function", () => {
  test("should give firstBowl a value of 5", () => {
    bowling.addFirstBowl(5);
    expect(bowling.firstBowl).toEqual(5);
  });
});
describe("addSecondBowl function", () => {
  test("should give secondBowl a value of 5", () => {
    bowling.addSecondBowl(5);
    expect(bowling.secondBowl).toEqual(5);
  });
});
