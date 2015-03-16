describe("Bowling Game", function() {
  var game;
  var frame;

  var setupGame = function(){
    game = new BowlingGame();
    //frame = jasmine.createSpyObj('frame', ['rolls', 'bonus', 'saveRoll']);
    frame = new BowlingFrame();
    frame1 = new BowlingFrame();
    frame2 = new BowlingFrame();
    frame3 = new BowlingFrame();
    frame4 = new BowlingFrame();
    frame5 = new BowlingFrame();
    frame6 = new BowlingFrame();
    frame7 = new BowlingFrame();
    frame8 = new BowlingFrame();
    frame9 = new BowlingFrame();
    bonusFrame = new BowlingFrame();
    frames = [frame, frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9];
    fakeframe = new BowlingFrame();
    fakeframe.rolls = [3]
    game.hold(frames);
    game.holdBonusFrame(bonusFrame);
  };


  describe("Taking and saving rolls", function() {
    beforeEach(function() {setupGame(); });

    it("can take a roll", function() {
      game.roll(3);
      // expect(frame.saveRoll).toHaveBeenCalledWith(3);
      expect(game.currentFrame).toEqual(fakeframe)
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

    it("adds a bonus roll, when last roll in 10th frame was strike", function() {
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
      expect(game.isOver).toEqual(false);
      game.roll(10)
      expect(game.isOver).toEqual(true);
    });

    it("adds only one more bonus roll, when first bonus roll for 10th frame was strike too", function() {
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

    it("adds next frames first roll as bonus to spares", function() {
      game.roll(4);
      game.roll(6);
      game.roll(3);
      game.roll(2);
      expect(game.scoreCard[0].bonus).toEqual(3);
    });

    it("adds next frame's rolls as bonus to strike", function() {
      game.roll(10);
      game.roll(5);
      game.roll(4);
      expect(game.scoreCard[0].bonus).toEqual(9);
    });

    it("calculates the right bonus if frame 1 strike and frame 2 as well.", function(){
      game.roll(7); game.roll(2);
      game.roll(10);
      game.roll(10);
      game.roll(8); game.roll(1);
      game.roll(4); game.roll(3);
      game.roll(7); game.roll(3);
      game.roll(10);
      game.roll(4); game.roll(2);
      game.roll(5); game.roll(5);
      expect(game.scoreCard[1].bonus).toEqual(18);
    });

  });

});
