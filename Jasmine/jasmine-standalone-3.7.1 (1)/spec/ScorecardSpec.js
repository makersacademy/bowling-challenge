'use strict';

describe('Scorecard', function(){
  let newScorecard
  let roll1 = 4;
  let roll2 = 2;
  let rollStrike = 10;
  let rollSpare1 = 7;
  let rollSpare2 = 3;
  let noStrikeSpare = false;
  let strike = true;
  let spare = true;

  beforeEach(function() {
    newScorecard = new Scorecard();
  });

  it('initializes a scorecard for a new BowlingGame', function() {
    expect(newScorecard.roll1Score).toEqual(0)
    expect(newScorecard.roll2Score).toEqual(0)
    expect(newScorecard.roll3Score).toEqual(null)
    expect(newScorecard.bonusScore).toEqual(0)
    expect(newScorecard.totalGameScore).toEqual(0)
    expect(newScorecard.scorecard).toEqual([])
  })

  describe('no strike or spare', function() {
    describe('updateScorecard', function() {
      it('updates the scorecard after two rolls', function() {
        newScorecard.roll1Score = roll1
        newScorecard.roll2Score = roll2
        newScorecard.updateScorecard(1, noStrikeSpare, noStrikeSpare)
        expect(newScorecard.scorecard[0]).toEqual({ "frame1": { roll1: 4, roll2: 2, roll3: null, bonus: 0, total: 6 }});
      });
    });
  });

  describe('when there is a strike', function() {
    describe('.updateScorecard', function() {
      it('updates the bonus variable with the 2 roll values of next frame', function() {
        newScorecard.roll1Score = rollStrike
        newScorecard.updateScorecard(1, noStrikeSpare, noStrikeSpare)
        newScorecard.roll1Score = roll1
        newScorecard.updateBonus(newScorecard.roll1Score)
        newScorecard.roll2Score = roll2
        newScorecard.updateBonus(newScorecard.roll2Score)
        expect(newScorecard.bonusScore).toEqual(6)
        newScorecard.updateScorecard(2, strike, noStrikeSpare)
        expect(newScorecard.scorecard).toEqual([{ "frame1": { roll1: 10, roll2: 0, roll3: null, bonus: 6, total: 16 } },  { "frame2": { roll1: 4, roll2: 2, roll3: null, bonus: 0, total:  22 } } ])
      });
    });
  });

  describe('when there is a spare', function() {
    it('updates the bonus variable with the next 1 roll value of next frame', function() {
      newScorecard.roll1Score = rollSpare1
      newScorecard.roll2Score = rollSpare2
      newScorecard.updateScorecard(1, noStrikeSpare, noStrikeSpare)
      newScorecard.roll1Score = roll1
      newScorecard.updateBonus(newScorecard.roll1Score)
      newScorecard.roll2Score = roll2
      expect(newScorecard.bonusScore).toEqual4
      newScorecard.updateScorecard(2, noStrikeSpare, spare)
      expect(newScorecard.scorecard).toEqual([{ "frame1": { roll1: 7, roll2: 3, roll3: null, bonus: 4, total: 14 } },  { "frame2": { roll1: 4, roll2: 2, roll3: null, bonus: 0, total: 20 } }])
    });
  });

  describe('saving values to a scorecard', function() {
    describe('.updateScorecard', function() {
      it('saves roll1 and roll2 values to a scorecard', function() {
      newScorecard.roll1Score = rollSpare1
      newScorecard.roll2Score = rollSpare2
      newScorecard.updateScorecard(1, noStrikeSpare, noStrikeSpare)
      expect(newScorecard.scorecard).toEqual([{ "frame1": { roll1:  7, roll2: 3, roll3: null, bonus: 0, total: 10 } }])
      });
    });
  });

  describe('10th frame', function() {
    it('records the third roll of frame 10', function() {
      let currentFrame = 1
      for(let i=0; i<9; i++){
        newScorecard.roll1Score = roll1
        newScorecard.roll2Score = roll2
        newScorecard.updateScorecard(currentFrame, noStrikeSpare, noStrikeSpare)
        currentFrame += 1
      }
      newScorecard.roll1Score = rollStrike
      newScorecard.roll2Score = roll1
      newScorecard.roll3Score = roll2
      newScorecard.updateScorecard(10, strike, noStrikeSpare)
      expect(newScorecard.scorecard).toEqual([{ "frame1": { roll1: 4, roll2: 2,roll3: null, bonus: 0, total: 6 } }, { "frame2": { roll1: 4, roll2: 2, roll3: null, bonus: 0, total: 12 } }, { "frame3": { roll1: 4, roll2: 2, roll3: null, bonus: 0, total: 18 } }, { "frame4": { roll1: 4, roll2: 2, roll3: null, bonus: 0, total: 24 } }, { "frame5": { roll1: 4, roll2: 2, roll3: null, bonus: 0, total: 30 } }, { "frame6": { roll1: 4, roll2: 2, roll3: null, bonus: 0, total: 36 } }, { "frame7": { roll1: 4, roll2: 2, roll3: null, bonus: 0, total: 42 } }, { "frame8": { roll1: 4, roll2: 2, roll3: null, bonus: 0, total: 48 } }, { "frame9": { roll1: 4, roll2: 2, roll3: null, bonus: 14, total: 54 } }, { "frame10": { roll1: 10, roll2: 4, roll3: 2, bonus: 0, total: 70 } }])
    });
  });


  describe('game has a total score', function() {
    beforeEach(function() {
      newScorecard.roll1Score = roll1;
      newScorecard.roll2Score = roll2;
      newScorecard.updateScorecard(1, noStrikeSpare, noStrikeSpare);
      newScorecard.roll1Score = roll1;
      newScorecard.roll2Score = roll2;
      newScorecard.updateScorecard(2, noStrikeSpare, noStrikeSpare);
    });

    describe('.running_total', function() {
      it('has running total of the game', function() {
        expect(newScorecard.totalGameScore).toEqual(12)
      });
    });
  });
});
