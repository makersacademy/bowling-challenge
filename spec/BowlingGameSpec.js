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
      frame = jasmine.createSpyObj('frame', ['rolls', 'bonus', 'saveRoll']);
      frames = [frame, frame, frame, frame, frame, frame, frame, frame, frame, frame];
      setupGame();
    });


    it("can take a roll", function() {
      game.roll(3);
      expect(frame.saveRoll).toHaveBeenCalledWith(3);
    });

    it("switches to next frame after second roll", function(){
      game.roll(7);
      game.roll(2);
      expect(game.currentFrame).toBe(undefined)
      game.roll(3);
      expect(game.scoreCard).not.toEqual([])
      game.roll(3);
      expect(game.currentFrame).toBe(undefined)
    });

    it("Finishes a frame if first roll was a strike", function() {
      expect(game.scoreCard).toEqual([])
      game.roll(10);
      expect(game.currentFrame).toBe(undefined)
      expect(game.scoreCard).not.toEqual([])
    });

    it("is finished after ten frames are played", function() {
      game.roll(7); game.roll(2);
      game.roll(10);
      game.roll(2); game.roll(8);
      game.roll(0); game.roll(5);
      game.roll(4); game.roll(3);
      game.roll(7); game.roll(3);
      game.roll(10);
      game.roll(4); game.roll(2);
      game.roll(5); game.roll(5);
      game.roll(1); game.roll(5);
      expect(game.isOver).toEqual(true);
    });

  });
});
