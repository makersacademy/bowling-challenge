describe('Score', () => {
  let score
  beforeEach(() => {
    score = new Score
  })

  describe('points', () => {
    it('starts off empty', () => {
      expect(score.points).toEqual([])
    })
  })

  describe('frame', () => {
    it('starts off as zero', () => {
      expect(score.frame).toEqual(0)
    })
  })

  describe('roll', () => {
    it('stores the points for each frame in the points array', () => {
      score.roll(4,6)
      score.roll(7,3)
      score.roll(1,8)
      expect(score.points[1]).toEqual([7,3])
    })

    it('updates the frame', () => {
      score.roll(2,8)
      expect(score.frame).toEqual(1)
    })
  })

  describe('gutterGame', () => {
    it('returns true when the player does not hit a single pin', () => {
      for(let i=1; i<11; i++){
        score.roll(0,0)
      }
      expect(score.gutterGame()).toEqual(true)
      
      for(let i=1; i<11; i++){
        score.roll(5,3)
      }
      expect(score.gutterGame()).toEqual(false)
    })
  })


  describe('strike', () => {
    it('returns true when a player knocks all ten pins in a frame with the first roll', () => {
      score.roll(10,0)
      expect(score.strike(1)).toEqual(true)
      score.roll(0,10)
      expect(score.strike(2)).toEqual(false)
      score.roll(4,6)
      expect(score.strike(3)).toEqual(false)
    })
  })

  describe('strikeBonus', () => {
    it('adds the points from the next two frames', () => {
      score.roll(10,0)
      score.roll(3,6)
      expect(score.strikeBonus(1)).toEqual(9)
    })
  })

  describe('spare', () => {
    it('returns true when a player knocks all ten pins in a frame with two rolls', () => {
      score.roll(4,6)
      expect(score.spare(1)).toEqual(true)
      score.roll(5,4)
      expect(score.spare(2)).toEqual(false)
    })
  })

  describe('spareBonus', () => {
    it('adds the points from the next two frames', () => {
      score.roll(7,3)
      score.roll(2,5)
      score.roll(6,2)
      score.roll(5,5)
      score.roll(7,1)
      score.roll(5,3)
      expect(score.spareBonus(1)).toEqual(2)
      expect(score.spareBonus(4)).toEqual(7)
    })
  })

  describe('finalFrameBonus', () => {
    it('adds bonus for strike or spare in final frame', () => {
      for(let i=0; i<10; i++){
        score.roll(10,0)
      }
      expect(score.finalFrameBonus(5)).toEqual(5)
      
      for(let i=0; i<10; i++){
        score.roll(3,6)
      }
      expect(score.finalFrameBonus(4)).toEqual(0)
    })
  })

  describe('frameScore', () => {
    // it('calculates the score for each frame', () => {
    //   score.roll(4,4)
    //   expect(score.frameScore()).toEqual(8)
      
    //   for(let i=0; i<9; i++){
    //     score.roll(2,6)
    //   }
    //   score.roll(8,1)
    //   expect(score.frameScore()).toEqual(9)
    //   expect(score.frameScore(5)).toEqual(8)
    // })

    // it('adds the strike bonus points from the next frame', () => {
    //   for(let i=0; i<6; i++){
    //     score.roll(2,6)
    //   }
    //   score.roll(10,0)
    //   score.roll(4,5)
    //   expect(score.frameScore(7)).toEqual(19)
    // })

    // it('adds the spare bonus points from the next frame', () => {
    //   for(let i=0; i<6; i++){
    //     score.roll(2,6)
    //   }
    //   score.roll(5,5)
    //   score.roll(7,2)
    //   expect(score.frameScore(7)).toEqual(17)
    // })

    it('adds the bonus from the final frame', () => {
      for(let i=0; i<9; i++){
        score.roll(2,6)
      }
      
      score.roll(10,10)
      score.finalFrameBonus(7)
      console.log(score.finalFrameBonus())
      expect(score.frameScore()).toEqual(27)
    })
  })
})