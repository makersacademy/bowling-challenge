describe('Game', function() {
  var game;
  var frame1, frame2

  beforeEach(function() {
    game = new Game();
    frame1 = new Frame()
    frame2 = new Frame()
  });

  describe('-> starting a new game', function() {

    it('-> initialises with an empty frames', function() {
      expect(game._frames).toEqual([])
    });

    it('-> initialises with empty scores', function() {
      expect(game._scores).toEqual([])
    });

    it('-> initialises on frame 0', function() {
      expect(game._frameNumber).toEqual(0)
    });
  });
  
  describe('-> adding a frame', function() {

    it('-> adds a new frame to the game upon start', function(){
      game.addFrame(frame1)
      expect(game._frames).toEqual([frame1])
    });

    it('-> prevents the player from playing more than 10 frames', function() {
      for (var i = 0; i < 10; i ++) {
        game.addFrame(frame1);
      };
      expect(function() {
        game.addFrame(frame1)}).toThrowError('10 frames per match only!')
    });
  });
});
