describe('Play', function() {

  var play

  beforeEach(function() {
  play = new Play();
  });

  var multipleRolls = function(pinsKnocked, rolls) {
    for (var i = 0; i < rolls; i++) {
      play.roll(pinsKnocked)
      }
  }

  describe('Play the game', function() {

    it('can roll a zero point game', function() {
      multipleRolls(0, 20)
      expect(play.score()).toEqual(0)
    })

    it('can roll 1 pin 20 times', function() {
      multipleRolls(1, 20)
      expect(play.score()).toEqual(20)
    })

    it('can roll a spare', function() {
      play.roll(4);
      play.roll(6); // Spare
      play.roll(3);
      play.roll(1);
      multipleRolls(0, 16)
      expect(play.score()).toEqual(17)
    })

    it('can roll a strike', function() {
      play.roll(10); // strike
      // miss second go in frame 1
      play.roll(4);
      play.roll(1);
      multipleRolls(0, 16)
      expect(play.score()).toEqual(20)
    })

    it('can roll 300 - a perfect game', function() {
      multipleRolls(10, 20)
      expect(play.score()).toEqual(300)
    })
  })
})
