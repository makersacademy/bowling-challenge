describe('Bowling Scorecard', function() {
  var scorecard, frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('can play a game of a single standard frame –', function() {
    describe('keeps track of the frame’s score, which:', function() {
      it('is initally 0', function() {
        expect(frame.frameScore).toEqual(0);
      });

      it('(potentially) increases as balls are bowled', function() {
        frame.bowl();
        expect(frame.frameScore >= 0).toBeTruthy();
      });

      it('does not exceed the initial number of skittles', function() {
        initialNumberOfSkittles = frame.skittlesRemaining;
        frame.bowl();
        expect(frame.frameScore <= initialNumberOfSkittles).toBeTruthy();
      });
    });

    describe('keeps track of the number of skittles remaining, which:', function() {
      it('is initally 10', function() {
        expect(frame.skittlesRemaining).toEqual(10);
      });

      it('(potentially) decreases as balls are bowled', function() {
        frame.bowl();
        expect(frame.skittlesRemaining <= 10).toBeTruthy();
      });

      it('does not ‘subceed’ 0 (i.e. cannot knock down more skittles than were there to start with!)', function() {
        frame.bowl();
        expect(frame.skittlesRemaining >= 0).toBeTruthy();
      });
    });
  });
});
