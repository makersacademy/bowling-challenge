'use strict';

describe("Game", () => {
  var game;
  var frame;

  beforeEach(() => {
    game = new Game();
  })

  describe("initialization", () => {

    it("should have an array for storing frame scores", () => {
      expect(game.frameScores).toEqual([]);
    });

    it("should have an array for storing pin boards from each frame", () => {
      expect(game.frames).toEqual([]);
    })
  });

  describe("updating frames array", () => {


    it("should update the frames array depending on each frame's outcome", () => {
      game.updateFramesArray(0,9);
      expect(game.frames).toEqual([[9]]);
    } )

    it("should update multiple frames", () => {
      game.updateFramesArray(0,9);
      game.updateFramesArray(0,1);
      game.updateFramesArray(1,3);
      game.updateFramesArray(1,4);
      expect(game.frames).toEqual([[9,1],[3,4]]);
    })

  })



  describe("strike", () => {

    it("should return true if it's a strike", () => {
      game.frames = [[10]]
      expect(game.strike(0)).toBe(true);
    });
  });

  describe("spare", () => {

    it("should return true if it's a spare", () => {
      game.frames = [[3,7]]
      expect(game.spare(0)).toBe(true);
    });
  });

  describe("calculate current score", () => {
    it("should calculate the sum of the current frame", () => {
      game.frames = [[1,4],[2,5]]
      game.frameScores = [5]
      game.calculateFrameScore(1)
      expect(game.frameScores[1]).toEqual(12);
    })
  })

  describe("updating previous game score in case of strike/spare", () => {

    it("should update the previous frame score if it was a strike", () => {
      game.frames = [[10],[5,4]];
      game.frameScores = [10];
      game.updateScores(1);
      expect(game.frameScores).toEqual([19,28]);
    });

    it("should update the previous frame score if it was a spare", () => {
      game.frames = [[6,4],[5,4]];
      game.frameScores = [10];
      game.updateScores(1)
      expect(game.frameScores).toEqual([15,24]);
    });

    it("should update the frame score correctly", () => {
      game.frames = [[5,4],[6,4]];
      game.frameScores = [9];
      game.updateScores(1)
      game.updatePreviousFrame(1);
      expect(game.frameScores).toEqual([9,19]);
    });

  describe("calculate strike and spare scores", () => {
    it("should calculate the final score for a strike", () => {
      game.frameScores = [10, 19, 20, 34, 49, 55, 65, 74, 94, 101]
      expect(game.totalScore()).toEqual(101);
    });
  })
  });
});