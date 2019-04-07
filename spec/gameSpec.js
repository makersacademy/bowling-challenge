describe('Game', function() {
  beforeEach(function() {
    game = new Game;
  })
  describe('.roll', function() {
    it('should call addRoll on current frame when called', function() {
      spyOn(Frame.prototype, 'addRoll')
      game.roll(0);
      expect(Frame.prototype.addRoll).toHaveBeenCalledWith(0)
    });
  });

  describe('.manageFrame', function() {
    it('should set isInPlay to false if isGameOver is true', function() {
      for(i = 1; i <= 19; i ++) { game.roll(3) };
      expect(game.isInPlay).toEqual(true);
      game.roll(3);
      expect(game.isInPlay).toEqual(false);
    });
    it('should set add new frame to frames array if isGameOver is false and current frame is over', function() {
      var frame1 = game.currentFrame();
      game.roll(3);
      game.roll(2)
      expect(frame1).not.toEqual(game.currentFrame());
    });
  });
  describe('.isFrameOver', function() {
    it('should show false when frame ongoing', function() {
      spyOn(Frame.prototype, 'rolls').and.returnValue([3]);
      expect(game.isFrameOver()).toEqual(false)
    });
    it('should show true when frame ended', function() {
      spyOn(Frame.prototype, 'rolls').and.returnValue([3, 3]);
      expect(game.isFrameOver()).toEqual(true)
    });
  });

  describe('.isGameOver', function() {
    it('should show false when game is in play', function() {
      expect(game.isGameOver()).toEqual(false);
    });
    it('should show true after 10 completed frames', function() {
      for(i = 1; i <= 20; i ++) { game.roll(3) };
      expect(game.isGameOver()).toEqual(true);
    });
  });

  describe('.currentFrame', function() {
    it('should show last frame in frames array', function() {
      game.frames = [1, 2, 3];
      expect(game.currentFrame()).toEqual(3);
    });
  });

  describe('.totalScore', function() {
    it('should show total score of all frames bowled so far', function() {
        game.roll(5)
        game.roll(4)
        game.roll(4)
        expect(game.totalScore()).toEqual(13);
    });
  });
});
