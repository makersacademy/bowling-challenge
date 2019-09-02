const Frame = require("../frame.js")
const scoreCalculator = require("../score-calculator.js")


describe('Score Calculator', function () {
  it('it calculates the total of the frames', function () {
    const mockFrames = [
      new Frame(1, 2, 8),
      new Frame(2, 3, 7),
      new Frame(3, 0, 10),
      new Frame(4, 2, 8),
      new Frame(5, 3, 2),
      new Frame(6, 1, 5),
      new Frame(7, 5, 5),
      new Frame(8, 1, 8),
      new Frame(9, 10, 0),
      new Frame(10, 2, 6)
    ]
    expect(scoreCalculator(mockFrames)).toEqual(105)
  })
});