describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('new game', function() {
    it('can start a new game with an empty arrays for the score', function() {
      expect(frame.score).toEqual([]);
    }); 
  });

  describe('Adding to array', function() {
    it('adds to the array', function() {
      frame.scoring(4);
      expect(frame.score.length).toEqual(1);
    });
  });

  describe('Frame 1 testing', function() {
    it('runs frame1 and outputs scores correctly', function() {
      frame.scoring(3);
      frame.scoring(4);
      expect(frame.frame1()).toEqual(7);
    });
    it('testing spare function', function() {
      frame.scoring(5);
      frame.scoring(5);
      frame.scoring(4);
      expect(frame.frame1()).toEqual(14);
    });
  });

  describe('Frame 2 testing', function() {
    it('runs frame2 and outputs scores correctly', function() {
      frame.scoring(3);
      frame.scoring(4);
      expect(frame.frame2()).toEqual(7);
    });
    it('testing spare function', function() {
      frame.scoring(5);
      frame.scoring(5);
      frame.scoring(4);
      expect(frame.frame2()).toEqual(14);
    });
  });
});