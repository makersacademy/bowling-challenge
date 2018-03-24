'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('when playing', function() {
    it('records the score of roll one', function() {
      frame.play1(3);
      expect(frame.currentScore(frame.rollOne)).toEqual(3);
    });
    it('records the score of roll two', function() {
      frame.play2(6);
      expect(frame.currentScore(frame.rollTwo)).toEqual(6);
    });
  });

  describe('after frame', function() {
    it('gives a total score for the frame', function() {
      frame.play1(3);
      frame.play2(6);
      expect(frame.frameScore()).toEqual(9);
    });
    describe('it knows when the bonus is...', function() {
      it('not awarded', function() {
        frame.play1(3);
        frame.play2(6);
        frame.frameScore
        expect(frame.bonusAward()).toEqual('none')
      });
      it('a strike bonus', function() {
        frame.play1(10);
        frame.play2(0);
        frame.frameScore
        expect(frame.bonusAward()).toEqual('strike')
      });
      it('a spares bonus', function() {
        frame.play1(7);
        frame.play2(3);
        frame.frameScore
        expect(frame.bonusAward()).toEqual('spares')
      });
      it('not inccorectly awarded and prevents against edge cases', function() {
        frame.play1(0);
        frame.play2(0);
        frame.frameScore
        expect(frame.bonusAward()).toEqual('none')
      })
    });
  });
});
