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
  test("should call finishRound function if a 10 is rolled", () => {
    bowling.addFirstBowl(10);
    expect(bowling.gameArray).toEqual([[10]]);
  })
})
describe("addSecondBowl function", () => {
  test("should set secondBowl to 6 and call finishRound function", () => {
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
describe("isStrike function", () => {
  test("test whether a round is a strike", () => {
    bowling.addFirstBowl(10);
    expect(bowling.isStrike(1)).toEqual(true);
  })
})
describe("isSpare function", () => {
  test("test whether a round is a spare", () => {
    bowling.addFirstBowl(6);
    bowling.addSecondBowl(4);
    expect(bowling.isSpare(1)).toEqual(true);
  })
})
describe(".calculateRoundScore", () => {
  test("should add scores from round with any bonus points", () => {
    bowling.addFirstBowl(5)
    bowling.addSecondBowl(4)
    expect(bowling.calculateRoundScore(1)).toEqual(9)
  })
  test("should return incomplete if round is not finished", () => {
    bowling.addFirstBowl(5)
    expect(bowling.calculateRoundScore(1)).toEqual(null)
  })
  test("should return incomplete if bonus points are not calculated by next round yet", () => {
    bowling.addFirstBowl(10)
    expect(bowling.calculateRoundScore(1)).toEqual(null)
  })
  test("should return add scores and give bonus point if round was a spare", () => {
    bowling.addFirstBowl(5)
    bowling.addSecondBowl(5)
    bowling.addFirstBowl(5)
  expect(bowling.calculateRoundScore(1)).toEqual(15)
  })
  test("should return add scores and give bonus points if round was a strike", () => {
    bowling.addFirstBowl(10)
    bowling.addFirstBowl(5)
    bowling.addSecondBowl(4)
    console.log(bowling.gameArray);
    expect(bowling.calculateRoundScore(1)).toEqual(19)
  })
})
describe(".calculate_total_score", () => {
  test("should sum all elements of the game_array and save to total_score", () => {
    bowling.addFirstBowl(5)
    bowling.addSecondBowl(4)
    bowling.addFirstBowl(5)
    bowling.addSecondBowl(4)
    bowling.addFirstBowl(5)
    bowling.addSecondBowl(4)
    console.log(bowling.gameArray);
    console.log(bowling.roundCounter);
    expect(bowling.calculateTotalScore()).toEqual(27)
  })
})
describe("endGame function", () => {
  test("should end the game after 10 rounds have been completed", () => {
    for(let i = 0; i < 9; i++){
      bowling.addFirstBowl(10);
    }
    bowling.addFirstBowl(5)
    bowling.addSecondBowl(4)
    expect(bowling.endGame()).toEqual("You have finished your game! Your final score was: 263")
  })
})