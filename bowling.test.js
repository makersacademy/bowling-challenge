const Bowling = require('./bowling')


beforeEach(() => {
  bowling = new Bowling;
})
describe("constructor function", () => {
  test("initialize with default values", () => {
    expect(bowling.gameArray).toEqual([])
    expect(bowling.roundArray).toEqual([])
    expect(bowling.roundCounter).toEqual(1)
    expect(bowling.firstBowl).toBeNull()
    expect(bowling.secondBowl).toBeNull()
  });
});
describe("addFirstBowl function", () => {
  test("should give firstBowl a value of 5", () => {
    bowling.addFirstBowl(5);
    expect(bowling.firstBowl).toEqual(5);
  })
})
describe("addSecondBowl function", () => {
  test("should call finishRound function", () => {
    bowling.addSecondBowl(6);
    expect(bowling.gameArray).toEqual([[6]]);
  })
})
describe("finishRound function", () => {
  test("should push roundArray into gameArray", () => {
    bowling.roundArray = [4, 6];
    bowling.finishRound();
    expect(bowling.gameArray).toEqual([[4,6]]);
  })
})