const Bowling = require('./bowling.js');

let bowling;

function multipleRolls(rolls, pins) {
  for (let i = 0; i < rolls; i++) {
    bowling.roll(pins);
  }
}

describe("Bowling", () => {

beforeEach(() => {
    bowling = new Bowling;
  })

  it("is an instance of Bowling class", () => {
    expect(bowling).toBeInstanceOf(Bowling);
  });

  it('score should be 0 for a gutter game', () => {
    multipleRolls(20, 0);
    expect(bowling.score).toEqual(0);
  });

  it('score should be 20 for a game with all ones', () => {
  multipleRolls(20, 1);
    expect(bowling.score).toEqual(20);
  });

});

