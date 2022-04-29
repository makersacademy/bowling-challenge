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
      isStrike: () => true,
      isSpare: () => false
    }
    mockSpare = {
      rolls: () => 2,
      firstRoll: () => 3,
      secondRoll: () => 7,
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
  })

  describe('spareBonus', () => {
    it('should add the values of the next roll as a bonus for hitting a spare', () => {
      scoresheet.addFrame(mockSpare);
      scoresheet.addFrame(mockFrame);
      expect(scoresheet.frameScore(0)).toEqual(13);
    })
  })

})

