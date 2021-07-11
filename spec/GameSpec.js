'use strict';

describe("Game", () => {
  let game;
  let frame;

  beforeEach( () => {
    frame = { isEnded: () => {},
              add: (number) => {},
              score: () => {},
              isSpare: () => {},
              isStrike: () => {},
              pins: (number) => {}
            };
    game = new Game(frame);
  });

  it("can score a gutter game", () => {
    // truth sequence for 2 rolls per frame.
    spyOn(frame, "isEnded").and.returnValues(false, false,
                                              true, false, true, false,
                                              true, true, false, true, true, false,
                                              true, true, true, false, true, true, true, false, 
                                              true, true, true, true, false, true, true, true, true, false,
                                              true, true, true, true, true, false, true, true, true, true, true, false,
                                              true, true, true, true, true, true, false, true, true, true, true, true, true, false,
                                              true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, false,
                                              true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, false,
                                              true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, false);
    spyOn(frame, "score").and.returnValue(0);
    spyOn(frame, "isSpare").and.returnValue(false);

    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    
    expect(game.final_score()).toEqual(0);
  });

  it("can score a game of all 1s", () => {
    // truth sequence for 2 rolls per frame.
    spyOn(frame, "isEnded").and.returnValues(false, false,
                                              true, false, true, false,
                                              true, true, false, true, true, false,
                                              true, true, true, false, true, true, true, false, 
                                              true, true, true, true, false, true, true, true, true, false,
                                              true, true, true, true, true, false, true, true, true, true, true, false,
                                              true, true, true, true, true, true, false, true, true, true, true, true, true, false,
                                              true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, false,
                                              true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, false,
                                              true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, false);
    spyOn(frame, "score").and.returnValue(2);
    spyOn(frame, "isSpare").and.returnValue(false);

    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    
    expect(game.final_score()).toEqual(20);
  });

  it("can score one spare", () => {
    // truth sequence for 2 rolls per frame.
    spyOn(frame, "isEnded").and.returnValues(false, false,
                                              true, false, true, false,
                                              true, true, false, true, true, false,
                                              true, true, true, false, true, true, true, false, 
                                              true, true, true, true, false, true, true, true, true, false,
                                              true, true, true, true, true, false, true, true, true, true, true, false,
                                              true, true, true, true, true, true, false, true, true, true, true, true, true, false,
                                              true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, false,
                                              true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, false,
                                              true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, false);
    spyOn(frame, "score").and.returnValues(10, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    spyOn(frame, "isSpare").and.returnValues(true, false, false, false, false, false, false, false, false, false);
    spyOn(frame, "pins").and.returnValue(1);

    for (let i = 0; i < 2; i++) {
      game.roll(5);
    }
    game.roll(1);
    for (let i = 0; i < 17; i++) {
      game.roll(0);
    }

    expect(game.final_score()).toEqual(12);
  });

  it("can score one strike", () => {
    // truth sequence for 1 roll first frame, then 2 per frame.
    spyOn(frame, "isEnded").and.returnValues(false,
                                              true, false, true, false,
                                              true, true, false, true, true, false,
                                              true, true, true, false, true, true, true, false, 
                                              true, true, true, true, false, true, true, true, true, false,
                                              true, true, true, true, true, false, true, true, true, true, true, false,
                                              true, true, true, true, true, true, false, true, true, true, true, true, true, false,
                                              true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, false,
                                              true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, false,
                                              true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, false);
    // 2nd element is the result for the strike bonus
    spyOn(frame, "score").and.returnValues(10, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0);
    spyOn(frame, "isSpare").and.returnValue(false);
    // 2nd false is the check for strike in i+1 frame
    spyOn(frame, "isStrike").and.returnValues(true, false, false, false, false, false, false, false, false, false);

    game.roll(10);
    for (let i = 0; i < 2; i++) {
      game.roll(1);
    }
    for (let i = 0; i < 16; i++) {
      game.roll(0);
    }

    expect(game.final_score()).toEqual(14);
  });
});