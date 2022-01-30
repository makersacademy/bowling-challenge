const Bowling = require('./bowling.js');

let bowling;

describe("Bowling", () => {

beforeEach(() => {
    bowling = new Bowling;
  })

  it("is an instance of Bowling class", () => {
    expect(bowling).toBeInstanceOf(Bowling);
  });

  it('score should be 0 for a gutter game', () => {
    for (let i = 0; i < 20; i++) {
      bowling.roll(0);
    }
    expect(bowling.score).toEqual(0);
  });

});

