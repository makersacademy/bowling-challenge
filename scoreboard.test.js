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

  it ("calculates the score with a strike", () => {
    scoreboard.roll(10); // strike
    scoreboard.roll(3);
    scoreboard.roll(4);

    for (let i = 0; i < 16; i++) {
      scoreboard.roll(2);
    }

    expect(scoreboard.score()).toBe(56);
  })
});
