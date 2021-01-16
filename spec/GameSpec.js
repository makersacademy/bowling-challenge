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
      expect(game.checkPreviousFrame(1)).toEqual("strike");
    });

    it("should return true if the previous frame was a spare", () => {
      game.frames = [[5,5], [1,2]];
      expect(game.checkPreviousFrame(1)).toEqual("spare");
    });
    
  })

  describe("updating previous game score in case of strike/spare", () => {
    beforeEach(()=> {
      spyOn(game, 'checkPreviousFrame').and.returnValue("strike");
    });
    it("should update the previous frame score if it was a strike", () => {
      game.frames = [[10],[5]];
      game.frameScores = [10, 5];
      game.updatePreviousScore(1, 5)
      expect(game.frameScores).toEqual([15,5]);
      
    });
  });

});