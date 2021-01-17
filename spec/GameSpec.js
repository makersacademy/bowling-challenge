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

  describe("strike", () => {

    it("should return true if it's a strike", () => {
      let frame = [10]
      expect(game.strike(frame)).toBe(true);
    });
  });

  describe("spare", () => {

    it("should return true if it's a spare", () => {
      let frame = [3,7]
      expect(game.spare(frame)).toBe(true);
    });
  });

  describe("bonusRoll", () => {
    it("should return true if the frame is a spare", () => {
      let frame = [3,7];
      expect(game.bonusRoll(frame)).toBe(true);
    });

    it("should return true if the frame is a strike", () => {
      let frame = [10];
      expect(game.bonusRoll(frame)).toBe(true);
    });

    it("should not return true otherwise", () => {
      let frame = [3,3];
      expect(game.bonusRoll(frame)).not.toBe(true);
    });
  });
  
  describe("check if previous frame was a spare or a strike", () => {
    beforeEach(() => {
      let previousFrame = jasmine.createSpyObj('Frame', ['spare', 'strike']);
      previousFrame.spare.and.returnValue(true);
      previousFrame.strike.and.returnValue(true);
    });

    it("should return true if the previous frame was a strike", () => {
      game.frames = [[10], [1,2]];
      expect(game._checkPreviousFrame(1)).toEqual("strike");
    });

    it("should return true if the previous frame was a spare", () => {
      game.frames = [[5,5], [1,2]];
      expect(game._checkPreviousFrame(1)).toEqual("spare");
    });
    
  })

  describe("calculate current score", () => {
    it("should calculate the sum of the current frame", () => {
      game.frames = [[1,4],[2,5]]
      expect(game._calculateCurrentScore(1)).toEqual(7);
    })
  })

  describe("updating previous game score in case of strike/spare", () => {

    it("should update the previous frame score if it was a strike", () => {
      game.frames = [[10],[5,4]];
      game.frameScores = [10];
      game.updatePreviousScore(1)
      expect(game.frameScores).toEqual([19,28]);
    });

    it("should update the previous frame score if it was a spare", () => {
      game.frames = [[6,4],[5,4]];
      game.frameScores = [10];
      game.updatePreviousScore(1);
      expect(game.frameScores).toEqual([15,24]);
    });

    it("should update the frame score correctly", () => {
      game.frames = [[5,4],[6,4]];
      game.frameScores = [9];
      game.updatePreviousScore(1);
      expect(game.frameScores).toEqual([9,19]);
    });

  });

  describe("calculate strike and spare scores", () => {
    it("should calculate the final score for a strike", () => {
      game.frames = [[10],[5,4]];
      game.frameScores = [10]
      expect(game._calculateFinalScore(1)).toEqual(19);
    });
  })

});