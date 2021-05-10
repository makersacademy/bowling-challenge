'use strict';

describe('ScoreRecorder', () => {
  let nineFrames

  beforeEach(() => {
    nineFrames = [];
    for(let i=0; i<9; i++) {
      nineFrames.push([0, 0]);
    }
  });

  describe('#add_roll', () => {
    it('adds first roll', () => {
      let scoreRecorder = new ScoreRecorder();
      scoreRecorder.addRoll(1);
      const expectedFrames = [[1]];
      expect(scoreRecorder.frames()).toEqual(expectedFrames);
    });

    it('adds second roll', () => {
      const frames = [[1]];
      let scoreRecorder = new ScoreRecorder(frames);
      scoreRecorder.addRoll(2);
      const expectedFrames = [[1, 2]];
      expect(scoreRecorder.frames()).toEqual(expectedFrames);
    });

    it('adds second roll after strike', () => {
      const frames = [[10]];
      let scoreRecorder = new ScoreRecorder(frames);
      scoreRecorder.addRoll(3);
      const expectedFrames = [[10], [3]];
      expect(scoreRecorder.frames()).toEqual(expectedFrames);
    });

    it('adds extra roll after strike 1st roll on tenth frame and additional roll', () => {
      const frames = nineFrames;
      frames.push([10, 1]);
      let scoreRecorder = new ScoreRecorder(frames);
      scoreRecorder.addRoll(4);
      const expectedFrames = nineFrames;
      expectedFrames.push([10, 1, 4]);
      expect(scoreRecorder.frames()).toEqual(expectedFrames);
    });

    it('adds extra roll after spare on tenth frame', () => {
      const frames = nineFrames;
      frames.push([5, 5]);
      let scoreRecorder = new ScoreRecorder(frames);
      scoreRecorder.addRoll(5);
      const expectedFrames = nineFrames;
      expectedFrames.push([5, 5, 5]);
      expect(scoreRecorder.frames()).toEqual(expectedFrames);
    });

    it('does not add roll after complete game (no extra roll)', () => {
      const frames = nineFrames;
      frames.push([7, 1]);
      let scoreRecorder = new ScoreRecorder(frames);
      scoreRecorder.addRoll(6);
      const expectedFrames = nineFrames;
      expectedFrames.push([7, 1]);
      expect(scoreRecorder.frames()).toEqual(expectedFrames);
    });

    it('does not add roll after extra roll', () => {
      const frames = nineFrames;
      frames.push([10, 10, 10]);
      let scoreRecorder = new ScoreRecorder(frames);
      scoreRecorder.addRoll(10);
      const expectedFrames = nineFrames;
      expectedFrames.push([10, 10, 10]);
      expect(scoreRecorder.frames()).toEqual(expectedFrames);
    });
  });

  describe('#next_input_row', () => {
    describe('when less than 10 frames played', () => {
      it('returns 1 for new game', () => {
        const frames = [];
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputRoll()).toEqual(1);
      });

      it('returns 2 after first (non_strike) roll', () => {
        const frames = [[3]];
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputRoll()).toEqual(2);
      });

      it('returns 1 after two (non_strike) rolls', () => {
        const frames = [[6, 4]];
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputRoll()).toEqual(1);
      });

      it('returns 2 after three (non_strike) rolls', () => {
        const frames = [[2, 3], [9]];
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputRoll()).toEqual(2);
      });

      it('returns 1 after strike', () => {
        const frames = [[10]];
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputRoll()).toEqual(1);
      });
    });

    describe('when 10 frames played', () => {
      it('returns 2 after after first (non_strike) roll', () => {
        const frames = nineFrames;
        frames.push([8]);
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputRoll()).toEqual(2);
      });

      it('returns nil after full game (no spare/strikes', () => {
        const frames = nineFrames;
        frames.push([2, 2]);
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputRoll()).toEqual(0);
      });

      it('returns 2 after strike first roll', () => {
        const frames = nineFrames;
        frames.push([10]);
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputRoll()).toEqual(2);
      });

      it('returns 3 after strike first roll and additional roll', () => {
        const frames = nineFrames;
        frames.push([10, 0]);
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputRoll()).toEqual(3);
      });

      it('returns 3 after spare', () => {
        const frames = nineFrames;
        frames.push([5, 5]);
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputRoll()).toEqual(3);
      });

      it('returns nil after extra roll played', () => {
        const frames = nineFrames;
        frames.push([0, 10, 3]);
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputRoll()).toEqual(0);
      });
    });
  });

  describe('#next_input_frame', () => {
    describe('when less than 10 frames played', () => {
      it('returns 1 for new game', () => {
        const frames = [];
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputFrame()).toEqual(1);
      });

      it('returns 1 after one (non-strike) roll', () => {
        const frames = [[9]];
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputFrame()).toEqual(1);
      });

      it('returns 2 after two (non-strike) rolls', () => {
        const frames = [[3, 4]];
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputFrame()).toEqual(2);
      });

      it('returns 2 after 1 strike roll', () => {
        const frames = [[10]];
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputFrame()).toEqual(2);
      });
    });

    describe('when 10 frames played', () => {
      it('returns 10 after strike first roll and additional roll', () => {
        const frames = nineFrames;
        frames.push([10, 0]);
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputFrame()).toEqual(10);
      });

      it('returns 10 after spare', () => {
        const frames = nineFrames;
        frames.push([5, 5]);
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputFrame()).toEqual(10);
      });

      it('returns nil after second roll (not strike or spare) taken', () => {
        const frames = nineFrames;
        frames.push([1, 2]);
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputFrame()).toEqual(0);
      });

      it('returns nil after extra roll taken', () => {
        const frames = nineFrames;
        frames.push([10, 10, 10]);
        let scoreRecorder = new ScoreRecorder(frames);
        expect(scoreRecorder.nextInputFrame()).toEqual(0);
      });
    });
  });
});
