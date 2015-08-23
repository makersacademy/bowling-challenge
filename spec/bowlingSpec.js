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

    it('bonus points', function() {
      expect(bowling.bonusPoints).toEqual(0);
    });

    it('tracks spares', function() {
      expect(bowling.spare).toEqual(0);
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

      it('displays error message if user inputs inapproapriate number', function() {
        expect(function() {
          bowling.firstRoll(11);
        }).toThrowError('That is an invalid number')
      });

      it('displays error message if user inputs inapproapriate number', function() {
        expect(function() {
          bowling.firstRoll(-1);
        }).toThrowError('That is an invalid number')
      });
    });

    describe('Second Roll', function() {
      it('should automatically call new frame appropriately', function() {
        bowling.firstRoll(6);
        bowling.secondRoll(2);
        expect(bowling.pins).toEqual(10);
      });

      it('displays error message if user inputs inapproapriate number', function() {
        bowling.firstRoll(6);
        expect(function() {
          bowling.secondRoll(9);
        }).toThrowError('That is an invalid number')
      });

      it('spare count increase when player gets a spare', function() {
        bowling.firstRoll(4);
        bowling.secondRoll(6);
        expect(bowling.spare).toEqual(1)
      });
    });


    describe('New Frame', function() {
      it('informs users to wait', function() {
        expect(bowling.newFrame()).toEqual('Please wait while we set up the next frame')
      });

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