describe('Bowling Game', function() {

  var game, play;

    game = new Game();

    beforeEach(function() {
      game = new Game();
    });

    it('each game has 10 frames',function() {
      expect(game.frames_remaining).toBe(10);
    });

    it('the score begins at 0',function() {
      expect(game.score).toBe(0);
    });

    it('if player rolls a strike one frame is taken',function() {
      spyOn(game, 'play').and.returnValue(10);
      game.play();
      expect(game.frames_remaining).toBe(9);
    });

    // xit('',function() {});
    // xit('',function() {});
    // xit('',function() {});
    // xit('',function() {});

});