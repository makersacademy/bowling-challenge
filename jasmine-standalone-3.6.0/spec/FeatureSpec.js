describe('Feature Spec',() => {
   let scorecard

   it('returns the score', () => {
     scorecard = new Scorecard([1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6])
     expect(scorecard.create()).toEqual(133)
   })
})
