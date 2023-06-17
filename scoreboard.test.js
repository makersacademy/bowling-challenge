const Scoreboard = require("./scoreboard");

describe("Scoreboard", () => {
  let scoreboard;

  beforeEach(() => {
    scoreboard = new Scoreboard();
  });

  it("calculates the score without strikes or spares", () => {
    for (let i = 0; i < 20; i++) {
      scoreboard.roll(4);
    }

    expect(scoreboard.score()).toBe(80);
  });
});
