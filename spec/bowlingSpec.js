describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('Initialized stage contains', function() {
    it('the number of pins', function() {
      expect(bowling.pins).toEqual(10);
    })

    it('the first roll score', function() {
      expect(bowling.firstRollScore).toEqual(0);
    });

    it('the second roll score', function() {
      expect(bowling.secondRollScore).toEqual(0);
    });

    it('the frame number', function() {
      expect(bowling.frameNumber).toEqual(0);
    });

    it('track of total score', function() {
      expect(bowling.totalScore).toEqual(0);
    });
  });

  describe('Methods', function() {
    describe('First Roll', function() {
      it('displays the first roll score', function() {
        bowling.firstRoll(6);
        expect(bowling.firstRollScore).toEqual(6);
      });

      it('automatically updates the number of pins', function() {
        bowling.firstRoll(6);
        expect(bowling.pins).toEqual(4);
      });
    });

    describe('Second Roll', function() {
      it('should automatically call new frame appropriately', function() {
        bowling.firstRoll(6);
        bowling.secondRoll(2);
        expect(bowling.pins).toEqual(10);
      });
    });


    describe('New Frame', function() {
      it('moves onto a new frame', function() {
        bowling.newFrame();
        expect(bowling.frameNumber).toEqual(1)
      });

      it('brings pins back to 10 for new frame', function() {
        bowling.firstRoll(6);
        bowling.secondRoll(2);
        bowling.newFrame();
        expect(bowling.pins).toEqual(10);
      });

      it('brings first roll score back to 0', function() {
        bowling.firstRoll(6);
        bowling.secondRoll(2);
        bowling.newFrame();
        expect(bowling.firstRollScore).toEqual(0);
      });

      it('brings second roll score back to 0', function() {
        bowling.firstRoll(6);
        bowling.secondRoll(2);
        bowling.newFrame();
        expect(bowling.secondRollScore).toEqual(0);
      });

      it('totals up the scores for the old frame', function() {
        bowling.firstRoll(6);
        bowling.secondRoll(2);
        bowling.newFrame();
        expect(bowling.totalScore).toEqual(8);
      });
    });



  });
});