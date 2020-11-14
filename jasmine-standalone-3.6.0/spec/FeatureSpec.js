describe('Feature Spec',() => {
   let scorecard

   it('returns the score', () => {
     scorecard = new Scorecard([1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6])
     scorecard.getFrames()
     scorecard.getScoresPerFrame()
     expect(scorecard.getTotalScore()).toEqual(133)
   })

   it('returns the score', () => {
     scorecard = new Scorecard([10,10,10,10,10,10,10,10,10,10,10,10])
     scorecard.getFrames()
     scorecard.getScoresPerFrame()
     expect(scorecard.getTotalScore()).toEqual(300)
   })

   it('returns the score', () => {
     scorecard = new Scorecard([10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
     scorecard.getFrames()
     scorecard.getScoresPerFrame()
     expect(scorecard.getTotalScore()).toEqual(81)
   })
})
