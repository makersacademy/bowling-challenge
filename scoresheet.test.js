const Scoresheet = require('./scoresheet')

describe('Scoresheet', () => {
  beforeEach(() => {
    scoresheet = new Scoresheet();
    mockEmptyFrame = {
      rolls: () => 0,
      isStrike: () => false,
      isSpare: () => false
    }
    mockFrame = {
      rolls: () => 2,
      firstRoll: () => 3,
      secondRoll: () => 4,
      isStrike: () => false,
      isSpare: () => false
    }
    mockStrike = {
      rolls: () => 1,
      firstRoll: () => 10,
      secondRoll: () => 7,
      bonusRoll: () => 2,
      isStrike: () => true,
      isSpare: () => false
    }
    mockSpare = {
      rolls: () => 2,
      firstRoll: () => 3,
      secondRoll: () => 7,
      bonusRoll: () => 5,
      isStrike: () => false,
      isSpare: () => true
    }
    perfectStrike = {
      rolls: () => 1,
      firstRoll: () => 10,
      secondRoll: () => 10,
      bonusRoll: () => 10,
      isStrike: () => true,
      isSpare: () => false
    }
   })
  
  describe('addFrame', () => {
    it('can save a Frame', () => {
      scoresheet.addFrame(mockFrame);
      expect(scoresheet.frames.length).toEqual(1);
    })
  })

  describe('newFrame', () => {
    it('can create a new empty frame', () => {
      scoresheet.newFrame(mockEmptyFrame);
      expect(scoresheet.currentFrame.rolls()).toEqual(0);
    })
  })

  describe('frameScore', () => {
    it('can calculate the score of a frame', () => {
      scoresheet.addFrame(mockFrame);
      expect(scoresheet.frameScore(0)).toEqual(7);
    })
  })

  describe('totalScore', () => {
    it('can calculate the total score of a game', () => {
      scoresheet.addFrame(mockFrame);
      scoresheet.addFrame(mockFrame);
      scoresheet.addFrame(mockFrame);
      scoresheet.addFrame(mockFrame);
      scoresheet.addFrame(mockFrame);
      scoresheet.addFrame(mockFrame);
      scoresheet.addFrame(mockFrame);
      scoresheet.addFrame(mockFrame);
      scoresheet.addFrame(mockFrame);
      scoresheet.addFrame(mockFrame);
      expect(scoresheet.totalScore()).toEqual(70);
    })
  })

  describe('strikeBonus', () => {
    it('should add the values of the next 2 rolls as a bonus for hitting a strike', () => {
      scoresheet.addFrame(mockStrike);
      scoresheet.addFrame(mockFrame);
      expect(scoresheet.frameScore(0)).toEqual(17);
    })

    it('should add the values of the next 2 rolls as a bonus even if from different frames', () => {
      scoresheet.addFrame(mockStrike);
      scoresheet.addFrame(mockStrike);
      scoresheet.addFrame(mockFrame);
      expect(scoresheet.frameScore(0)).toEqual(23);
    })

    it('if on the 9th frame a strike is landed, it will add the first two rolls of the tenth frame even if tenth frame is a strike', () => {
      scoresheet.addFrame(mockFrame);
      scoresheet.addFrame(mockFrame);
      scoresheet.addFrame(mockFrame);
      scoresheet.addFrame(mockFrame);
      scoresheet.addFrame(mockFrame);
      scoresheet.addFrame(mockFrame);
      scoresheet.addFrame(mockFrame);
      scoresheet.addFrame(mockFrame);
      scoresheet.addFrame(mockStrike);
      scoresheet.addFrame(mockStrike);
      expect(scoresheet.frameScore(8)).toEqual(27)
    })
  })

  describe('spareBonus', () => {
    it('should add the values of the next roll as a bonus for hitting a spare', () => {
      scoresheet.addFrame(mockSpare);
      scoresheet.addFrame(mockFrame);
      expect(scoresheet.frameScore(0)).toEqual(13);
    })
  })

  it('will have a bonus roll on the final frame if a spare is landed', () => {
    scoresheet.addFrame(mockFrame);
    scoresheet.addFrame(mockFrame);
    scoresheet.addFrame(mockFrame);
    scoresheet.addFrame(mockFrame);
    scoresheet.addFrame(mockFrame);
    scoresheet.addFrame(mockFrame);
    scoresheet.addFrame(mockFrame);
    scoresheet.addFrame(mockFrame);
    scoresheet.addFrame(mockFrame);
    scoresheet.addFrame(mockSpare);
    expect(scoresheet.frameScore(9)).toEqual(15);
  })

  it('will have a bonus roll on the final frame if a strike is landed', () => {
    scoresheet.addFrame(mockFrame);
    scoresheet.addFrame(mockFrame);
    scoresheet.addFrame(mockFrame);
    scoresheet.addFrame(mockFrame);
    scoresheet.addFrame(mockFrame);
    scoresheet.addFrame(mockFrame);
    scoresheet.addFrame(mockFrame);
    scoresheet.addFrame(mockFrame);
    scoresheet.addFrame(mockFrame);
    scoresheet.addFrame(mockStrike);
    expect(scoresheet.frameScore(9)).toEqual(19);
  })

  it('calculates score of perfect game correctly', () => {
    scoresheet.addFrame(perfectStrike);
    scoresheet.addFrame(perfectStrike);
    scoresheet.addFrame(perfectStrike);
    scoresheet.addFrame(perfectStrike);
    scoresheet.addFrame(perfectStrike);
    scoresheet.addFrame(perfectStrike);
    scoresheet.addFrame(perfectStrike);
    scoresheet.addFrame(perfectStrike);
    scoresheet.addFrame(perfectStrike);
    scoresheet.addFrame(perfectStrike);
    expect(scoresheet.totalScore()).toEqual(300);
  })
})

