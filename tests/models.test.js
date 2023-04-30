const Frame = require('../lib/models').Frame
const ScoreCard = require('../lib/models').ScoreCard

describe('ScoreCard', () => {
  describe('ScoreCard scores a perfect game', () => {
    it('returns a score of 300', () => {
      const frame_1 = new Frame(1, [10]);
      const frame_2 = new Frame(2, [10]);
      const frame_3 = new Frame(3, [10]);
      const frame_4 = new Frame(4, [10]);
      const frame_5 = new Frame(5, [10]);
      const frame_6 = new Frame(6, [10]);
      const frame_7 = new Frame(7, [10]);
      const frame_8 = new Frame(8, [10]);
      const frame_9 = new Frame(9, [10]);
      const frame_10 = new Frame(10, [10, 10, 10]);
      const score_card = new ScoreCard();
      score_card.add_frame(frame_1);
      score_card.add_frame(frame_2);
      score_card.add_frame(frame_3);
      score_card.add_frame(frame_4);
      score_card.add_frame(frame_5);
      score_card.add_frame(frame_6);
      score_card.add_frame(frame_7);
      score_card.add_frame(frame_8);
      score_card.add_frame(frame_9);
      score_card.add_frame(frame_10);
      const result = score_card.current_score();
      expect(result).toBe(300);
    });
  });
});

describe("ScoreCard scores Maker's example", () => {
  it("returns a score of 133", () => {
    const frame_1 = new Frame(1, [1, 4]);
    const frame_2 = new Frame(2, [4, 5]);
    const frame_3 = new Frame(3, [6, 4]);
    const frame_4 = new Frame(4, [5, 5]);
    const frame_5 = new Frame(5, [10]);
    const frame_6 = new Frame(6, [0, 1]);
    const frame_7 = new Frame(7, [7, 3]);
    const frame_8 = new Frame(8, [6, 4]);
    const frame_9 = new Frame(9, [10]);
    const frame_10 = new Frame(10, [2, 8, 6]);
    const score_card = new ScoreCard();
    score_card.add_frame(frame_1);
    score_card.add_frame(frame_2);
    score_card.add_frame(frame_3);
    score_card.add_frame(frame_4);
    score_card.add_frame(frame_5);
    score_card.add_frame(frame_6);
    score_card.add_frame(frame_7);
    score_card.add_frame(frame_8);
    score_card.add_frame(frame_9);
    score_card.add_frame(frame_10);
    const result = score_card.current_score();
    expect(result).toBe(133);
  });
})

describe('ScoreCard', () => {
  describe('ScoreCard scores a gutter game', () => {
    it('returns a score of 0', () => {
      const frame_1 = new Frame(1, [0, 0]);
      const frame_2 = new Frame(2, [0, 0]);
      const frame_3 = new Frame(3, [0, 0]);
      const frame_4 = new Frame(4, [0, 0]);
      const frame_5 = new Frame(5, [0, 0]);
      const frame_6 = new Frame(6, [0, 0]);
      const frame_7 = new Frame(7, [0, 0]);
      const frame_8 = new Frame(8, [0, 0]);
      const frame_9 = new Frame(9, [0, 0]);
      const frame_10 = new Frame(10, [0, 0]);
      const score_card = new ScoreCard();
      score_card.add_frame(frame_1);
      score_card.add_frame(frame_2);
      score_card.add_frame(frame_3);
      score_card.add_frame(frame_4);
      score_card.add_frame(frame_5);
      score_card.add_frame(frame_6);
      score_card.add_frame(frame_7);
      score_card.add_frame(frame_8);
      score_card.add_frame(frame_9);
      score_card.add_frame(frame_10);
      const result = score_card.current_score();
      expect(result).toBe(0);
    });
  });
});

