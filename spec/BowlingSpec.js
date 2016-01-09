describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('Scoring', function() {

    it('records a player\'s frame', function() {
      bowling.play(1, 5);
      expect(bowling.currentFrame).toEqual([1, 5]);
    });

    it('after the frame has been played, current frame is cleared', function() {
      bowling.play(1,5);
      bowling.calculateFrame();
      expect(bowling.totalScore).toEqual(6);
    });

    it('calculates the score of a frame', function() {
      bowling.play(1,5);
      expect(bowling.calculateFrame).toHaveBeenCalled;
    });

    it('gives a total score', function() {
      bowling.play(1,5);
      bowling.calculateFrame();
      expect(bowling.totalScore).toEqual(1+5);
    });
  });
});
