describe("Feature spec", function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe("Playing one ball", function() {
    it("Should reduce number of pins and increase the score", function() {
      spyOn(game._frame, 'rollScore').and.returnValue(7);
      game.play();
      expect(game._frame.pins).toEqual(3);
      expect(game._frame.rollsLeft).toEqual(1);
      expect(game._frame.score).toEqual(7);
    });
  });

  describe("Playing a whole frame", function() {
    it("Should move frame to frames array and move to next frame", function() {
      spyOn(game._frame, 'rollScore').and.returnValue(4);
      var frame = game._frame
      for(i = 1; i <= 2; i++) {
        game.play();
      }
      expect(game.frames).toContain(frame);
      expect(game.currentFrame).toEqual(2);
    });
  });

  describe("Throwing a strike", function() {
    it("Should end the frame and flag that a strike has taken place", function() {
      spyOn(game._frame, 'rollScore').and.returnValue(10);
      var frame = game._frame
      game.play();
      expect(game.frames).toContain(frame);
      expect(game.currentFrame).toEqual(2);
      expect(frame.isStrike).toBe(true);
    })
  })
});
