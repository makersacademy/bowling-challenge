'use strict';

describe('Score Generator', function() {
  var scoreGenerator, perfectGame;
  beforeEach(function() {
    scoreGenerator = new ScoreGenerator()
    perfectGame = [[10],[10],[10],[10],[10],[10],
                   [10],[10],[10],[10,10,10]];
  });
  describe('calculating score for a finished game', function() {
    describe('perfect game', function() {
      it('at end of game returns 300', function() {
        expect(scoreGenerator.returnScore(perfectGame)).toEqual(300);
      });
    });
  });
  describe('calculating score for a round', function() {
    it('combination strike, strike, strike', function() {
      expect(scoreGenerator.getRoundScore(0, [[10],[10],[10]])).toEqual(30)
    });
    it('combination strike, strike, not strike', function() {
      expect(scoreGenerator.getRoundScore(0, [[10],[10],[5,0]])).toEqual(25)
    });
    it('combination strike, not strike + spare', function() {
      expect(scoreGenerator.getRoundScore(0, [[10],[5,5],[]])).toEqual(20)
    });
    it('combination not strike + spare, strike', function() {
      expect(scoreGenerator.getRoundScore(0, [[5,5],[10],[]])).toEqual(20)
    });
    it('combination strike, not strike + not spare', function() {
      expect(scoreGenerator.getRoundScore(0, [[10],[5,0],[]])).toEqual(15)
    });
    it('combination not strike + spare, not strike', function() {
      expect(scoreGenerator.getRoundScore(0, [[5,5],[5,0],[]])).toEqual(15)
    });
    it('combination not strike + not spare', function() {
      expect(scoreGenerator.getRoundScore(0, [[5,0]])).toEqual(5)
    });
  });
});
