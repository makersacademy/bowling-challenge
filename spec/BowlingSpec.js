describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('Frames', function() {
    it('records a player\'s frame', function() {
      bowling.play(1, 5);
      expect(bowling.currentFrame).toEqual([1, 5]);
    });

    it('after the frame has been played, current frame is cleared', function() {
      bowling.play(1,5);
      bowling.calculateFrame();
      expect(bowling.currentFrame).toEqual([]);
    });

    it('prevents a player from playing more than 10 frames', function() {
      for(i=0; i<10; i++) {
        bowling.play(1,5);
      }
      expect(function(){bowling.play(1,5);}).toThrow(new Error("You have already played 10 frames."));
    });
  });
  describe('Scoring', function() {
    it('calculates the score of a frame', function() {
      bowling.play(1,5);
      bowling.calculateFrame();
      expect(bowling.totalScore).toEqual(6);
    });

    it('gives a total score', function() {
      bowling.play(1,5);
      bowling.calculateFrame();
      expect(bowling.totalScore).toEqual(1+5);
    });
  });

});
