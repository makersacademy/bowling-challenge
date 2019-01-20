describe("Setup Tests", () => {

  // let anything;

  //beforeEach() => {
  // anything = "something";
  // }

  it("runs first spec test", () => {
    expect(true).toBe(true);
  });

});

describe("Feature Tests", () => {

  var scorecard;

  beforeEach(() => {
    scorecard = new Scorecard();
  });

  it("gutter game", () => {
    scorecard.roll(0).repeat(10);
    expect(scorecard.gameComplete).toBe(true);
    expect(scorecard.score).toBe(0);
  });

});
describe("Unit Tests", () => {

  // let anything;

  //beforeEach() => {
  // anything = "something";
  // }

  it("runs first spec test", () => {
    expect(true).toBe(true);
  });

});
