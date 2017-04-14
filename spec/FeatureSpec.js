describe("Feature spec", function() {
  var frame;
  var game;

  beforeEach(function(){
    frame = new Frame();
    game = new Game();
  });

  describe("Playing one ball", function() {
    it("Should reduce number of pins", function() {
      spyOn(frame, 'rollScore').and.returnValue(7)
      frame.play();
      expect(frame.pins).toEqual(3);
      expect(frame.rollsLeft).toEqual(1);
    });
  });
});
