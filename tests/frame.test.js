const Frame = require('../src/frame');

describe('Frame', () => {
  it('constructs a zero frame', () => {
    frame = new Frame([0, 0]);

    expect(frame.rolls).toEqual([0, 0]);
    expect(frame.getFrameScore()).toEqual(0);
  })

  it('finds score of a simple frame', () => {
    frame = new Frame([1, 2]);

    expect(frame.rolls).toEqual([1, 2]);
    expect(frame.getFrameScore()).toEqual(3);
  })

  it('recognises a spare', () => {
    frame = new Frame([4, 6]);
    frame2 = new Frame([4, 5]);

    expect(frame.spare()).toEqual(true);
    expect(frame2.spare()).toEqual(false);
  })

  it('recognises a strike', () => {
    frame = new Frame([10]);

    expect(frame.spare()).toEqual(false);
    expect(frame.strike()).toEqual(true);
  })

  it('scores a spare or strike as null', () => {
    frame = new Frame([10]);
    frame2 = new Frame([8, 2]);

    expect(frame.getFrameScore()).toEqual(null);
    expect(frame2.getFrameScore()).toEqual(null);
  })


  describe('scoring a spare frame', () => {
    it('updates spare score once next roll is 0', () => {
      frame = new Frame([4, 6])
      frame2 = new Frame([0, 0])

      frame.scoreWithSpareBonus(frame2)
      expect(frame.getFrameScore()).toEqual(10)
    })

    it('updates spare score once next roll is 4', () => {
      frame = new Frame([4, 6])
      frame2 = new Frame([4, 0])

      expect(frame.getFrameScore()).toEqual(null)
      frame.scoreWithSpareBonus(frame2)
      expect(frame.getFrameScore()).toEqual(14)
    })

    it('updates spare score once next roll is strike', () => {
      frame = new Frame([4, 6])
      frame2 = new Frame([10])

      expect(frame.getFrameScore()).toEqual(null)
      frame.scoreWithSpareBonus(frame2)
      expect(frame.getFrameScore()).toEqual(20)
    })
  })

  describe('scoring a strike frame', () => {
    it('updates the score when followed by zero frame', () => {
      frame = new Frame([10])
      frame2 = new Frame([0, 0])

      expect(frame.getFrameScore()).toEqual(null)
      frame.scoreWithStrikeBonus(frame2, undefined)
      expect(frame.getFrameScore()).toEqual(10)
    })

    it('updates the score when followed by simple frame', () => {
      frame = new Frame([10])
      frame2 = new Frame([2, 2])

      expect(frame.getFrameScore()).toEqual(null)
      frame.scoreWithStrikeBonus(frame2, undefined)
      expect(frame.getFrameScore()).toEqual(14)
    })

    it('updates the score when followed by a spare', () => {
      frame = new Frame([10])
      frame2 = new Frame([2, 8])

      expect(frame.getFrameScore()).toEqual(null)
      frame.scoreWithStrikeBonus(frame2, undefined)
      expect(frame.getFrameScore()).toEqual(20)
    })

    it('does not update the score when followed by a strike', () => {
      frame = new Frame([10])
      frame2 = new Frame([10])

      frame.scoreWithStrikeBonus(frame2, undefined)
      expect(frame.getFrameScore()).toEqual(null)
    })

    it('updates the score when followed by a strike then zero', () => {
      frame = new Frame([10])
      frame2 = new Frame([10])
      frame3 = new Frame([0, 5])
      frame.scoreWithStrikeBonus(frame2, frame3)

      expect(frame.getFrameScore()).toEqual(20)
    })

    it('updates the score when followed by a strike then simplle frame', () => {
      frame = new Frame([10])
      frame2 = new Frame([10])
      frame3 = new Frame([2, 5])
      frame.scoreWithStrikeBonus(frame2, frame3)

      expect(frame.getFrameScore()).toEqual(22)
    })

    it('updates the score when followed by two strikes', () => {
      frame = new Frame([10])
      frame2 = new Frame([10])
      frame3 = new Frame([10])
      frame.scoreWithStrikeBonus(frame2, frame3)

      expect(frame.getFrameScore()).toEqual(30)
    })
  })
})