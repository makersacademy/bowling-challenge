describe("Bowling Game", function() {
  var game = new BowlingGame();
  var frame1 = new BowlingFrame(3);
  var frame2; //ToDo: How to spy again???


  describe("Taking and saving rolls", function() {

    it("can take a roll", function() {
      game.roll(3)
      expect(game.currentFrame).toEqual(frame1)
    });

    it("switches to next frame after second roll", function(){
      //the last spec's 3 pins are still there.
      game.roll(2)
      game.roll(3)
      expect(game.scoreCard).toEqual(frame2)
      expect(game.currentFrame).toEqual(frame1)
    });


  });
});
