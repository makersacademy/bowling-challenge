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

    it('the third roll score', function() {
      expect(bowling.thirdRollScore).toEqual(0);
    });

    it('the frame number', function() {
      expect(bowling.frameNumber).toEqual(1);
    });

    it('track of total score', function() {
      expect(bowling.totalScore).toEqual(0);
    });

    it('tracks spare bonus points', function() {
      expect(bowling.spareBonusPoints).toEqual(0);
    });

    it('tracks spares', function() {
      expect(bowling.spare).toEqual(0);
    });

    it('tracks strikes', function() {
      expect(bowling.strike).toEqual(0);
    });

    it('tracks strike bonus points', function() {
      expect(bowling.strikeBonusPoints).toEqual(0);
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
      it('moves onto a new frame', function() {
        bowling.newFrame();
        expect(bowling.frameNumber).toEqual(2)
      });

      it('brings pins back to 10 for new frame', function() {
        bowling.firstRoll(6);
        bowling.secondRoll(2);
        expect(bowling.pins).toEqual(10);
      });

      it('brings first roll score back to 0', function() {
        bowling.firstRoll(6);
        bowling.secondRoll(2);
        expect(bowling.firstRollScore).toEqual(0);
      });

      it('brings second roll score back to 0', function() {
        bowling.firstRoll(6);
        bowling.secondRoll(2);
        expect(bowling.secondRollScore).toEqual(0);
      });

      it('totals up the scores for the old frame', function() {
        bowling.firstRoll(6);
        bowling.secondRoll(2);
        expect(bowling.totalScore).toEqual(8);
      });
    });

    describe('Spares', function() {
      it('bonus points are given for spares', function() {
        bowling.firstRoll(6);
        bowling.secondRoll(4);
        bowling.firstRoll(4);
        expect(bowling.spareBonusPoints).toEqual(4);
      });

      it('bonus points are totalled', function() {
        bowling.firstRoll(6);
        bowling.secondRoll(4);
        bowling.firstRoll(4);
        bowling.secondRoll(2);
        expect(bowling.totalScore).toEqual(20);
      });

      it('reverts bonus points back to 0', function() {
        bowling.firstRoll(6);
        bowling.secondRoll(4);
        bowling.firstRoll(4);
        bowling.secondRoll(2);
        expect(bowling.spareBonusPoints).toEqual(0);
      });

      it('reverts spares back to 0', function() {
        bowling.firstRoll(6);
        bowling.secondRoll(4);
        bowling.firstRoll(4);
        bowling.secondRoll(2);
        expect(bowling.spare).toEqual(0);
      });
    });

    describe('Strikes', function() {
      it('strike counter increases when it happens', function() {
        bowling.firstRoll(10);
        expect(bowling.strike).toEqual(1);
      });

      it('moves onto new frame when it happens', function() {
        bowling.firstRoll(10);
        expect(bowling.frameNumber).toEqual(2);
      });

      it('counts the scores for that round', function() {
        bowling.firstRoll(10);
        expect(bowling.totalScore).toEqual(10);
      });

      it('totals up strikes bonuses', function() {
        bowling.firstRoll(10);
        bowling.firstRoll(6);
        bowling.secondRoll(3);
        expect(bowling.totalScore).toEqual(28);
      });

      it('strikes revert back to 0 after toalling bonus', function() {
        bowling.firstRoll(10);
        bowling.firstRoll(6);
        bowling.secondRoll(3);
        expect(bowling.strike).toEqual(0);
      });

      it('strikes bonus points revert back to 0 after toalling bonus', function() {
        bowling.firstRoll(10);
        bowling.firstRoll(6);
        bowling.secondRoll(3);
        expect(bowling.strikeBonusPoints).toEqual(0);
      });
    });

    describe('Tests for totalling scores', function() {
      it('totals up strikes and spares correctly', function() {
        bowling.firstRoll(6);
        bowling.secondRoll(4);
        bowling.firstRoll(10);
        bowling.firstRoll(4);
        bowling.secondRoll(4);
        expect(bowling.totalScore).toEqual(46);
      });

      it('2 consecutive strikes', function() {
        bowling.firstRoll(10);
        bowling.firstRoll(10);
        bowling.firstRoll(2);
        bowling.secondRoll(3);
        expect(bowling.totalScore).toEqual(42);
      });

      it('3 consecutive strikes', function() {
        bowling.firstRoll(10);
        bowling.firstRoll(10);
        bowling.firstRoll(10);
        bowling.firstRoll(2);
        bowling.secondRoll(3);
        expect(bowling.totalScore).toEqual(72);
      });

      it('4 consecutive strikes', function() {
        bowling.firstRoll(10);
        bowling.firstRoll(10);
        bowling.firstRoll(10);
        bowling.firstRoll(10);
        bowling.firstRoll(2);
        bowling.secondRoll(3);
        expect(bowling.totalScore).toEqual(102);
      });

      it('10th frame', function() {
        for ( var i = 0; i < 8; i++ ) {
          bowling.firstRoll(0);
          bowling.secondRoll(0);
        }
        bowling.firstRoll(10);
        bowling.firstRoll(10);
        bowling.secondRoll(10);
        bowling.thirdRoll(10);
        expect(bowling.totalScore).toEqual(60);
      });
    });
  });
});