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
      expect(game.startNewFrame()).toBeDefined();
    })
    it("increases frame count", function(){
      game.startNewFrame();
      expect(game.frameCount).toEqual(1);
    })
  })

  describe("End frame", function(){
    it("adds total points of frame to game score", function(){
      spyOn(frame, "score").and.returnValue(8);
      expect()
    })
  })






})
