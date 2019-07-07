'use strict';

// roll spare in 10th frame
// roll a strike 


describe('Scorecard', function () {

  var scorecard;

  beforeEach(function () {
    scorecard = new Scorecard();
  });

  describe('calculating scores', function() {
    it('can roll gutter game', function () {
      rollMany(0, 20);
      expect(scorecard.score()).toEqual(0);
    })

    it('can roll all ones', function () {
      rollMany(1, 20);
      expect(scorecard.score()).toEqual(20);
    })

    it('can roll a spare', function () {
      scorecard.roll(5);
      scorecard.roll(5);
      scorecard.roll(5);
      rollMany(0, 17);
      expect(scorecard.score()).toEqual(20);
    })

    it('can roll a strike', function () {
      scorecard.roll(10);
      scorecard.roll(5);
      scorecard.roll(2);
      rollMany(0, 16);
      expect(scorecard.score()).toEqual(24);
    })

    it('can roll perfect scorecard', function () {
      rollMany(10, 12);
      console.log(rollMany(10,12));
      expect(scorecard.score()).toEqual(300);
    })

    var rollMany = function (pins, rolls) {
      for (var i = 0; i < rolls; i++) {
        scorecard.roll(pins);
        console.log(scorecard.rolls);
      }
    }
  })

});



