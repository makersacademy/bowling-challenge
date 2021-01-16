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
    beforeEach(() => {
      frame = jasmine.createSpy(frame);
    })

    it("should update the frames array depending on each frame's outcome", () => {
      game.updateFramesArray(frame);
      expect(game.frames).toEqual([frame]);
    } )

    it("should update multiple frames", () => {
      let frameTwo;
      frameTwo = jasmine.createSpy(frame);
      game.updateFramesArray(frame);
      game.updateFramesArray(frameTwo);
      expect(game.frames).toEqual([frame, frameTwo]);
    })

  })

  describe("updating frame scores array", () => {
    it("should update the frame scores array depending on the frame score", () => {
      game.updateFrameScores(8);
      game.updateFrameScores(7);
      game.updateFrameScores(5);
      expect(game.frameScores).toEqual([8,7,5])
    })
  })

});