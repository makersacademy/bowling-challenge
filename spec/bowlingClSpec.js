describe('BowlingCl', function() {

    var bowlingCl

    beforeEach(function () {
      bowlingCl = new BowlingCl();
      roll1 = 3
      roll2 = 4
      roll3 = 6
      roll4 = 2

      frameTotal = 7
      runningTotalDouble = 15

      strike_double_roll1 = 10
      strike_double_roll2 = 0
      strike_bonus = 8

      spare_double_roll1 = 7
      spare_double_roll2 = 3

    });

    // it('knows what frame it is', function() {
    //   bowlingCl.inputFrame(frameExample)
    //   expect(bowlingCl._currentFrame).toEqual([frameExample]);
    // });

    it('knows the score from a frame', function() {
      bowlingCl.inputFrame(roll1, roll2)
      expect(bowlingCl.getFrameTotal()).toEqual(frameTotal);
    });


    it('knows the scores from the previous frame', function() {
      bowlingCl.inputFrame(roll1, roll2)
      bowlingCl.inputFrame(roll3, roll4)
      expect(bowlingCl._previousFrame).toEqual([3,4]);

    })

    it('can calculate current total score of the game', function() {
      bowlingCl.inputFrame(roll1, roll2)
      bowlingCl.inputFrame(roll3, roll4)
      expect(bowlingCl.getRunningTotal()).toEqual(runningTotalDouble);
    });

    it('knows when a strike has occured', function() {
        bowlingCl.inputFrame(strike_double_roll1, strike_double_roll2)
        expect(bowlingCl.isAStrike(bowlingCl._currentFrameScores)).toEqual(true);

    })

    it('adds on the correct bonus to the score when a strike occurs', function() {
      bowlingCl.inputFrame(strike_double_roll1, strike_double_roll2)
      bowlingCl.inputFrame(roll3, roll4);
      expect(bowlingCl.getRunningTotal()).toEqual(strike_double_roll1 + strike_bonus + roll3 + roll4);
    })

    it('knows when a spare has occured', function() {
        bowlingCl.inputFrame(spare_double_roll1, spare_double_roll2)
        expect(bowlingCl.isASpare(bowlingCl._currentFrameScores)).toEqual(true);

    })

    it('adds on the correct bonus to the score when a spare occurs', function() {
      bowlingCl.inputFrame(spare_double_roll1, spare_double_roll2)
      bowlingCl.inputFrame(roll3, roll4);
      expect(bowlingCl.getRunningTotal()).toEqual(spare_double_roll1 + spare_double_roll2 + roll3 + roll3 + roll4);
    })


});
