describe ("Bowling", function() {

    var bowling

    beforeEach(function(){
      bowling = new Bowling();
    });

    describe('pins', function() {
      it('deducts score from pins', function() {
        bowling.takeTurn(1);
        expect(bowling.pins).toEqual(9);
      });

      it('cannot allow the score to be higher than the number of pins', function() {
        expect( function(){ bowling.takeTurn(11); } ).toThrow("please enter a valid score");
      });

      it('resets pins after a strike', function() {
        bowling.takeTurn(10);
        expect(bowling.pins).toEqual(10);
      })

      it('resets pins after 2 throws', function() {
        bowling.takeTurn(4);
        bowling.takeTurn(4);
        expect(bowling.pins).toEqual(10);
      })
    });

    describe('first turn', function() {
      it('turns to false after one bowl', function() {
        bowling.takeTurn(1);
        expect(bowling.firstTurn).toEqual(false);
      });

      it('turns back to true after two bowls', function() {
        bowling.takeTurn(1);
        bowling.takeTurn(1);
        expect(bowling.firstTurn).toEqual(true);
      });

      it('stays true after a strike', function() {
        bowling.takeTurn(10);
        expect(bowling.firstTurn).toEqual(true);
      })
    });

    describe('points', function() {
      it('adds score to points', function() {
        bowling.takeTurn(1);
        expect(bowling.points).toEqual(1);
      });

      it('adds double points for 2 rounds after a strike', function() {
        bowling.takeTurn(10);
        bowling.takeTurn(2);
        bowling.takeTurn(2);
        bowling.takeTurn(2);
        expect(bowling.points).toEqual(20);
      });

      it('adds bonus points for 1 round after a spare', function() {
        bowling.takeTurn(5);
        bowling.takeTurn(5);
        bowling.takeTurn(3);
        bowling.takeTurn(3);
        expect(bowling.points).toEqual(19);
      })
    });

    describe('bonus', function() {
      it('adds 2 doubles on strike', function() {
        bowling.takeTurn(10);
        expect(bowling.double).toEqual(2);
      });

      it('adds 1 double on a spare', function() {
        bowling.takeTurn(5);
        bowling.takeTurn(5);
        expect(bowling.double).toEqual(1);
      });

      it('reduces double by 1 if no strike or spare', function() {
        bowling.takeTurn(10);
        bowling.takeTurn(5);
        expect(bowling.double).toEqual(1);
      });

      it('does not reduce double if it is already 0', function() {
        bowling.takeTurn(5);
        expect(bowling.double).toEqual(0);
      });

      it('still shows 3 double after 2 strikes', function() {
        bowling.takeTurn(10);
        bowling.takeTurn(10);
        expect(bowling.double).toEqual(3);
      })
    });

    describe('frame', function() {
      it('adds to the frame after 2 throws', function() {
        bowling.takeTurn(4);
        bowling.takeTurn(4);
        expect(bowling.frame).toEqual(2);
      });

      it('adds to the frame after a spare', function() {
        bowling.takeTurn(5);
        bowling.takeTurn(5);
        expect(bowling.frame).toEqual(2);
      });

      it('adds to the frame after a strike', function() {
        bowling.takeTurn(10);
        expect(bowling.frame).toEqual(2);
      });

      it('throws error if game is over', function() {
        for (i = 0; i < 20; i++) {
        bowling.takeTurn(4)
      }
        expect( function(){ bowling.takeTurn(1); } ).toThrow("please start a new game");
      });

      it('allows 1 extra throw on final frame after spare', function() {
        for (i = 0; i < 9; i++) {
        bowling.takeTurn(10)
      }
      bowling.takeTurn(5);
      bowling.takeTurn(5);
      expect(bowling.frame).toEqual(10);
    });
    });
});
