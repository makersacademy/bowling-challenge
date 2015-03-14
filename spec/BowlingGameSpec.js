describe("Bowling Game", function() {
  var game;
  var frame;

  var setupGame = function(){
    game = new BowlingGame();
    //frame = jasmine.createSpyObj('frame', ['rolls', 'bonus', 'saveRoll']);
    frame = new BowlingFrame();
    frames = [frame, frame, frame, frame, frame, frame, frame, frame, frame, frame];
    game.hold(frames);
    game.holdBonusFrame(frame);
  };


  describe("Taking and saving rolls", function() {
    beforeEach(function() {setupGame(); });

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
      game.roll(4); game.roll(4); //game is actually over before the last roll
      expect(game.isOver).toEqual(true);
    });

  });

  describe("Final round", function() {
    beforeEach(function() {setupGame(); });
    xit("adds a bonus roll, when last roll in 10th frame was strike", function() {
      game.roll(7); game.roll(2);
      game.roll(10);
      game.roll(2); game.roll(8);
      game.roll(0); game.roll(5);
      game.roll(4); game.roll(3);
      game.roll(7); game.roll(3);
      game.roll(10);
      game.roll(4); game.roll(2);
      game.roll(5); game.roll(5);
      game.roll(10);
      expect(game.isOver).toEqual(false);
      game.roll(4);
      expect(game.isOver).toEqual(true);
    });

    xit("adds only one more bonus roll, when first bonus roll for 10th frame was strike too", function() {
      game.roll(7); game.roll(2);
      game.roll(10);
      game.roll(2); game.roll(8);
      game.roll(0); game.roll(5);
      game.roll(4); game.roll(3);
      game.roll(7); game.roll(3);
      game.roll(10);
      game.roll(4); game.roll(2);
      game.roll(5); game.roll(5);
      game.roll(10);
      expect(game.isOver).toEqual(false);
      game.roll(10);
      expect(game.isOver).toEqual(false);
      game.roll(10);
      expect(game.isOver).toEqual(true);
    });

  });

  describe("Bonus calculations", function() {
    beforeEach(function() {setupGame(); });
  });

});
