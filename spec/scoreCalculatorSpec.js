'use strict';

describe('ScoreCalculator', () => {
  let scoreCalculator

  beforeEach(() => {
    scoreCalculator = new ScoreCalculator(); 
  });
  
  describe('#frame_scores', () => {
    describe('when less than 10 frames played', () => {
      it('returns score for one non-strike/spare frame', () => {
        const frames = [[3, 4]];
        const scores = [7];
        expect(scoreCalculator.frameScores(frames)).toEqual(scores);
      });

      it('returns score for two non-strike/spare frames', () => {
        const frames = [[2, 1], [5, 0]];
        const scores = [3, 5];
        expect(scoreCalculator.frameScores(frames)).toEqual(scores);
      });

      it('returns score when spare achieved (not on last frame)', () => {
        const frames = [[5, 5], [2, 4]];
        const scores = [12, 6];
        expect(scoreCalculator.frameScores(frames)).toEqual(scores);
      });

      it('returns score when spare achieved on last frame', () => {
        const frames = [[3, 4], [2, 8]];
        const scores = [7, 10];
        expect(scoreCalculator.frameScores(frames)).toEqual(scores);
      });

      it('returns score when strike achieved (not on last frame)', () => {
        const frames = [[10], [6, 1]];
        const scores = [17, 7];
        expect(scoreCalculator.frameScores(frames)).toEqual(scores);
      });

      it('returns score when strike achieved on last frame', () => {
        const frames = [[9, 0], [10]];
        const scores = [9, 10];
        expect(scoreCalculator.frameScores(frames)).toEqual(scores);
      });

      it('returns score when two strikes achieved in a row', () => {
        const frames = [[10], [10], [5, 3]];
        const scores = [25, 18, 8];
        expect(scoreCalculator.frameScores(frames)).toEqual(scores);
      });

      it('returns score when two strikes achieved in a row on last frame', () => {
        const frames = [[10], [10]];
        const scores = [20, 10];
        expect(scoreCalculator.frameScores(frames)).toEqual(scores);
      });
    });

    describe('when 10 frames played', () => {
      let ninthIndex
      let tenthIndex
      let eightFrames
      let nineFrames

      beforeEach(() => {
        ninthIndex = 8;
        tenthIndex = 9;
        eightFrames = [];
        for(let i=0; i<8; i++) {
          eightFrames.push([0, 0]);
        }
        nineFrames = Object.assign([], eightFrames);
        nineFrames.push([0, 0]);
      });

      it('returns score for non-strike/spare in 10th frame', () => {
        const frames = nineFrames;
        frames.push([4, 1]);
        const tenthFrameScore = 5;
        expect(scoreCalculator.frameScores(frames)[tenthIndex]).toEqual(tenthFrameScore);
      });

      it('returns score for spare in 10th frame (extra roll not yet rolled)', () => {
        const frames = nineFrames;
        frames.push([8, 2]);
        const tenthFrameScore = 10;
        expect(scoreCalculator.frameScores(frames)[tenthIndex]).toEqual(tenthFrameScore);
      });

      it('returns score for spare in 10th frame with extra roll', () => {
        const frames = nineFrames;
        frames.push([1, 9, 2]);
        const tenthFrameScore = 12;
        expect(scoreCalculator.frameScores(frames)[tenthIndex]).toEqual(tenthFrameScore);
      });

      it('returns score for strike in 10th frame (extra roll not yet rolled)', () => {
        const frames = nineFrames;
        frames.push([10]);
        const tenthFrameScore = 10;
        expect(scoreCalculator.frameScores(frames)[tenthIndex]).toEqual(tenthFrameScore);
      });

      it('returns score for strike in 10th frame with extra rolls', () => {
        const frames = nineFrames;
        frames.push([10, 3, 10]);
        const tenthFrameScore = 23;
        expect(scoreCalculator.frameScores(frames)[tenthIndex]).toEqual(tenthFrameScore);
      });

      it('returns score for strike in 9th frame where extra rolls in tenth frame', () => {
        const frames = eightFrames;
        frames.push([10]);
        frames.push([6, 4, 3]);
        const ninthFrameScore = 20;
        expect(scoreCalculator.frameScores(frames)[ninthIndex]).toEqual(ninthFrameScore);
      });

      it('returns score for strike in 9th frame where strike in 10th frame', () => {
        const frames = eightFrames;
        frames.push([10]);
        frames.push([10, 2, 7]);
        const ninthFrameScore = 22;
        expect(scoreCalculator.frameScores(frames)[ninthIndex]).toEqual(ninthFrameScore);
      });
    });
  });

  describe('#total score', () => {
    it('returns total score for a gutter game', () => {
      const frames = [];
      for(let i=0; i<10; i++) {
        frames.push([0, 0]);
      };
      const score = 0;
      expect(scoreCalculator.gameScore(frames)).toEqual(score);
    });

    it('returns total score for a perfect game', () => {
      const frames = [];
      for(let i=0; i<9; i++) {
        frames.push([10]);
      };
      frames.push([10, 10, 10]);
      const score = 300;
      expect(scoreCalculator.gameScore(frames)).toEqual(score);
    });

    it('returns total score for a mixed game', () => {
      const frames = [
        [1, 4],
        [4, 5],
        [6, 4],
        [5, 5],
        [10],
        [0, 1],
        [7, 3],
        [6, 4],
        [10],
        [2, 8, 6]
      ];
      const score = 133;
      expect(scoreCalculator.gameScore(frames)).toEqual(score);
    });
  });
});
