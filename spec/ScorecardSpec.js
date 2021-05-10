describe("Scorecard", () => {
  let scorecard;
  beforeEach(() => {
    scorecard = new Scorecard();
  })
  it("updates the first roll score", () => {
    scorecard.addScore(6);
    expect(scorecard.scoreData[(scorecard.currentFrameNumber - 1)].firstRollScore).toEqual(6);
  }); 
  it("updates the total score", () => {
    scorecard.addScore(5);
    expect(scorecard.scoreData[(scorecard.currentFrameNumber - 1)].totalScore).toEqual(5);
  }); 
  it('adds score for two rolls', () =>{
    scorecard.addScore(5)
    scorecard.addScore(4)
    expect(scorecard.scoreData[(scorecard.currentFrameNumber - 2)].firstRollScore).toEqual(5);
    expect(scorecard.scoreData[(scorecard.currentFrameNumber - 2)].secondRollScore).toEqual(4);
    expect(scorecard.scoreData[(scorecard.currentFrameNumber - 2)].totalFrameScore).toEqual(9);
  });
  it('adds score for multiple frames', () =>{
    scorecard.addScore(5)
    scorecard.addScore(4)
    scorecard.addScore(2)
    scorecard.addScore(1)
    expect(scorecard.scoreData[(scorecard.currentFrameNumber - 3)].totalFrameScore).toEqual(9);
    expect(scorecard.scoreData[(scorecard.currentFrameNumber - 2)].totalFrameScore).toEqual(3);
  });
  it('updates the total cumulative score', () =>{
    scorecard.addScore(5)
    scorecard.addScore(4)
    scorecard.addScore(2)
    scorecard.addScore(1)
    expect(scorecard.scoreData[(scorecard.currentFrameNumber - 2)].totalScore).toEqual(12);
  });
  describe('Strike', () => {
    it('if the player has a strike it will update the frame',() => {
      scorecard.addScore(10)
      expect(scorecard.scoreData[0].isStrike).toEqual(true);
      expect(scorecard.currentRoll).toEqual(1);
      expect(scorecard.currentFrameNumber).toEqual(2);
    });
    it('updates the total score of last frame if we strike',() => {
      scorecard.addScore(10)
      scorecard.addScore(5)
      scorecard.addScore(4)
      expect(scorecard.scoreData[0].firstRollScore).toEqual(10);
      expect(scorecard.scoreData[0].totalFrameScore).toEqual(19);
      expect(scorecard.scoreData[1].totalFrameScore).toEqual(9);
      expect(scorecard.scoreData[0].totalScore).toEqual(19);
      expect(scorecard.scoreData[1].totalScore).toEqual(28);
    });
  })
  describe('Spare', () => {
    it('updates the frame if spare occurs', () => {
      scorecard.addScore(6)
      scorecard.addScore(4)
      expect(scorecard.scoreData[0].isSpare).toEqual(true)
    })
    it('adds bonus in running total', () => {
      scorecard.addScore(6)
      scorecard.addScore(4)
      scorecard.addScore(5)
      scorecard.addScore(4)
      expect(scorecard.scoreData[0].totalFrameScore).toEqual(15)
      expect(scorecard.scoreData[1].totalFrameScore).toEqual(9)
      expect(scorecard.scoreData[0].totalScore).toEqual(15)
      expect(scorecard.scoreData[1].totalScore).toEqual(24)
    })
  })
  describe('10th frame', () => {
    it('gives an extra roll for spare', () => {
      for (let i = 0; i < 9; i++){
        scorecard.addScore(4)
        scorecard.addScore(4)
      }
      scorecard.addScore(5)
      scorecard.addScore(5)
      scorecard.addScore(5)
      expect(scorecard.scoreData[9].totalFrameScore).toEqual(15)
      expect(scorecard.scoreData[9].totalScore).toEqual(87)
    })
    it('game over is no spare or strike', () => {
      for (let i = 0; i < 9; i++){
        scorecard.addScore(4)
        scorecard.addScore(4)
      }
      scorecard.addScore(5)
      scorecard.addScore(4)
      scorecard.addScore(5)
      console.log(scorecard.scoreData)
      // expect(scorecard.currentFrameNumber).toEqual(10)
      expect(scorecard.scoreData[9].totalFrameScore).toEqual(9)
      expect(scorecard.scoreData[9].totalScore).toEqual(81)
      expect(scorecard.scoreData[9].secondRollScore).toEqual(4)
    })
    it('gives an extra roll for strike', () => {
      for (let i = 0; i < 9; i++){  
        scorecard.addScore(4)
        scorecard.addScore(4)
      }
      scorecard.addScore(10)
      scorecard.addScore(10)
      scorecard.addScore(5)
      expect(scorecard.scoreData[9].totalFrameScore).toEqual(25)
      expect(scorecard.scoreData[9].totalScore).toEqual(97)
      expect(scorecard.scoreData[9].secondRollScore).toEqual(10)
      expect(scorecard.scoreData[9].thirdRollScore).toEqual(5)
    })
  })
});