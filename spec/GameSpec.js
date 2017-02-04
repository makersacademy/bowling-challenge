describe("Bowling Game", function(){

  beforeEach(function(){
    game = new Game();
  });

  describe("New Games", function(){
    it("Game begins with no frames", function(){
      expect(game._gameFrames).toEqual([]);
    });

    it("Frame number begins as 0", function(){
    expect(game._frameNumber).toEqual(0);
   });
  });

  describe("Playing", function(){
    it("Can play a frame", function(){
      game.newRoll(1,4)
      expect(game._gameFrames.length).toEqual(1)
    });

    it("Can play 10 frames", function(){
      for(var i=0; i < 10; i++){
        game.newRoll(1,4)
      }
      expect(game._gameFrames.length).toEqual(10)
    });

    it("On 11th frame an error is thrown saying game ended", function(){
      for(var i=0; i < 10; i++){
        game.newRoll(1,4)
      }
      expect(function(){ game.newRoll(3,4)}).toThrow("Your game has ended")
    });
  });

  describe("Viewing frame scores", function(){
    it("Can view individual frame rolls", function(){
      game.newRoll(1,4)
      game.newRoll(2,3)
      expect(game.showFrame(1)).toEqual([2,3])
    });
  });

});
