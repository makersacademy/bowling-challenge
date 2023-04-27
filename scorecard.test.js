const Scorecard = require('./scorecard')

describe ('scorecard class', () =>{
  
  // let scorecard;

  // beforeEach(() => {
  //   const frames = [[1,2]]
  //   scorecard = new Scorecard(frames)
  // })

  describe ('checkSpecials method', () =>{
    it ('returns strike if given frame is [10,0]', () =>{
      scorecard = new Scorecard([[10,0]])
      expect(scorecard.checkSpecials(0)).toEqual("strike")
    })
  })
  it ('initializes a scorecard', () =>{
    expect(scorecard.getCurrentScore()).toBe(10)
  })
})