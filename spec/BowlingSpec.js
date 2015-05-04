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
    });

    describe('keeps track of the number of skittles remaining, which:', function() {
      it('is initally 10', function() {
        expect(frame.skittlesRemaining).toEqual(10);
      });
    });
  });
});
