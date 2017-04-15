describe("Game", function() {
  var game

  beforeEach(function() {
    game = new Game();
  });

  describe("framesLeft", function(){
    it("Should begin at 10", function() {
      expect(game.framesLeft).toEqual(10);
    });
  });

  describe("play", function(){
    it("moves the current frame to frames array", function() {
      spyOn(game._frame, "rollScore").and.returnValue(4);
      var frame = game._frame
      for(i = 1; i <= 2; i++) {
        game.play();
      };
      expect(game.frames).toContain(frame);
    });

    it("changes frame once played twice", function(){
      spyOn(game._frame, "rollScore").and.returnValue(4);
      for(i = 1; i <= 2; i++) {
        game.play();
      }
      expect(game.currentFrame).toEqual(2);
    })
  });
});
