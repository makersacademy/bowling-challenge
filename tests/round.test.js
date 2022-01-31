const Round = require('../main/round')

describe('Round', () => {
  it('has empty frames array', () => {
    const round = new Round();
    expect(round.frames).toEqual([])
  })

  describe('getTotalScore', () => {
    it('returns total score', () => {
      let frames = [{score: 24}, {score: 30}, {score: 7}]
      const round = new Round(frames);
      expect(round.getTotalScore()).toEqual(61)
    })
  })

  describe('addRoll', () => {
    describe('#fillOrCreateFrame', () => {
      it('creates a new frame', () => {
        let incompleteFrame = { addRoll: () => incompleteFrame}
        const round = new Round();
        round.addRoll(5, incompleteFrame)
        expect(round.frames.length).toEqual(1)
        // expect(round.frames[round.frames.length - 1]).toEqual(incompleteFrame)
      })

      // This needs mocking...
      // describe('if last frame incomplete', () => {
      //   it('fills the last frame', () => {
      //     let incompleteFrame = { 
      //       isComplete: () => false,
      //       roll1: 3
      //     }
      //     const round = new Round([incompleteFrame])
      //     round.addRoll(6)
      //     expect(incompleteFrame.addRoll).toHaveBeenCalledWith(6)
      //   })
      // })

      // test - when adding a frame
        // case1: if last frame is incomplete
          // arrange
            // make a round
            // round has an incomplete frame
          // act 
            // addroll to round
          // assert
            // expect addRoll to have been called on the incomplete frame

        // case2: if last frame was complete
          // arrange
            // make a round
            // round has a complete frame
          // act
            // addroll to round
          // assert
            // expect a new frame to have been created
            // check the length of the frames array
            // check if frames includes added frame

        // case3: if there is no frames
          // arrange
            // make a round
          // act
            // addroll to round
          // assert
            // expect a new frame to have been created
            // check the length of the frames array
            // check if frames includes added frame

      // TEST - ASSIGNING NEW POINTS

        // case1 - strike1 --> strike2 --> roll --> roll
          // arrange
            // make a round 
            // add 2 strikes
          // act
            // addRoll(points)
            // addRoll(points_2)
          // assert
            // expect strike1 to have been called with addBonus(points)
            // expect strike2 to have been called with addBonus(points)
            // expect strike1 NOT to have been called with addBonus(points_2)
            // expect strike2 to have been called with addBonus(points_2)
        
        // case1 -  open_frame --> roll
          // arrange
            // make a round 
            // add 2 strikes
          // act
            // addRoll(points)
          // assert
            // expect strike1 to have been called with addBonus(points)
            // expect strike2 to have been called with addBonus(points)

      // TEST - Round FINISHED?

        // case1 - 10 open frames
          // arrange
            // make a round
            // add 10 open frames
          // act
            // addRoll(5)
          // assert
            // expect an 'round finished' error

        // case2 - last frame strike 
          // arrange
            // make round
            // add 10 strikes
          // act
            // addRoll(10)
            // addRoll(10)
            // addRoll(10)
          // assert
            // expect the third addRoll to raise 'round finished' error

        // case 3 - last frame spare
          // arrange
            // make round
            // add 10 spares
          // act
            // addRoll(10)
            // addRoll(10)
          // assert
            // expect the second addRoll to raise 'round finished' error

    })
  })
})