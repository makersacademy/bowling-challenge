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
      it('saving roll scores through through the knockedDown function', function() {
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
          xit('moves to the next frame on strike', function() {

          })

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

        it('assigns roll 2 of a frame to "" on strike', function() {
          bowling.games[0].framez[0].rolls[0].knockedDown(10);
          bowling.games[0].framez[0].tallyRolls();
          bowling.games[0].frameController();
          expect(bowling.games[0].framez[0].rolls[1].rollScore).toEqual("");
        })

        it('changes currentFrame after 2 rolls', function() {
          bowling.games[0].framez[0].rolls[0].knockedDown(5);
          bowling.games[0].framez[0].tallyRolls();
          bowling.games[0].framez[0].rolls[1].knockedDown(5);
          bowling.games[0].framez[0].tallyRolls();
          bowling.games[0].frameController();
          expect(bowling.games[0].currentFrame).toEqual(bowling.games[0].framez[1]);
        })
      })
    })
  })
})