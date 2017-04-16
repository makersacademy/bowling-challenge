describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard(Frame);
  });

  describe('when initialised', function() {

    it('has ten frames', function() {
      expect(scorecard.frameRecord).toEqual([new Frame, new Frame, new Frame, new Frame, new Frame, new Frame, new Frame, new Frame, new Frame, new Frame]);
    });

  });

  describe('when playing', function() {

    it('updates the frame when a ball is bowled', function() {
      scorecard.bowl(1);
      expect(scorecard.frameRecord[0].firstBowl).toBe(1);
    });

    it('knows the current frame', function() {
      scorecard.bowl(1);
      scorecard.bowl(6);
      expect(scorecard.currentFrame).toEqual(1)
    });

    it('stores the total for the first frame', function() {
      scorecard.bowl(1);
      scorecard.bowl(6);
      expect(scorecard.totals).toEqual([7]);
    });

    it('stores the total for the second frame', function() {
      scorecard.bowl(1);
      scorecard.bowl(6);
      scorecard.bowl(5);
      scorecard.bowl(3);
      expect(scorecard.totals).toEqual([7, 8]);
    });

    it('stores the total for 10 frames if none are strikes/spares', function() {
      scorecard.bowl(1);
      scorecard.bowl(6);
      scorecard.bowl(5);
      scorecard.bowl(3);
      scorecard.bowl(1);
      scorecard.bowl(6);
      scorecard.bowl(5);
      scorecard.bowl(3);
      scorecard.bowl(1);
      scorecard.bowl(6);
      scorecard.bowl(5);
      scorecard.bowl(3);
      scorecard.bowl(1);
      scorecard.bowl(6);
      scorecard.bowl(5);
      scorecard.bowl(3);
      scorecard.bowl(1);
      scorecard.bowl(6);
      scorecard.bowl(5);
      scorecard.bowl(3);
      expect(scorecard.totals).toEqual([7, 8, 7, 8, 7, 8, 7, 8, 7, 8])
    });

    it('knows the current total', function() {
      scorecard.bowl(1);
      scorecard.bowl(6);
      expect(scorecard.currentTotal()).toBe(7);
    });

    it('knows the current total after two frames', function() {
      scorecard.bowl(1);
      scorecard.bowl(6);
      scorecard.bowl(5);
      scorecard.bowl(3);
      expect(scorecard.currentTotal()).toBe(15);
    });

    it('knows the current total after ten frames if none are strikes/spares', function() {
      scorecard.bowl(1);
      scorecard.bowl(6);
      scorecard.bowl(5);
      scorecard.bowl(3);
      scorecard.bowl(1);
      scorecard.bowl(6);
      scorecard.bowl(5);
      scorecard.bowl(3);
      scorecard.bowl(1);
      scorecard.bowl(6);
      scorecard.bowl(5);
      scorecard.bowl(3);
      scorecard.bowl(1);
      scorecard.bowl(6);
      scorecard.bowl(5);
      scorecard.bowl(3);
      scorecard.bowl(1);
      scorecard.bowl(6);
      scorecard.bowl(5);
      scorecard.bowl(3);
      expect(scorecard.currentTotal()).toBe(75);
    });

    it('adds the next two bowls to the previous frame, if it was a strike', function() {
      scorecard.bowl(10);
      scorecard.bowl(5);
      scorecard.bowl(2);
      scorecard.bowl(5);
      scorecard.bowl(2);
      expect(scorecard.totals).toEqual([17, 7, 7]);
      expect(scorecard.currentTotal()).toBe(31)  
    });

    it('adds the next two bowls to the previous two frames, if they were both strikes', function() {
      scorecard.bowl(10);
      scorecard.bowl(10);
      scorecard.bowl(10);
      scorecard.bowl(5);
      scorecard.bowl(4);
      scorecard.bowl(10);
      scorecard.bowl(10);
      scorecard.bowl(2);
      scorecard.bowl(5);
      expect(scorecard.totals).toEqual([30, 25, 19, 9, 22, 17, 7])
    });

    it('adds the next bowl to the previous frame, if the previous frame was a spare', function() {
      scorecard.bowl(0);
      scorecard.bowl(10);
      scorecard.bowl(3);
      scorecard.bowl(1);
      expect(scorecard.totals).toEqual([13, 4])
    });

    it('can receive a combination of strikes and spares', function() {
      scorecard.bowl(10);
      scorecard.bowl(2);
      scorecard.bowl(8);
      scorecard.bowl(5);
      scorecard.bowl(2);
      scorecard.bowl(10);
      scorecard.bowl(2);
      scorecard.bowl(5);
      expect(scorecard.totals).toEqual([20, 15, 7, 17, 7])
    });

    it('can have a perfect game', function() {
      scorecard.bowl(10);
      scorecard.bowl(10);
      scorecard.bowl(10);
      scorecard.bowl(10);
      scorecard.bowl(10);
      scorecard.bowl(10);
      scorecard.bowl(10);
      scorecard.bowl(10);
      scorecard.bowl(10);
      scorecard.bowl(10);
      scorecard.bowl(10);
      scorecard.bowl(10);
      expect(scorecard.totals).toEqual([30, 30, 30, 30, 30, 30, 30, 30, 30, 30])
    });

    it('can have a spare in the last frame and give one extra go', function() {
      scorecard.bowl(1);
      scorecard.bowl(6);
      scorecard.bowl(5);
      scorecard.bowl(3);
      scorecard.bowl(1);
      scorecard.bowl(6);
      scorecard.bowl(10);
      scorecard.bowl(1);
      scorecard.bowl(6);
      scorecard.bowl(5);
      scorecard.bowl(3);
      scorecard.bowl(1);
      scorecard.bowl(9);
      scorecard.bowl(5);
      scorecard.bowl(3);
      scorecard.bowl(1);
      scorecard.bowl(6);
      scorecard.bowl(5);
      scorecard.bowl(5);
      scorecard.bowl(5);
      expect(scorecard.totals).toEqual([7, 8, 7, 17, 7, 8, 15, 8, 7, 15]);
    });
  });
});