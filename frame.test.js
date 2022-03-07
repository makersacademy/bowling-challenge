const Frame = require('./frame')
const Scorecard = require('./scorecard')

describe('Frame', () => {
  let frame
  let scorecard

  beforeEach(() => {
    frame = new Frame()
    scorecard = new Scorecard()
  })

  describe('a simple frame of two rolls with no strikes or spares', () => {
    it('gives the score at the start of a frame', () => {
      expect(frame.calculateTotalScore()).toBe(0)
    })

    it('captures score of first roll', () => {
      frame.enterFirstRollScore(3, scorecard)
      expect(frame.firstRollScore).toEqual(3)
    })

    it('adds first roll score to frame total', () => {
      frame.enterFirstRollScore(3, scorecard)
      expect(frame.calculateTotalScore()).toEqual(3)
    })

    it('captures score of second roll', () => {
      frame.enterSecondRollScore(2, scorecard)
      expect(frame.secondRollScore).toEqual(2)
    })

    // This is taken from the example of the first two rolls on example_ten_pin_scoring.png
    it('knows a roll of one on the first roll and four on the second roll scores a total of five', () => {
      frame.enterFirstRollScore(1, scorecard)
      frame.enterSecondRollScore(4, scorecard)
      expect(frame.calculateTotalScore()).toBe(5)
    })
  })

  describe('when calculating any bonus scores', () => {
    it('flags the frame as a strike when a strike is scored', () => {
      frame.enterFirstRollScore(10, scorecard)
      expect(frame.strikeBoolean).toBe(true)
    })

    it('flags the frame as a spare when a spare is scored', () => {
      frame.enterFirstRollScore(6, scorecard)
      frame.enterSecondRollScore(4, scorecard)
      expect(frame.spareBoolean).toBe(true)
    })

    it('adds a bonus to the spare frame total score', () => {
      frame2 = new Frame()
      scorecard.frames = [frame, frame2]
      frame.enterFirstRollScore(6, scorecard)
      frame.enterSecondRollScore(4, scorecard)
      frame2.enterFirstRollScore(5, scorecard)
      expect(frame.bonusScore).toEqual(5)
      expect(frame.totalScore).toEqual(15)
    })

    it('flags the frame as a strike when a strike is scored', () => {
      frame.enterFirstRollScore(10, scorecard)
      expect(frame.strikeBoolean).toBe(true)
    })

    it('adds both the current frame roll scores to the previous frame bonus', () => {
      frame2 = new Frame()
      scorecard.frames = [frame, frame2]
      frame.enterFirstRollScore(10, scorecard)
      frame2.enterFirstRollScore(5, scorecard)
      frame2.enterSecondRollScore(4, scorecard)
      expect(frame.bonusScore).toEqual(9)
    })
  })

  describe('when a user enters an invalid score', () => {
    beforeEach(() => {
      frame = new Frame()
      scorecard = new Scorecard()
    })

    it('throws an error if more than ten is entered for the first frame roll', () => {
      expect(() => {
        frame.enterFirstRollScore(11)
      }).toThrow('A maximum of 10 can be scored per frame.')
    })

    it('throws error if more than ten is entered for whole frame score', () => {
      frame.enterFirstRollScore(6, scorecard)
      expect(() => {
        frame.enterSecondRollScore(5, scorecard)
      }).toThrow('A maximum of 10 can be scored per frame.')
    })
  })

  describe('The tenth frame', () => {
    let scorecard
    let frame1
    let frame2
    let frame3
    let frame4
    let frame5
    let frame6
    let frame7
    let frame8
    let frame9

    // beforeEach(() => {
    //   frame = new Frame;
    //   scorecard = new Scorecard;

    //   frame1 = new Frame;
    //   frame2 = new Frame;
    //   frame3 = new Frame;
    //   frame4 = new Frame;
    //   frame5 = new Frame;
    //   frame6 = new Frame;
    //   frame7 = new Frame;
    //   frame8 = new Frame;
    //   frame9 = new Frame;
    //   scorecard.frames = [];
    //   scorecard.frames.push(frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9);
    //   frame1.enterFirstRollScore(3, scorecard);
    //   frame1.enterSecondRollScore(5, scorecard);
    //   frame2.enterFirstRollScore(5, scorecard);
    //   frame2.enterSecondRollScore(3, scorecard);
    //   frame3.enterFirstRollScore(4, scorecard);
    //   frame3.enterSecondRollScore(4, scorecard);
    //   frame4.enterFirstRollScore(5, scorecard);
    //   frame4.enterSecondRollScore(4, scorecard);
    //   frame5.enterFirstRollScore(2, scorecard);
    //   frame6.enterFirstRollScore(5, scorecard);
    //   frame6.enterSecondRollScore(4, scorecard);
    //   frame7.enterFirstRollScore(5, scorecard);
    //   frame7.enterSecondRollScore(3, scorecard);
    //   frame8.enterFirstRollScore(6, scorecard);
    //   frame8.enterSecondRollScore(2, scorecard);
    //   frame9.enterFirstRollScore(7, scorecard);
    //   frame9.enterSecondRollScore(2, scorecard);
    // });

    // it('prevents a bonus roll from being calculated when there are fewer than ten frames played', () => {
    //   expect(() => {
    //     frame8.enter10thFirstBonusRollScore(4, scorecard);
    //   }).toThrow('This bonus roll is only available in the 10th frame');
    // });

    // it('adds the second bonus roll score to strike bonus', () => {
    //   const frame10 = new Frame;
    //   scorecard.frames.push(frame10);
    //   frame10.enterFirstRollScore(10, scorecard);
    //   frame10.enter10thFirstBonusRollScore(10, scorecard);
    //   frame10.enter10thSecondBonusRollScore(10, scorecard);
    //   expect(frame10.bonusScore).toEqual(20);
    //   expect(frame10.totalScore).toEqual(30);
    // });
  })
})
