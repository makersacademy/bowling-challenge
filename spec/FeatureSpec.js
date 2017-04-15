describe("Feature spec", function() {
  var frame;
  var game;

  beforeEach(function(){
    frame = new Frame();
    game = new Game();
  });

  describe("Playing one ball", function() {
    it("Should reduce number of pins and increase the score", function() {
      spyOn(frame, 'rollScore').and.returnValue(7);
      frame.play();
      expect(frame.pins).toEqual(3);
      expect(frame.rollsLeft).toEqual(1);
      expect(frame.score).toEqual(7);
    });
  });

  describe("Playing a whole frame", function() {
    it("Should move the score to the frames once done", function() {
      spyOn(game._frame, 'rollScore').and.returnValue(4);
      for(i = 1; i <= 2; i++) {
        game.play();
      };
      expect(game.frames).toContain(8);
    });
  });
});
