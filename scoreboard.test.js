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

  it("calculates the score with a strike", () => {
    scoreboard.roll(10); // strike
    scoreboard.roll(3);
    scoreboard.roll(4);

    for (let i = 0; i < 16; i++) {
      scoreboard.roll(2);
    }

    expect(scoreboard.score()).toBe(56);
  });

  it("calculates the score with a spare", () => {
    scoreboard.roll(5);
    scoreboard.roll(5); // spare

    scoreboard.roll(5);
    for (let i = 0; i < 17; i++) {
      scoreboard.roll(2);
    }

    expect(scoreboard.score()).toBe(54);
  });

  it("calculates the score for the perfect game", () => {
    for (let i = 0; i < 12; i++) {
      scoreboard.roll(10);
    }

    expect(scoreboard.score()).toBe(300);
  });

  it("calculates the score for a gutter game", () => {
    for (let i = 0; i < 20; i++) {
      scoreboard.roll(0);
    }

    expect(scoreboard.score()).toBe(0);
  });

  it("calculates the score with having strikes and spares", () => {
    scoreboard.roll(1);
    scoreboard.roll(4);
    scoreboard.roll(4);
    scoreboard.roll(5);
    scoreboard.roll(6);
    scoreboard.roll(4);
    scoreboard.roll(5);
    scoreboard.roll(5);
    scoreboard.roll(10);
    scoreboard.roll(0);
    scoreboard.roll(1);
    scoreboard.roll(7);
    scoreboard.roll(3);
    scoreboard.roll(6);
    scoreboard.roll(4);
    scoreboard.roll(10);
    scoreboard.roll(2);
    scoreboard.roll(8);
    scoreboard.roll(6);

    expect(scoreboard.score()).toBe(133);
  });
});
