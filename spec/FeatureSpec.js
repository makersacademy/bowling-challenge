"use strict";

describe("Feature test", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  })

  it("New games have a current frame and scorecard", () => {
    expect(game.scorecard).toBeInstanceOf(Scorecard);
    expect(game.currentFrame).toBeInstanceOf(Frame);
  })

  it("Game can record a roll in the current frame", () => {
    game.roll(6);
    expect(game.currentFrame.rolls).toEqual([6]);
  })

  it("The current frame is also stored on the scorecard", () => {
    expect(game.scorecard.frames).toEqual([game.currentFrame])
  })

  it("A new frame is started after two rolls", () => {
    for(let i = 0; i < 2; i++) game.roll(3);
    expect(game.scorecard.frames.length).toEqual(2);
    expect(game.currentFrame.rolls).toEqual([]);
  })
  
  it("stops more than 10 pins being entered on a single roll", () => {
    expect(() => { game.roll(11); }).toThrowError("Cannot enter more than 10 in a single frame.");
    expect(game.currentFrame.rolls).toEqual([]);
  })
  
  it("stops more than 10 pins being entered on a single frame", () => {
    game.roll(4);
    expect(() => { game.roll(7); }).toThrowError("Cannot enter more than 10 in a single frame.");
    expect(game.currentFrame.rolls).toEqual([4]);
  })
})
