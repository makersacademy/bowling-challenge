describe ('FEATURE TEST :Checking the score', function () {

  var game;
  beforeEach(function() {
    game = new Game();
  });

  describe('checking the overall score', function() {
    it('allows the score to be checked after one ball', function() {
      game.bowlA(4);
      expect(game.checkScore()).toEqual(4);
    });

    it('allows the score to be checked after multiple balls', function() {
      game.bowlA(4);
      game.bowlA(5);
      game.bowlA(4);
      expect(game.checkScore()).toEqual(13);
    });
  });

  describe('seeing the score for each frame', function() {

    it('passes the number of pins knocked down to the frame', function() {
      game.bowlA(5);
      game.bowlA(4);
      expect(game.framesLog.frames[0]).toEqual([5,4]);
    });

    it('allows you to see the pins knocked down for each frame', function() {
      game.bowlA(4);
      game.bowlA(5);
      game.bowlA(3);
      game.bowlA(4);
      expect(game.seeFrameResults()).toEqual([[4,5],[3,4]])
    });

    it('allows you to see the overall score for each frame', function() {
      game.bowlA(4);
      game.bowlA(5);
      game.bowlA(3);
      game.bowlA(4);
      expect(game.seeFrameScores()).toEqual([[9],[7]])
    });

    it('records the result of strikes correctly', function() {
      game.bowlA(10)
      game.bowlA(3)
      game.bowlA(4)
      expect(game.seeFrameResults()).toEqual([[10],[3,4]])
    });
  });

  describe ('Bonus points', function() {
    it('scores a spare correctly if last complete frame', function() {
      game.bowlA(8);
      game.bowlA(2);
      game.bowlA(5);
      expect(game.seeFrameScores()).toEqual([[15]])
    });

    it('scores a spare correctly if the next frame is complete', function() {
      game.bowlA(8);
      game.bowlA(2);
      game.bowlA(5);
      game.bowlA(4);
      game.bowlA(4);
      expect(game.seeFrameScores()[0]).toEqual([15])
    });
  });
});
