describe("Game", function(){

  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  })

  describe("Creation", function(){
    it("has a maximum of 10 frames", function(){
      expect(game.MAX_FRAMES).toEqual(10);
    })
    it("has an initial frame count of 0", function(){
      expect(game.frameCount).toEqual(0);
    })
    it("has an initial score of 0", function(){
      expect(game.score).toEqual(0);
    })
    it("has an initial empty points array", function(){
      expect(game.points).toEqual([]);
    })
  })

  describe("New frame", function(){
    it("can start a new frame", function(){
      game.startNewFrame();
      expect(game.frame).toBeDefined();
    })
    it("increases frame count", function(){
      game.startNewFrame();
      expect(game.frameCount).toEqual(1);
    })
    it("starts a new frame when previous frame is over", function(){
      spyOn(frame, "score");
      spyOn(frame, "points");
      spyOn(game, "startNewFrame");
      game.frameCount = 1;
      game.endFrame(frame);
      expect(game.startNewFrame).toHaveBeenCalled();
    })
  })

  describe("End frame", function(){
    it("adds total score of frame to game score", function(){
      frame.score = 8;
      game.endFrame(frame);
      expect(game.score).toEqual(8);
    })
    it("adds frame object to points array", function(){
      frame.points = [4,5];
      game.startNewFrame();
      game.endFrame(frame);
      expect(game.points).toEqual(jasmine.arrayContaining([frame]));
    })
  })

  describe("Last frame", function(){
    it("can indicate when the last frame has been reached", function(){
      game.frameCount = 10;
      expect(game.hasEnded()).toEqual(true);
    })
    it("can indicate when the last frame has not been reached", function(){
      game.frameCount = 6;
      expect(game.hasEnded()).toEqual(false);
    })
    it("returns 'Game over!' when last frame has been played", function(){
      game.frameCount = 10;
      spyOn(frame, "score");
      spyOn(frame, "points");
      expect(game.endFrame(frame)).toEqual("Game over!");
    })
  })






})
