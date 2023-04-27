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
      scorecard.addFrame(10,0)
      expect(scorecard.checkSpecials(0)).toEqual("strike")
    })
 
    it ('returns a spare if given frame is [5,5]', () =>{
      scorecard.addFrame(5,5)
      expect(scorecard.checkSpecials(0)).toEqual("spare")
    })

    it ('returns a spare if given frame is [0,10]', () =>{
      scorecard.addFrame(0,10)
      expect(scorecard.checkSpecials(0)).toEqual("spare")
    })

    it ('returns normal if frame is normal [2,3]', () =>{
      scorecard.addFrame(2,3)
      expect(scorecard.checkSpecials(0)).toBe("normal")
    })

    it ('returns gutter if frame is [0,0]', () =>{
      scorecard.addFrame(0,0)
      expect(scorecard.checkSpecials(0)).toBe("gutter")
    })
  })
    
  describe ('addFrameScore method', () =>{
    it ('counts the score of the given frame normally if no strike or spare', () => {
      scorecard.addFrame(1,2)
      scorecard.addFrame(4,5)
      expect(scorecard.addFrameScore(1)).toEqual(9)
    })

    // it ('shows the current score as 0 upon initialisation', () => {
    //   expect(scorecard.calculateScore()).toEqual(0)
    // })

    // it ('update players current score each frame', () => {
    //   scorecard.addFrame(2,3)
      // expect(scorecard.getCurrentScore()).toEqual(5)
    // })
  })
  
  describe ('helper methods', () => {
    it ('flattens an array and returns the sum', () =>{
      expect(scorecard.flattenArrayAndSumContents([4,5])).toEqual(9)
    })
  })
})
