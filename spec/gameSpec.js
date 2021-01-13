describe ('game', function() {

  // class DoubleFrame {
  //   setComplete() {
  //     return true;
  //   }
  // }

  var game, frame;

  beforeEach(function() {
    game = new Game();
    // frame = new DoubleFrame();
  });

  describe('gameover', function() {
    it('returns the total score', function() {
      expect(game.gameover()).toEqual(game.total)
    });
  });

  describe('roll', function() {
    it('adds roll to frame', function() {
      game.roll(5);
      expect(game.frame.pins).toEqual([5])
    });

    it('adds second roll to frame', function() {
      game.roll(5);
      game.roll(3);
      expect(game.frame.pins).toEqual([5,3])
    });

    it('sets frame status as complete after 2 rolls', function() {
      // spyOn(frame, 'setComplete');
      game.roll(5);
      game.roll(3);
      expect(game.frame._isComplete).toBe(true);
    });

    // it('sends values to score as appropriate', function() {
    //
    // });
  });

});
