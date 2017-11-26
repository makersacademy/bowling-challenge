describe("Game", function(){

  beforeEach(function(){
    game = new Game();
  });

  describe("#getCurrentScore", function(){
    it("returns a current score of 0", function(){
      expect(game.getCurrentScore()).toEqual(0)
    });
    it("has a score of 40 after ten frames", function(){
      for (var i = 0; i < 10; i++){
        game.addRoll(4)
      }
      expect(game.getCurrentScore()).toEqual(40)
    });
  });

  describe("#frames", function(){
    it("is an object", function(){
      expect(game.frames).toEqual(jasmine.any(Object))
    });
    it("returns an instance of Frame as the first element", function(){
      expect(game.frames[1]).toEqual(jasmine.any(Frame))
    })
  });

  describe("#getCurrentFrame", function(){
    it("returns a current frame of 1", function(){
      expect(game.getCurrentFrame()).toEqual(1)
    });
    it("rolling once increases the current frame by 1", function(){
      game.addRoll(4)
      expect(game.getCurrentFrame()).toEqual(2)
    });
    it("has a maximum of ten frames", function(){
      for (var i = 0; i < 15; i++){
        game.addRoll(4)
      }
      expect(game.getCurrentFrame()).toEqual(10)
    });
  });

  describe("#addRoll", function(){
    it("adds a roll of 4 to the current score", function(){
      game.addRoll(4)
      expect(game.getCurrentScore()).toEqual(4)
    });
  });

  describe("#_addFrame", function(){
    it("adds one frame to the frame total", function(){
      game.addFrame()
      expect(game.getCurrentFrame()).toEqual(2)
    });
    it("doesn't add one frame when the number of frames is 10", function(){
      for (var i = 0; i <15; i++){
        game.addFrame()
      }
      expect(game.getCurrentFrame()).toEqual(10)
    });
  });
});
