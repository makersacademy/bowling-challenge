"use strict";

describe("Game", () => {
  let game;
  let scoring;
  let stringifier;
  let frame1;
  let frame2;
  let frame3;
  let frame4;
  let frame5;
  let frame6;
  let frame7;
  let frame8;
  let frame9;
  let frame10;

  let names = [
    frame1,
    frame2,
    frame3,
    frame4,
    frame5,
    frame6,
    frame7,
    frame8,
    frame9,
    frame10,
  ];

  beforeEach(() => {
    frames = [];
    for (let index = 0; index < 10; index++) {
      names[index] = jasmine.createSpyObj("frame", [
        "add",
        "isFull",
        "isFinalFrame",
      ]);
      frames.push(names[index]);
    }
    game = new Game(frames);
  });

  it("calls frame.add method to add a bowl", () => {
    game.bowl(7);
    expect(frames[0].add).toHaveBeenCalledWith(7);
  });

  it("increments frame when frame full", () => {
    frames[0].isFull.and.returnValue(true);
    game.bowl(10);
    expect(game.getCurrentFrame()).toEqual(2);
  });

  it("completes game if all frames full", () => {
    for (let index = 0; index < 9; index++) {
      frames[index].isFull.and.returnValue(true);
      game.bowl(10);
    }
    frames[9].isFull.and.returnValue(true);
    expect(() => {
      game.bowl(10);
    }).toThrow("Game is complete");
  });

  describe("scorecard operations", () => {
    beforeEach(() => {
      scoring = jasmine.createSpyObj("scoring", [
        "calculateScore",
        "cumulativeScores",
      ]);
      stringifier = jasmine.createSpyObj("stringifier", ["stringify"]);
    });

    it("calls scoring methods to obtain scores", () => {
      game.scorecard(scoring, stringifier);
      expect(scoring.calculateScore).toHaveBeenCalledWith(frames);
      expect(scoring.cumulativeScores).toHaveBeenCalledWith(
        scoring.calculateScore(frames)
      );
    });

    it("calls scorecard methods to stringify scores", () => {
      game.scorecard(scoring, stringifier);
      expect(stringifier.stringify).toHaveBeenCalledWith(
        frames,
        scoring.cumulativeScores(frames)
      );
    });
  });
});
