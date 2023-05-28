const Scorecard = require('../src/scorecard');

describe('Scorecard', () => {
  let scorecard;
  beforeEach(() => {
    scorecard = new Scorecard();
  })

  describe('addFrame', () => {
    it('starts with an empty frames array', () => {
      expect(scorecard.frames).toEqual([]);
    })

    it('adds one frame to frames array', () => {
      scorecard.addFrame(2, 2);

      expect(scorecard.frames[0].rolls).toEqual([2, 2]);
    })

    it('adds two frames to frames array', () => {
      scorecard.addFrame(2, 2);
      scorecard.addFrame(3, 4);

      expect(scorecard.frames[0].rolls).toEqual([2, 2]);
      expect(scorecard.frames[1].rolls).toEqual([3, 4]);
    })
  })

  describe('calculateScore after one frame', () => {
    it('calculates score before any frames added', () => {

      expect(scorecard.currentScore()).toEqual(0);
    })

    it('calculates score after one zero frame', () => {
      scorecard.addFrame(0, 0);

      expect(scorecard.currentScore()).toEqual(0);
    })

    it('calculates score after one simple frame', () => {
      scorecard.addFrame(2, 4);

      expect(scorecard.currentScore()).toEqual(6);
    })

    it('calculates null score when one spare added', () => {
      scorecard.addFrame(2, 8);

      expect(scorecard.currentScore()).toEqual(0);
    })

    it('calculates null score when one strike added', () => {
      scorecard.addFrame(10);

      expect(scorecard.currentScore()).toEqual(0);
    })
  })

  describe('currentScore after multiple frames', () => {
    it('calculates score for gutter game', () => {
      for(let i = 0 ; i < 10 ; i ++) {
        scorecard.addFrame(0, 0);
      }

      expect(scorecard.currentScore()).toEqual(0)
    })

    it('calculates score after two simple frames', () => {
      scorecard.addFrame(2, 3);
      scorecard.addFrame(4, 5);

      expect(scorecard.currentScore()).toEqual(14)
    })

    it('calculates score after ten simple frames', () => {
      for(let i = 0 ; i < 10 ; i ++) {
        scorecard.addFrame(2, 2);
      }

      expect(scorecard.currentScore()).toEqual(40)
    })

    it('calculates score after spare then simple frame', () => {
      scorecard.addFrame(2, 8);
      scorecard.addFrame(2, 2);

      expect(scorecard.currentScore()).toEqual(16)
    })

    it('calculates score after two spares', () => {
      scorecard.addFrame(2, 8);
      scorecard.addFrame(2, 8);

      expect(scorecard.currentScore()).toEqual(12)
    })

    it('calculates score after three spares', () => {
      scorecard.addFrame(2, 8);
      scorecard.addFrame(2, 8);
      scorecard.addFrame(2, 8);

      expect(scorecard.currentScore()).toEqual(24)
    })

    it('calculates score after three spares and zero frame', () => {
      scorecard.addFrame(2, 8);
      scorecard.addFrame(2, 8);
      scorecard.addFrame(2, 8);
      scorecard.addFrame(0, 0);

      expect(scorecard.currentScore()).toEqual(34)
    })

    it('calculates score after one strike', () => {
      scorecard.addFrame(10);

      expect(scorecard.currentScore()).toEqual(0);
    })

    it('calculates score after a strike and simple frame', () => {
      scorecard.addFrame(10);
      scorecard.addFrame(2, 4);

      expect(scorecard.currentScore()).toEqual(22);
    })

    it('calculates score after two strikes', () => {
      scorecard.addFrame(10);
      scorecard.addFrame(10);

      expect(scorecard.currentScore()).toEqual(0);
    })

    it('calculates score after two strikes and simple frame', () => {
      scorecard.addFrame(10);
      scorecard.addFrame(10);
      scorecard.addFrame(2, 4);

      expect(scorecard.currentScore()).toEqual(44);
    })

    it('calculates score with spares and strikes two strikes', () => {
      scorecard.addFrame(2, 8);
      scorecard.addFrame(10);
      scorecard.addFrame(2, 4);

      expect(scorecard.currentScore()).toEqual(42);
    })
  })

  describe('final frame', () => {
    it('calculates total score with spare final frame', () => {
      for(let i = 0 ; i < 9 ; i ++) {
        scorecard.addFrame(2, 2);
      }
      scorecard.addFrame(4, 6, 5);

      expect(scorecard.currentScore()).toEqual(51);
    })

    it('calculates total score with strike final frame', () => {
      for(let i = 0 ; i < 9 ; i ++) {
        scorecard.addFrame(2, 2);
      }
      scorecard.addFrame(10, 5, 5);

      expect(scorecard.currentScore()).toEqual(56);
    })

    it('calculates total score of a perfect game', () => {
      for(let i = 0 ; i < 9 ; i ++) {
        scorecard.addFrame(10);
      }
      scorecard.addFrame(10, 10, 10);

      expect(scorecard.currentScore()).toEqual(300);
    })
  })

  describe('show', () => {
    it('shows a empty string after no frames', () => {
      expect(scorecard.show()).toEqual({})
    })

    it('shows a scorecard after one zero frame', () => {
      scorecard.addFrame(0, 0);
      expect(scorecard.show()).toEqual({
        1: {"rolls": [0, 0], "score": 0}})
    })

    it('shows a scorecard after two frames', () => {
      scorecard.addFrame(2, 2);
      scorecard.addFrame(2, 2);

      const expectedScorecard = {
        1: {"rolls": [2, 2], "score": 4},
        2: {"rolls": [2, 2], "score": 8}
      }

      expect(scorecard.show()).toEqual(expectedScorecard)
    })

    it('shows a scorecard after three strikes', () => {
      scorecard.addFrame(10);
      scorecard.addFrame(10);
      scorecard.addFrame(10);

      const expectedScorecard = {
        1: {"rolls": [10], "score": 30},
        2: {"rolls": [10], "score": 30},
        3: {"rolls": [10], "score": 30}
      }

      expect(scorecard.show()).toEqual(expectedScorecard)
    })

    it('shows a scorecard with all strikes', () => {
      for(let i = 0 ; i < 9 ; i ++) {
        scorecard.addFrame(10);
      }
      scorecard.addFrame(10, 10, 10)

      const expectedScorecard = {
        1: {"rolls": [10], "score": 30},
        2: {"rolls": [10], "score": 60},
        3: {"rolls": [10], "score": 90},
        4: {"rolls": [10], "score": 120},
        5: {"rolls": [10], "score": 150},
        6: {"rolls": [10], "score": 180},
        7: {"rolls": [10], "score": 210},
        8: {"rolls": [10], "score": 240},
        9: {"rolls": [10], "score": 270},
        10: {"rolls": [10, 10, 10], "score": 300}
      }

      expect(scorecard.show()).toEqual(expectedScorecard)
    })
  })
})