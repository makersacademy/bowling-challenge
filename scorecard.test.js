const Scorecard = require('./scorecard')

describe ('scorecard class', () =>{

  beforeEach(() => {
    scorecard = new Scorecard()
  })
  
  describe ('initialization and adding frames', () => {  
    it('initializes with an empty frame', () =>{
      expect(scorecard.getFrames()).toEqual([])
    })
  
    it('adds a frame into players frames with addFrame', () =>{
      scorecard.addFrame(1,2)
      expect(scorecard.getFrames()).toEqual([[1,2]])
    })
    
    it('stacks multiple frames in an array', () =>{
      scorecard.addFrame(1,2)
      scorecard.addFrame(2,3)
      expect(scorecard.getFrames()).toEqual([[1,2], [2,3]])
    })
  })

  describe('bonus frame after 10th shot', () =>{
    it ('creates a bonus frame of a length of 1 and pushes to array', () =>{
      scorecard.addFrame(1)
      expect(scorecard.getFrames()).toEqual([[1]])
    })
    it ('creates a bonus frame of a length of 3 and pushes to array', () =>{
      scorecard.addFrame(1,2,3)
      expect(scorecard.getFrames()).toEqual([[1,2,3]])
    })
  })
 
  describe ('checkSpecials method', () =>{
    it ('returns strike if given frame is [10,0]', () =>{
      expect(scorecard.checkSpecials([10,0])).toEqual("strike")
    })
 
    it ('returns a spare if given frame is [5,5]', () =>{
      expect(scorecard.checkSpecials([5,5])).toEqual("spare")
    })

    it ('returns a spare if given frame is [0,10]', () =>{
      expect(scorecard.checkSpecials([0,10])).toEqual("spare")
    })

    it ('returns normal if frame is normal [2,3]', () =>{
      expect(scorecard.checkSpecials([1,2])).toBe("normal")
    })

    it ('returns gutter if frame is [0,0]', () =>{
      expect(scorecard.checkSpecials([0,0])).toBe("gutter")
    })
  })
    
  describe ('addFrameScore method', () =>{
    it ('counts the score of the given frame normally if no strike or spare', () => {
      scorecard.addFrame(1,2)
      scorecard.addFrame(4,5)
      expect(scorecard.addFrameScore(1)).toEqual(9)
    })

    it ('includes the bonus points awarded by a spare', () => {
      scorecard.addFrame(4,6)
      scorecard.addFrame(4,5)
      expect(scorecard.addFrameScore(1)).toEqual(13)
    })

    it ('includes the bonus points awarded by a strike', () => {
      scorecard.addFrame(10,0)
      scorecard.addFrame(4,5)
      expect(scorecard.addFrameScore(1)).toEqual(18)
    })
  })

  describe ('calculateScore method', () =>{
    it ('shows the current score as 0 upon initialisation', () => {
      expect(scorecard.calculateScore()).toEqual(0)
    })

    it ('update players current score for first frame', () => {
      scorecard.addFrame(2,3)
      expect(scorecard.calculateScore()).toEqual(5)
    })

    it ('update players current score for each frame', () => {
      scorecard.addFrame(2,3)
      expect(scorecard.calculateScore()).toEqual(5)
      scorecard.addFrame(4,6)
      expect(scorecard.calculateScore()).toEqual(15)
    })

    it ('returns the total score including spare points', () => {
      scorecard.addFrame(5,5)
      scorecard.addFrame(3,5)
      scorecard.addFrame(7,0)
      scorecard.addFrame(2,5)
      expect(scorecard.calculateScore()).toEqual(35)
    })

    it ('returns the total score including consecutive spare points', () => {
      scorecard.addFrame(3,1)
      scorecard.addFrame(3,7)
      scorecard.addFrame(7,3)
      scorecard.addFrame(2,5)
      expect(scorecard.calculateScore()).toEqual(40)
    })

    it ('returns the total score including zigzagged spare points', () => {
      scorecard.addFrame(3,7)
      scorecard.addFrame(2,5)
      scorecard.addFrame(7,3)
      scorecard.addFrame(2,5)
      expect(scorecard.calculateScore()).toEqual(38)
    })

    it ('returns the total score including strike points', () => {
      scorecard.addFrame(10,0)
      scorecard.addFrame(3,5)
      scorecard.addFrame(7,0)
      scorecard.addFrame(2,5)
      expect(scorecard.calculateScore()).toEqual(40)
    })

    it ('returns the total score including consecutive strike points', () => {
      scorecard.addFrame(10,0)
      scorecard.addFrame(10,0)
      scorecard.addFrame(7,0)
      scorecard.addFrame(2,5)
      expect(scorecard.calculateScore()).toEqual(51)
    })

    it ('returns the total score including zigzagged strike points', () => {
      scorecard.addFrame(10,0)
      scorecard.addFrame(5,4)
      scorecard.addFrame(10,0)
      scorecard.addFrame(2,5)
      expect(scorecard.calculateScore()).toEqual(52)
    })
  })
  
  describe ('helper methods', () => {
    it ('flattens an array and returns the sum', () =>{
      expect(scorecard.sum([4,5])).toEqual(9)
    })
  })
})
