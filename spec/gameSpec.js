describe("Game", function(){

  var game;
  var frame;

  beforeEach(function(){
    game = new Game()
    frame = new Frame()
    frame1 = new Frame()
  })

  describe("Creation", function(){
    it("has a maximum of 10 frames", function(){
      expect(game.FINAL_FRAME).toEqual(10)
    })
    it("can go up to 12 frames in total", function(){
      expect(game.MAX_FRAMES).toEqual(12)
    })
    it("has an initial frame count of 0", function(){
      expect(game.frameCount).toEqual(0)
    })
    it("has an initial score of 0", function(){
      expect(game.score).toEqual(0)
    })
    it("has an initial empty points array", function(){
      expect(game.points).toEqual([])
    })
  })

  describe("New frame", function(){
    it("can start a new frame", function(){
      game.startNewFrame()
      expect(game.frame).toBeDefined()
    })
    it("increases frame count", function(){
      game.startNewFrame()
      expect(game.frameCount).toEqual(1)
    })
    it("starts a new frame when previous frame is over", function(){
      spyOn(frame, "score")
      spyOn(frame, "points")
      spyOn(game, "startNewFrame")
      game.frameCount = 1
      game.endFrame(frame)
      expect(game.startNewFrame).toHaveBeenCalled()
    })
  })

  describe("End frame", function(){
    it("adds total score of frame to game score", function(){
      frame.score = 8
      game.endFrame(frame)
      expect(game.score).toEqual(8)
    })
    it("adds frame object to points array", function(){
      frame.points = [4,5]
      game.startNewFrame()
      game.endFrame(frame)
      expect(game.points).toEqual(jasmine.arrayContaining([frame]));
    })
  })

  describe("Last frame", function(){
    it("can indicate when the last frame has been reached", function(){
      game.frameCount = 10
      expect(game.isLastFrame()).toEqual(true)
    })
    it("can indicate when the last frame has not been reached", function(){
      game.frameCount = 6
      expect(game.isLastFrame()).toEqual(false)
    })
  })

  describe("Frame Ten", function(){
    it("indicates 'Game over!' when last frame has been played, and the last frame was not a strike or spare", function(){
      spyOn(frame, "isStrike").and.returnValue(false)
      spyOn(frame, "isSpare").and.returnValue(false)
      expect(game.isFrameTenEnd(frame)).toEqual(true)
    })
    it("does not indicate 'Game over!' when last frame has been played, and it was a strike", function(){
      spyOn(frame, "isStrike").and.returnValue(true)
      expect(game.isFrameTenEnd(frame)).toEqual(false)
    })
    it("does not indicate 'Game over!' when last frame has been played, and it was a spare", function(){
      spyOn(frame, "isSpare").and.returnValue(true)
      expect(game.isFrameTenEnd(frame)).toEqual(false)
    })
  })

  describe("Frame Eleven", function(){
    it("indicates 'Game over!' if on 11th frame, where 10th was strike, 11th was not a strike", function(){
      spyOn(frame, "isStrike").and.returnValue(false)
      spyOn(frame1, "isStrike").and.returnValue(true)
      game.points = [frame1, frame]
      expect(game.isFrameElevenEnd(frame)).toEqual(true)
    })
    it("does not indicate 'Game over!' if on 11th frame, where 10th was strike, 11th was a strike", function(){
      spyOn(frame, "isStrike").and.returnValue(true)
      spyOn(frame1, "isStrike").and.returnValue(true)
      game.points = [frame1, frame]
      expect(game.isFrameElevenEnd(frame)).toEqual(false)
    })
    it("indicates 'Game over!' if on 11th frame, where 10th was a spare", function(){
      spyOn(frame1, "isSpare").and.returnValue(true)
      game.points = [frame1, frame]
      expect(game.isFrameElevenEnd(frame)).toEqual(true)
    })
  })

  describe("Frame Twelve", function(){
    it("can indicate when absolutely final frame has been reached", function(){
      game.frameCount = 12
      expect(game.isFinalFrame()).toEqual(true)
    })
    it("can indicate when absolutely final frame has not been reached", function(){
      game.frameCount = 11
      expect(game.isFinalFrame()).toEqual(false)
    })
  })

  describe("End Game", function(){
    it("does not return 'Game over!' when last frame has been played and the last frame was a strike", function(){
      game.frameCount = 10;
      spyOn(frame, "isStrike").and.returnValue(true)
      spyOn(frame, "isSpare").and.returnValue(false)
      expect(game.endGame(frame)).not.toEqual("Game over!");
    })
    it("does not return 'Game over!' when last frame has been played and the last frame was a spare", function(){
      game.frameCount = 10;
      spyOn(frame, "isStrike").and.returnValue(false)
      spyOn(frame, "isSpare").and.returnValue(true)
      expect(game.endGame(frame)).not.toEqual("Game over!");
    })
    it("returns 'Game over!' when on 11th frame, and 10th was a spare", function(){
      game.frameCount = 11
      spyOn(frame1, "isSpare").and.returnValue(true)
      game.points = [frame1, frame]
      expect(game.endGame(frame)).toEqual("Game over!")
    })
    it("returns 'Game over!' whenever the maximum number of frames is reached", function(){
      game.frameCount = 12
      expect(game.endGame(frame)).toEqual("Game over!")
    })
  })

  describe("Bonus points", function(){
    it("can look ahead 2 rolls if a strike", function(){
      spyOn(frame, "isStrike").and.returnValue(true);
      frame.points = [10];
      frame.score = 10;
      game.points = [frame, frame, frame];
      expect(game.calculateBonusPoints(frame)).toEqual(20);
    })
    it("can look ahead 1 roll if a spare", function(){
      spyOn(frame, "isSpare").and.returnValue(true);
      frame.points = [4,6];
      game.points = [frame, frame];
      expect(game.calculateBonusPoints(frame)).toEqual(4);
    })
    it("returns 0 if neither strike or spare", function(){
      spyOn(frame, "isStrike").and.returnValue(false);
      spyOn(frame, "isSpare").and.returnValue(false);
      expect(game.calculateBonusPoints(frame)).toEqual(0);
    })
    it("adds new property to frame for bonus points", function(){
      spyOn(game, "calculateBonusPoints").and.returnValue(28);
      game.addBonusPoints(frame);
      expect(frame.bonus).toEqual(28);
    })
  })




})
