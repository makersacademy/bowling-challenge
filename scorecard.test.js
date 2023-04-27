const Scorecard = require('./scorecard')

describe ('scorecard class', () =>{
  describe ('checkSpecials method', () =>{
    it ('returns strike if given frame is [10,0]', () =>{
      scorecard = new Scorecard([[10,0]])
      expect(scorecard.checkSpecials(0)).toEqual("strike")
    })

    it ('returns a spare if given frame is [5,5]', () =>{
      scorecard = new Scorecard([[5,5]])
      expect(scorecard.checkSpecials(0)).toEqual("spare")
    })

    it ('returns a spare if given frame is [0,10]', () =>{
      scorecard = new Scorecard([[0,10]])
      expect(scorecard.checkSpecials(0)).toEqual("spare")
    })

    it ('returns normal if frame is normal [2,3]', () =>{
      scorecard = new Scorecard([[2,3]])
      expect(scorecard.checkSpecials(0)).toBe("normal")
    })

    it ('returns gutter if frame is [0,0]', () =>{
      scorecard = new Scorecard([[0,0]])
      expect(scorecard.checkSpecials(0)).toBe("gutter")
    })
  })

  it ('flattens an array and returns the sum', () =>{
    scorecard = new Scorecard([])
    expect(scorecard.flattenArrayAndSumContents([4,5])).toEqual(9)
  })

  describe ('score counting methods', () =>{
    it ('update players current score each frame', () => {
      scorecard = new Scorecard([[2,3]])
      expect(scorecard.getCurrentScore()).toEqual(5)
    })
  })
  // it ('initializes a scorecard', () =>{
  //   expect(scorecard.getCurrentScore()).toBe(10)
  // })
})