describe("Bowling Game", function() {
  var game;
  var frame;
  var frame1;
  var frame2;


  var setupGame = function(){
    // frames = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10];
    game = new BowlingGame();
    game.hold(frames);
  };

  describe("Taking and saving rolls", function() {

    beforeEach(function() {
      frame1 = jasmine.createSpyObj('frame1', ['rolls', 'bonus', 'saveRoll']);
      frame2 = jasmine.createSpyObj('frame2', ['rolls', 'bonus', 'saveRoll']);
      frames = [frame1, frame2];
      setupGame();
    });


    it("can take a roll", function() {
      game.roll(3);
      expect(frame1.saveRoll).toHaveBeenCalledWith(3);
    });

    it("switches to next frame after second roll", function(){
      game.roll(7);
      game.roll(2);
      expect(game.currentFrame).toBe(undefined)
      game.roll(3);
      expect(game.scoreCard).not.toEqual([])
    });
  });
});
