const Bowling = require('./bowling.js');

let bowling;

function multipleRolls(rolls, pins) { // function to roll several times
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

  it('returns the correct score when a spare is rolled', () => {
    bowling.roll(4);
    bowling.roll(6);
    bowling.roll(4);
    multipleRolls(17, 0);
    expect(bowling.score).toEqual(18);
  });

  it('returns the correct score when a strike is rolled', () => {
    bowling.roll(10);
    bowling.roll(2);
    bowling.roll(5);
    multipleRolls(16, 0);
    expect(bowling.score).toEqual(24);
  });

  it('returns the correct score for a 10 frames game', () => {
    bowling.roll(10);
    bowling.roll(2);
    bowling.roll(5);
    multipleRolls(16, 2);
    expect(bowling.score).toEqual(56);
  });

});

