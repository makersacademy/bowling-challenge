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
    it("has an initial frame count of 1", function(){
      expect(game.frameCount).toEqual(1);
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
      expect(game.frameCount).toEqual(2);
    })
  })

  describe("End frame", function(){
    it("adds total score of frame to game score", function(){
      frame.score = 8;
      game.endFrame(frame);
      expect(game.score).toEqual(8);
    })
    it("adds points in frame to points array", function(){
      frame.points = [4,5];
      game.endFrame(frame);
      expect(game.points).toEqual([4,5]);
    })
  })






})
