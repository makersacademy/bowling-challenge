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
    it('should start new frame after 2 rolls', function() {
      var frame1 = game.currentFrame()
      game.roll(0);
      game.roll(0);
      game.roll(0);
      expect(frame1).not.toEqual(game.currentFrame())
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
});
