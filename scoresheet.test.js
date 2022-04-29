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
      expect(scoresheet.frameScore(mockFrame)).toEqual(7);
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

})

