describe('Game', function() {
  var game;
  var frame1, frame2;

  beforeEach(function() {
    game = new Game();
    frame1 = jasmine.createSpyObj('frame', ['isSpare']);
    frame2 = jasmine.createSpyObj('frame', ['isSpare']);
  });

  describe('initializing a new Game', function() {
    it('starts out with empty frames', function() {
      expect(game.frames).toEqual([]);
    });

    it('starts out with empty frameScores', function() {
      expect(game.frameScores).toEqual([]);
    });

    it('starts out with currFrameNum of 0', function() {
      expect(game.currFrameNum).toEqual(0);
    });
  });

  describe('#addFrame', function() {
    it('adds frame to the game', function() {
      game.addFrame(frame1)
      expect(game.frames).toContain(frame1);
    });

    it('adds maximum frames to the game', function() {
      for (var i = 0; i<10; i++) { game.addFrame(frame1); }
      expect(function() {
        game.addFrame(frame2);
      }).toThrowError("Max frames");
      expect(game.frames).not.toContain(frame2);
    });
  });

  // frame1.isSpare.and.returnValue(true);

});
