'use strict';

describe('Round', function() {
  var round, lastRound;
  beforeEach(function() {
    round = new Round();
    lastRound = new Round(true);
  });
  it('begins as an empty array', function() {
    expect(round.results.length).toEqual(0);
  });
  describe('first roll', function() {
    describe('accepts a number between 0 and 10', function() {
      it('less than or equal to 10', function() {
        round.store(8);
        expect(round.results.length).toEqual(1);
      });
      it('greater than 10', function() {
        round.store(15);
        expect(round.results.length).toEqual(0);
      });
    });
  });
  describe('second roll', function() {
    beforeEach(function() {
      round.store(5);
    })
    it('does not allow round total to exceed 10', function() {
      round.store(10);
      expect(round.results.length).toEqual(1)
    });
    it('allows round total 10 or less', function() {
      round.store(5);
      expect(round.results.length).toEqual(2);
    });
  });
  describe('end of the round', function() {
    describe('not final round', function() {
      it('a score of 10 ends the round', function() {
        round.store(10);
        expect(round.complete).toEqual(true);
      });
      it('two rolls end the round (not a first score of 10)', function() {
        for(var i = 0; i < 2; i++) {
          round.store(5);
        }
        expect(round.complete).toEqual(true);
      });
    });
    describe('final round', function() {
      describe('two strikes + another throw', function() {
        beforeEach(function() {
          for(var i = 0; i < 3; i++) {
            lastRound.store(10);
          }
        });
        it('stores all three rolls and ends the round', function() {
          expect(lastRound.results.length).toEqual(3);
          expect(lastRound.complete).toEqual(true);
        });
      })
      describe('one strike + not a strike on second', function() {
        beforeEach(function() {
          lastRound.store(10);
          lastRound.store(5);
        });
        it('does not allow sum of last two throws to exceed 10', function() {
          lastRound.store(10);
          expect(lastRound.complete).toEqual(false);
        });
        it('it ends round if last two throws sum to 10 or less', function() {
          lastRound.store(5);
          expect(lastRound.complete).toEqual(true);
        });
      });
      describe('not strike on first go', function() {
        beforeEach(function() {
          lastRound.store(5);
        });
        it('does not allow sum of first two rolls to exceed 10', function() {
          lastRound.store(10);
          expect(lastRound.results.length).toEqual(1);
        });
        describe('spare', function() {
          beforeEach(function() {
            lastRound.store(5);
          });
          it('gives player third roll', function() {
            expect(lastRound.complete).toEqual(false);
          });
          it('ends round after third roll', function() {
            lastRound.store(10);
            expect(lastRound.complete).toEqual(true);
          });
        });

        it('ends game after second go if spare not rolled', function() {
          lastRound.store(0);
          expect(lastRound.complete).toEqual(true);
        });
      });
    });
  });
});
