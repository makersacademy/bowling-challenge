'use strict';

describe('Player', function() {
  var player, scoreCard, scoreCard2;
  beforeEach(function() {
    scoreCard = jasmine.createSpyObj('scoreCard', ['store', 'results', 'getRound'])
    // scoreCard2 = new ScoreCard()
    player = new Player(scoreCard)
  });
  it('created with a scorecard', function() {
    expect(player.scoreCard).toEqual(scoreCard);
  });
  it('starts at round 0', function() {
    expect(player.roundNumber).toEqual(0);
  });
  it('starts on roll 0', function() {
    expect(player.rollNumber).toEqual(0);
  });
  describe('first roll', function() {
    describe('strike (10 pins down)', function() {
      beforeEach(function() {
        scoreCard.getRound.and.returnValue([10]);
        player.bowl(10);
      });
      it('moves to the next round', function() {
        expect(player.roundNumber).toEqual(1);
      });
      it('asks scorecard to store the result', function() {
        expect(scoreCard.store.calls.count()).toEqual(1);
      });
    });
    describe('no strike', function() {
      beforeEach(function() {
        scoreCard.getRound.and.returnValue([5]);
        player.bowl(5);
      });
      it('stays in same round', function() {
        expect(player.roundNumber).toEqual(0);
      });
      it('updates roll number', function() {
        expect(player.rollNumber).toEqual(1);
      });
      it('asks scorecard to store the result', function() {
        expect(scoreCard.store.calls.count()).toEqual(1);
      });
    });
  });
  describe('second roll', function() {
    describe('correctly entered result', function() {
      beforeEach(function() {
        scoreCard.getRound.and.returnValue([5,3]);
        player.bowl(5);
        player.bowl(3);
      });
      it('moves to the next round', function() {
        expect(player.roundNumber).toEqual(1);
      });
      it('asks scorecard to store the result', function() {
        expect(scoreCard.store.calls.count()).toEqual(2);
      });
      it('updates roll number', function() {
        expect(player.rollNumber).toEqual(0);
      });
    });
  });
  describe('last round', function() {
    beforeEach(function() {
      scoreCard.getRound.and.returnValue([10]);
      for(var i = 1; i < 10; i++) {
        player.bowl(10);
      }
    });
    describe('spare', function() {
      beforeEach(function() {
        scoreCard.getRound.and.returnValue([5,5]);
        scoreCard.store.calls.reset()
        player.bowl(5);
        player.bowl(5);
      });
      it('gives the player three rolls', function() {
        expect(player.gameOver).toEqual(false);
      });
      describe('end of game', function() {
        beforeEach(function() {
          player.bowl(8);
        });
        it('asks scorecard to store the result', function() {
          expect(scoreCard.store.calls.count()).toEqual(3);
        });
        it('game ends after third roll', function() {
          // console.log(player.currentRoll().reduce(getSum))
          expect(player.gameOver).toEqual(true)
        });
      });
    });
    describe('strike', function() {
      beforeEach(function() {
        scoreCard.getRound.and.returnValue([10]);
        scoreCard.store.calls.reset()
        player.bowl(10);
      });
      it('gives player three rolls', function() {
        player.bowl(5);
        expect(player.gameOver).toEqual(false);
      });
      describe('end of game, one or more additional strikes', function() {
        beforeEach(function() {
          scoreCard.getRound.and.returnValue([10,10,2]);
          player.bowl(10);
          player.bowl(2);
        });
        it('asks scorecard to store the results', function() {
          expect(scoreCard.store.calls.count()).toEqual(3);
        });
        it('game ends after third roll', function() {
          expect(player.gameOver).toEqual(true)
        });
      });
      describe('end of game, no further strikes', function() {
        beforeEach(function() {
          scoreCard.getRound.and.returnValue([10,8,2]);
          player.bowl(8);
          player.bowl(2);
        });
        it('asks scorecard to store the result', function() {
          expect(scoreCard.store.calls.count()).toEqual(3);
        });
        it('game ends after third roll', function() {
          expect(player.gameOver).toEqual(true);
        });
        it('cannot store another roll', function() {
          player.bowl(0);
          expect(scoreCard.store.calls.count()).toEqual(3);
        });
      });
    });
    describe('no spare or strike', function() {
      beforeEach(function() {
        scoreCard.getRound.and.returnValue([5,3]);
        scoreCard.store.calls.reset()
        player.bowl(5);
        player.bowl(3);
      });
      it('game ends after second roll', function() {
        expect(player.gameOver).toEqual(true);
      });
      it('asks scorecard to store the result', function() {
        expect(scoreCard.store.calls.count()).toEqual(2);
      });
      it('does not store another score', function() {
        player.bowl(0);
        expect(scoreCard.store.calls.count()).toEqual(2);
      });
    });
  });
});
