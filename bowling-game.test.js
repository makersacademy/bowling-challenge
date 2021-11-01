const BowlingGame = require('./bowling-game');
const Frame = require('./frame');

const fiveFive = jest.fn().mockImplementation(() => {
  rolls = [5, 5];
  frameSum = 10;
  isStrike = false;
  isSpare = true;
});

let sevenThree = new Frame()
sevenThree.addRoll(7);
sevenThree.addRoll(3);


let game1 = new BowlingGame()
let game2 = new BowlingGame()

describe("addFrame", () => {
  it('adds an object to the frames array', () => {
    game1.addFrame(fiveFive);
    expect(game1.frames[0]).toBe(fiveFive);
  });
});

describe("nextFrame", () => {
  it('accesses the next frame in the frame array to the one passed', () => {
    game2.addFrame(fiveFive);
    game2.addFrame(sevenThree);
    expect(game2.nextFrame(fiveFive)).toBe(sevenThree);
  })
});

describe("spareBonus", () => {
  it("returns the first roll of the next frame", () => {
    game2.addFrame(sevenThree);
    expect(game2.spareBonus(fiveFive)).toBe(7);
  })
});

describe("strike", () => {
  it("returns a sum of the next 2 rolls", () => {
    game2.addFrame(sevenThree);
    expect(game2.strikeBonus(fiveFive)).toBe(10);
  })
});