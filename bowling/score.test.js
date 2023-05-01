const Scorecard = require('./score')

describe('Scorecard', () => {
  let scorecard

  beforeEach(() => {
    scorecard = new Scorecard()
  })

  describe('regular play', () => {
    it('calculates the correct score for regular player without any strike', () => {
      scorecard.addFrame(4, 0)
      scorecard.addFrame(3, 1)
      expect(scorecard.calculateScore()).toEqual(8)
    })

    it('calculates the correct score for  strike', () => {
      scorecard.addFrame(10)
      expect(scorecard.calculateScore()).toEqual(10)
    })

    it('calculates the correct score for  strike with bonus', () => {
      scorecard.addFrame(10)
      scorecard.addFrame(3,3)
      expect(scorecard.calculateScore()).toEqual(22)
    })

    it('calculates the correct score for  strike with bonus', () => {
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      expect(scorecard.calculateScore()).toEqual(30)
    })


    it('calculates the correct score with one strike in two rolls ', () => {
      scorecard.addFrame(6, 4)
      expect(scorecard.calculateScore()).toEqual(10)
    })

    it('calculates the correct score with one spare', () => {
      scorecard.addFrame(9, 1)
      scorecard.addFrame(3, 4)
      expect(scorecard.calculateScore()).toEqual(20)
    })

    it('calculates the correct score with two spares', () => {
      scorecard.addFrame(9, 1)
      scorecard.addFrame(5, 5)
      scorecard.addFrame(6, 3)
      expect(scorecard.calculateScore()).toEqual(40)
    })


    it('calculates the correct score in the 10th frame without spare or strike', () => {
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(3,3)
      scorecard.addFrame(3,3)
      expect(scorecard.calculateScore()).toEqual(168)
    })

    it('calculates the correct score in the 10th frame with spare', () => {
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(3,3)
      scorecard.addFrame(9,1)
      scorecard.addFrame(2) 
      expect(scorecard.calculateScore()).toEqual(174)
    })

    it('calculates the correct score in the 10th frame with strike', () => {
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(3,3)
      scorecard.addFrame(10)
      scorecard.addFrame(2,3) 
      expect(scorecard.calculateScore()).toEqual(177)
    })

    it('calculates the correct score in the 10th frame with 2 strikes', () => {
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(3,3)
      scorecard.addFrame(10)
      scorecard.addFrame(10) 
      expect(scorecard.calculateScore()).toEqual(182)
    })

    it('calculates the correct score for the Perfect Game', () => {
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10)
      scorecard.addFrame(10) 
      scorecard.addFrame(10) 
      
      expect(scorecard.calculateScore()).toEqual(300)
    })


  //   it('calculates the correct score in the 10th frame', () => {
  //     scorecard.addFrame(9, 1)
  //     scorecard.addFrame(9, 1)
  //     scorecard.addFrame(9, 1, 5)
  //     expect(scorecard.calculateScore()).toEqual(33)
  //   })
  // })

  // describe('when a gutter game is scored', () => {
  //   it('calculates the correct score', () => {
  //     for (let i = 0; i < 10; i++) {
  //       scorecard.addFrame(0, 0)
  //     }
  //     expect(scorecard.calculateScore()).toEqual(0)
  //   })
  // })

  // // describe('when a perfect game is scored', () => {
  // //   it('calculates the correct score', () => {
  // //     for (let i = 0; i < 12; i++) {
  // //       scorecard.addFrame(10, 0, 10)
  // //     }
  // //     expect(scorecard.calculateScore()).toEqual(300)
  // //   })
  // // })

  // describe('when an invalid frame is added', () => {
  //   it('throws an error when more than 10 frames are added', () => {
  //     for (let i = 0; i < 10; i++) {
  //       scorecard.addFrame(1, 1)
  //     }
  //     expect(() => scorecard.addFrame(1, 1)).toThrow('Game is over')
  //   })
   })
  })
