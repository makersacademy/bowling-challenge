'use strict';

describe('ScoreCard', function() {
  var scoreCard;
  beforeEach(function() {
    scoreCard = new ScoreCard();
  });
  it('created with an empty results array of arrays', function() {
    expect(scoreCard.results).toEqual(get2DArray(10));
  });
  describe('adding results to the array', function() {
    describe('not the last round', function() {
      it('strike', function() {
        scoreCard.store(10, 0);
        expect(scoreCard.results[0]).toEqual([10])
      });
      it('not strike', function() {
        scoreCard.store(5, 0);
        scoreCard.store(5, 0);
        expect(scoreCard.results[0]).toEqual([5,5])
      });
      it('error - result exceeds 10', function() {
        scoreCard.store(20, 0);
        expect(scoreCard.results[0]).toEqual([10])
      });
      it('error - two shot score exceeds 10', function() {
        scoreCard.store(5, 0);
        scoreCard.store(10, 0);
        expect(scoreCard.results[0]).toEqual([5,5])
      });
    });
    describe('last round', function() {
      beforeEach(function() {
        for(var i = 0; i < 9; i++) {
          scoreCard.store(10, i);
        }
      });
      it('two strikes + final shot', function() {
        for(var i = 0; i < 3; i++) {
          scoreCard.store(10, 9);
        }
        expect(scoreCard.results[9]).toEqual([10,10,10])
      });
      describe('one strike + two more shots', function() {
        beforeEach(function() {
          scoreCard.store(10, 9);
          scoreCard.store(5, 9);
        })
        it('correct entry', function() {
          scoreCard.store(5, 9);
          expect(scoreCard.results[9]).toEqual([10,5,5])
        });
        it('incorrect entry', function() {
          scoreCard.store(8, 9);
          expect(scoreCard.results[9]).toEqual([10,5,5])
        });
      })
      describe('spare + additional shot', function() {
        beforeEach(function() {
          scoreCard.store(5, 9);
        });
        it('correct entry', function() {
          for(var i = 0; i < 2; i++) {
            scoreCard.store(5, 9);
          }
          expect(scoreCard.results[9]).toEqual([5,5,5])
        });
        it('incorrect entry', function() {
          for(var i = 0; i < 2; i++) {
            scoreCard.store(8, 9);
          }
          expect(scoreCard.results[9]).toEqual([5,5,8])
        });
      })

    });
  });
});
