const { describe } = require("jest-circus");
const Scorecard = require("../src/scorecard");
const mockFrame = { first_roll: 3, second_roll: 4, score: 7 }
const mockGame = { frames: Array(10).fill(mockFrame) };

describe("scorecard output", () => {
  const card = new Scorecard(mockGame);
  it('returns all frames', () => {
    expect(card.frames()).toEqual(
      "    1|    2|    3|    4|    5|    6|    7|    8|    9|   10"
    );
  });

  it('returns list of rolls', () => {
    expect(card.rolls()).toEqual(
      " 3| 4| 3| 4| 3| 4| 3| 4| 3| 4| 3| 4| 3| 4| 3| 4| 3| 4| 3| 4"
    );
  });

  it('returns list of scores', () => {
    expect(card.scores()).toEqual(
      "    7|    7|    7|    7|    7|    7|    7|    7|    7|    7"
    );
  });
})
