describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  })

  describe('Bowling setup', function() {

    it('starts with 1 game', function() {
      expect(bowling.games.length).toEqual(1);
    })

    it('1 game has 10 frames', function() {
      expect(bowling.games[0].framez.length).toEqual(10);
    })

    it('1 frame has 2 rolls', function() {
      expect(bowling.games[0].framez[0].rolls.length).toEqual(2);
    })
  })

  describe('Scoring', function() {

    describe('Rolls', function() {
      it('saves roll scores through through the knockedDown function', function() {
        bowling.games[0].framez[0].rolls[0].knockedDown(5)
        expect(bowling.games[0].framez[0].rolls[0].rollScore).toEqual(5);
      })
    })

    describe('Framez', function() {
      it('adds rollScores to its totalRollScore', function() {
        bowling.games[0].framez[0].rolls[0].knockedDown(5);
        bowling.games[0].framez[0].tallyRolls();
        bowling.games[0].framez[0].rolls[1].knockedDown(4);
        bowling.games[0].framez[0].tallyRolls();
        expect(bowling.games[0].framez[0].totalRollScore).toEqual(9);
      })

      it('adds totalRollScore and bonus to get frameScore', function() {
        bowling.games[0].framez[0].rolls[0].knockedDown(10);
        bowling.games[0].framez[0].tallyRolls();
        bowling.games[0].framez[0].isStrike();
        bowling.games[0].framez[1].rolls[0].knockedDown(5);
        bowling.games[0].framez[1].tallyRolls();
        bowling.games[0].framez[1].rolls[1].knockedDown(4);
        bowling.games[0].framez[1].tallyRolls();
        bowling.games[0].framez[0].addBonus(9);
        bowling.games[0].framez[0].tallyAll();
        expect(bowling.games[0].framez[0].frameScore).toEqual(19);
      })

      it('various tests', function() {
        bowling.games[0].framez[0].rolls[0].knockedDown(5);
        bowling.games[0].framez[0].tallyRolls();
        bowling.games[0].framez[0].rollController();
        bowling.games[0].frameController();
        bowling.games[0].bonusController();
        expect(bowling.games[0].frameNumber).toEqual(0)
        expect(bowling.games[0].currentFrame.rollNumber).toEqual(1)
        expect(bowling.games[0].currentFrame.bonus).toEqual(null)
        bowling.games[0].framez[0].rolls[1].knockedDown(4);
        bowling.games[0].framez[0].tallyRolls();
        bowling.games[0].framez[0].rollController();
        expect(bowling.games[0].currentFrame.rollNumber).toEqual(1)
        bowling.games[0].frameController();
        expect(bowling.games[0].frameNumber).toEqual(1)
        bowling.games[0].bonusController();
        expect(bowling.games[0].previousFrame.bonus).toEqual(0)
      })

      describe('rollController', function() {
        it('has a currentRoll rolls[0]', function() {
          expect(bowling.games[0].framez[0].currentRoll).toEqual(bowling.games[0].framez[0].rolls[0])
        })

        it('moves to 2nd roll after first roll regular', function() {
          bowling.games[0].framez[0].rolls[0].knockedDown(0);
          bowling.games[0].framez[0].tallyRolls();
          bowling.games[0].framez[0].rollController();
          expect(bowling.games[0].framez[0].currentRoll).toEqual(bowling.games[0].framez[0].rolls[1])
        })

        it('assigns "" to 2nd roll if first roll is a strike', function() {
          bowling.games[0].framez[0].rolls[0].knockedDown(10);
          bowling.games[0].framez[0].tallyRolls();
          bowling.games[0].framez[0].rollController();
          expect(bowling.games[0].framez[0].rolls[1].rollScore).toEqual("")
        })
      })

      describe('bonuses', function() {
        it('can detect a bonus', function() {
          bowling.games[0].framez[0].rolls[0].knockedDown(10);
          bowling.games[0].framez[0].tallyRolls();
          expect(bowling.games[0].framez[0].isBonus()).toEqual(true);
        })

        it('knows a strike', function() {
          bowling.games[0].framez[0].rolls[0].knockedDown(10);
          bowling.games[0].framez[0].tallyRolls();
          expect(bowling.games[0].framez[0].isStrike()).toEqual(true);
        })

        it('knows a spare is NOT a strike', function() {
          bowling.games[0].framez[0].rolls[0].knockedDown(0);
          bowling.games[0].framez[0].tallyRolls();
          bowling.games[0].framez[0].rolls[1].knockedDown(10);
          bowling.games[0].framez[0].tallyRolls();
          expect(bowling.games[0].framez[0].isStrike()).toEqual(false);
        })

        it('knows a spare', function() {
          bowling.games[0].framez[0].rolls[0].knockedDown(0);
          bowling.games[0].framez[0].tallyRolls();
          bowling.games[0].framez[0].rolls[1].knockedDown(10);
          bowling.games[0].framez[0].tallyRolls();
          expect(bowling.games[0].framez[0].isSpare()).toEqual(true);
        })

        describe('Strikes', function() {
          it('adds the scores from the next 2 rolls', function() {
            bowling.games[0].framez[0].rolls[0].knockedDown(10);
            bowling.games[0].framez[0].tallyRolls();
            bowling.games[0].framez[0].isStrike();
            bowling.games[0].framez[1].rolls[0].knockedDown(5);
            bowling.games[0].framez[1].tallyRolls();
            bowling.games[0].framez[1].rolls[1].knockedDown(4);
            bowling.games[0].framez[1].tallyRolls();
            bowling.games[0].framez[0].addBonus(9);
            expect(bowling.games[0].framez[0].bonus).toEqual(9);
          })
        })

        describe('Spares', function() {
          it('adds the score from the next roll', function() {
            bowling.games[0].framez[0].rolls[0].knockedDown(0);
            bowling.games[0].framez[0].tallyRolls();
            bowling.games[0].framez[0].rolls[0].knockedDown(10);
            bowling.games[0].framez[0].tallyRolls();
            bowling.games[0].framez[0].isSpare();
            bowling.games[0].framez[1].rolls[0].knockedDown(5);
            bowling.games[0].framez[1].tallyRolls();
            bowling.games[0].framez[1].rolls[1].knockedDown(4);
            bowling.games[0].framez[1].tallyRolls();
            bowling.games[0].framez[0].addBonus(5);
            expect(bowling.games[0].framez[0].bonus).toEqual(5);
          })
        })
      })
    })

    describe('Games', function() {
      describe('frameController', function() {
        it('has currentFrame framez[0]', function() {
          expect(bowling.games[0].currentFrame).toEqual(bowling.games[0].framez[0]);
        })

        it('changes currentFrame on strike', function() {
          bowling.games[0].framez[0].rolls[0].knockedDown(10);
          bowling.games[0].framez[0].tallyRolls();
          bowling.games[0].frameController();
          expect(bowling.games[0].currentFrame).toEqual(bowling.games[0].framez[1]);
        })

        it('changes currentFrame after 2 rolls', function() {
          bowling.games[0].framez[0].rolls[0].knockedDown(5);
          bowling.games[0].framez[0].tallyRolls();
          bowling.games[0].framez[0].rollController();
          bowling.games[0].bonusController();
          bowling.games[0].framez[0].rolls[1].knockedDown(5);
          bowling.games[0].framez[0].tallyRolls();
          bowling.games[0].frameController();
          expect(bowling.games[0].currentFrame).toEqual(bowling.games[0].framez[1]);
        })
      })
      describe('bonusController', function() {
        describe('strikes', function() {
          it('adds bonuses from next 2 rolls regular', function() {
            bowling.games[0].framez[0].rolls[0].knockedDown(10);
            bowling.games[0].framez[0].tallyRolls();
            bowling.games[0].frameController();
            bowling.games[0].framez[1].rolls[0].knockedDown(5);
            bowling.games[0].framez[1].tallyRolls();
            bowling.games[0].framez[1].rolls[1].knockedDown(4);
            bowling.games[0].framez[1].tallyRolls();
            bowling.games[0].bonusController();
            expect(bowling.games[0].framez[0].bonus).toEqual(9);
          })

          it('adds bonuses from next 2 rolls strike', function() {
            bowling.games[0].framez[0].rolls[0].knockedDown(10);
            bowling.games[0].framez[0].tallyRolls();
            bowling.games[0].frameController();
            bowling.games[0].framez[1].rolls[0].knockedDown(10);
            bowling.games[0].framez[1].tallyRolls();
            bowling.games[0].bonusController();
            bowling.games[0].frameController();
            bowling.games[0].framez[2].rolls[0].knockedDown(10);
            bowling.games[0].framez[2].tallyRolls();
            bowling.games[0].bonusController();
            expect(bowling.games[0].framez[0].bonus).toEqual(20);
          })

          it('adds bonuses from next 2 rolls spare', function() {
            bowling.games[0].framez[0].rolls[0].knockedDown(10);
            bowling.games[0].framez[0].tallyRolls();
            bowling.games[0].frameController();
            bowling.games[0].framez[1].rolls[0].knockedDown(0);
            bowling.games[0].framez[1].tallyRolls();
            bowling.games[0].framez[1].rolls[0].knockedDown(10);
            bowling.games[0].framez[1].tallyRolls();
            bowling.games[0].bonusController();
            expect(bowling.games[0].framez[0].bonus).toEqual(10)
          })
        })

        describe('spares', function() {
          it('adds bonuses from the next 1 roll', function() {
            bowling.games[0].framez[0].rolls[0].knockedDown(0);
            bowling.games[0].framez[0].tallyRolls();
            bowling.games[0].framez[0].rolls[1].knockedDown(10);
            bowling.games[0].framez[0].tallyRolls();
            bowling.games[0].frameController();
            bowling.games[0].framez[1].rolls[0].knockedDown(5);
            bowling.games[0].framez[1].tallyRolls();
            bowling.games[0].framez[1].rolls[1].knockedDown(4);
            bowling.games[0].framez[1].tallyRolls();
            bowling.games[0].bonusController();
            expect(bowling.games[0].framez[0].bonus).toEqual(5);
          })

          it('adds bonuses from next 1 roll strike', function() {
            bowling.games[0].framez[0].rolls[0].knockedDown(0);
            bowling.games[0].framez[0].tallyRolls();
            bowling.games[0].framez[0].rolls[1].knockedDown(10);
            bowling.games[0].framez[0].tallyRolls();
            bowling.games[0].frameController();
            bowling.games[0].framez[1].rolls[0].knockedDown(10);
            bowling.games[0].framez[1].tallyRolls();
            bowling.games[0].bonusController();
            expect(bowling.games[0].framez[0].bonus).toEqual(10);
          })

          it('adds bonuses from next 1 rolls spare', function() {
            bowling.games[0].framez[0].rolls[0].knockedDown(0);
            bowling.games[0].framez[0].tallyRolls();
            bowling.games[0].framez[0].rolls[1].knockedDown(10);
            bowling.games[0].framez[0].tallyRolls();
            bowling.games[0].frameController();
            bowling.games[0].framez[1].rolls[0].knockedDown(0);
            bowling.games[0].framez[1].tallyRolls();
            bowling.games[0].bonusController();
            expect(bowling.games[0].framez[0].bonus).toEqual(0);
          })
        })
      })
    })
  })
})