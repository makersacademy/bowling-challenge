import Bowling from "../bowling";

describe('Bowling', () => {
  describe('.addScore', () => {
    it('should add a number array to the score array', () => {
      let bowling = new Bowling();
      bowling.addScore([4, 5])
      expect(bowling.scorecard.length).toEqual(1)
    })

    it('should add multiple number arrays to the score array', () => {
      let bowling = new Bowling();
      bowling.addScore([3, 6])
      bowling.addScore([6, 2])
      bowling.addScore([9, 0])
      expect(bowling.scorecard.length).toEqual(3)
      expect(bowling.scorecard[1]).toEqual([6, 2]);
    })
  })

  it('should not allow arrays with a sum greater than 10 to be added', () => {
    let bowling = new Bowling();
    bowling.addScore([6, 6]) // 12 > 10
    expect(bowling.scorecard.length).toEqual(0)
    bowling.addScore([100, 0])
    expect(bowling.scorecard.length).toEqual(0)
  })

  it('should not add any more arrays when the scorecard is 10 long already', () => {
    let bowling = new Bowling();
    for(let i = 0; i < 12; i++) {
      bowling.addScore(4, 5)
    }

    expect(bowling.scorecard.length).toEqual(10);
  })
})