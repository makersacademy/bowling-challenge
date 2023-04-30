const Scorecard = require('./scorecard')

describe('Scorecard class', () => {
  let scorecard;
  beforeEach(() => { scorecard = new Scorecard() })

  describe('.calculateScore method', () => {
    it('initially has zero points', () => {
      expect(scorecard.calculateScore()).toBe(0);
    })


  })
})


// let scorecard = new Scorecard()
// scorecard.calculateScore() // returns 0
// scorecard.addFrame(2, 5) 
// scorecard.addFrame(3, 5)
// scorecard.calculateScore() 