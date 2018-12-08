'use strict';

describe('Scorecard:', function() {

  var game;

  beforeEach(function() {
    game = new Scorecard();
  });

  describe('new:', function() {
    it('_scores is empty', function() {
      expect(game._scores).toEqual([]);
    });

    it('_frames is empty', function() {
      expect(game._frames).toEqual([]);
    });
  });

  describe('.throw:', function() {
    it('calls .recordsAStrike if 10 is entered on the first throw of a frame', function() {
      game.throw(10);
      expect(game._scores).toEqual([10,0]);
    });

    it('calls .recordsNumerOf(pinsKnockedDown) for all other numbers', function() {
      game.throw(5);
      expect(game._scores).toEqual([5]);
    });

    it('calls .thenTalliesTheScoreAtTheEndOfEachFrame', function() {
      game.throw(3);
      game.throw(4);
      expect(game._frames).toEqual([7]);
    });
  });

  describe('.recordsAStrike:', function() {
    it('10, and 0 have been added to _scores', function() {
      game.recordsAStrike();
      expect(game._scores).toEqual([10,0]);
    });
  });

  describe('.recordsNumberOf(pinsKnockedDown):', function() {
    it('5 has been added to _scores', function() {
      game.recordsNumberOf(5);
      expect(game._scores).toEqual([5]);
    });
  });

  describe('.thenTalliesTheScoreAtTheEndOfEachFrame:', function() {
    it('the scores from a non-strike/non-spare frame are tallied and added to _frames', function() {
      game._scores.push(3, 4);
      game.thenTalliesTheScoreAtTheEndOfEachFrame();
      expect(game._frames).toEqual([7]);
    });

    it('the scores from a spare frame are tallied after one more throw', function() {
      game._scores.push(5, 5, 5);
      game.thenTalliesTheScoreAtTheEndOfEachFrame();
      expect(game._frames).toEqual([15]);
    });

    it('the scores from a strike frame are talled after two more throws', function() {
      game._scores.push(10, 0, 10, 0, 10, 0);
      game.thenTalliesTheScoreAtTheEndOfEachFrame();
      expect(game._frames).toEqual([30]);
    });

    it('calls .recordsTheTallyAtTheEndOfThisFrameAs(hold, i)', function() {
      game._scores.push(10, 0, 10, 0, 10, 0);
      game.thenTalliesTheScoreAtTheEndOfEachFrame();
      expect(game._frames).toEqual([30]);
    });
  });

  describe('.recordsTheTallyAtTheEndOfThisFrameAs(hold, i)', function() {
    it('adds the tally being held to _frames', function() {
      game.recordsTheTallyAtTheEndOfThisFrameAs(7, 1);
      expect(game._frames).toEqual([7]);
    });
  });
});
