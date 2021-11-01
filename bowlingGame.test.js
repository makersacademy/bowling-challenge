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


let game = new BowlingGame()

describe("addFrame", () => {
  it('adds an object to the frames array', () => {
    game.addFrame(fiveFive);
    expect(game.frames[0]).toBe(fiveFive);
  });
});

describe("spareBonus", () => {
  it('accesses the next frame in the frame array to the one passed', () => {
    game.addFrame(sevenThree);
    expect(game.nextFrame(game.frames[0]).toBe(sevenThree));
  })
});

describe("spareBonus", () => {
  game.addFrame(sevenThree);
  expect(game.spareBonus(game.frames[0]).toBe(6));
});