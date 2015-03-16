describe('Scorer', function() {
  var scorer;

  beforeEach(function(){
    scorer = new Scorer();
  });

  function multiRoll(numberOfRolls,rollScore){
    for (var i = 0; i < numberOfRolls; i++) {
      scorer.roll(rollScore)
    };
  };

  describe('logic for calculating the score', function() {

    it('gives a score of 0 if no pins are hit', function() {
     multiRoll(20,0);
      expect(scorer.total()).toEqual(0);
    });

    it('gives a score of 20 if 1 pin is hit each roll', function() {
      multiRoll(20,1);
      expect(scorer.total()).toEqual(20);
    });

    it('gives a score of 12 if the second roll is a spare', function() {
      scorer.roll(4);
      scorer.roll(6);
      scorer.roll(1);
      multiRoll(17,0);
      expect(scorer.total()).toEqual(12);
    });

    it('gives as score of 35 if 5 rolls of 5 are rolled', function() {
      multiRoll(5,5);
      multiRoll(15,0);
      expect(scorer.total()).toEqual(35);
    });

    it('gives a score of 10 with 1 strike', function() {
      scorer.roll(10);
      multiRoll(18,0);
      expect(scorer.total()).toEqual(10);
    });

    it('gives a score of 20 after a strike a 2 and a 3', function() {
      scorer.roll(10);
      scorer.roll(2);
      scorer.roll(3);
      multiRoll(16,0);
      expect(scorer.total()).toEqual(20);
    });

    it('gives a score of 65 following 3 strikes and 2 singles', function() {
      multiRoll(3,10);
      multiRoll(2,1);
      multiRoll(12,0);
      expect(scorer.total()).toEqual(65);
    });

    it('gives a score of a 300 following a perfect game', function() {
      multiRoll(12,10);
      expect(scorer.total()).toEqual(300);
    });

    it('returns a score of 172 following the described game', function() {
      multiRoll(2,5);
      scorer.roll(10);
      multiRoll(2,4);
      scorer.roll(3);
      scorer.roll(7);
      scorer.roll(10);
      scorer.roll(0);
      scorer.roll(5);
      multiRoll(2,10);
      scorer.roll(8);
      scorer.roll(2);
      scorer.roll(10);
      scorer.roll(7);
      scorer.roll(1);
      expect(scorer.total()).toEqual(172);
    });

  });

  describe('helper methods', function() {

    it('knows it is in the first frame after 1 rolls', function() {
      scorer.roll(8);
      expect(scorer.frameNumber()).toEqual(1);
    });

    it('knows it is in the first frame after 2 rolls', function() {
      multiRoll(2,2);
      expect(scorer.frameNumber()).toEqual(1)
    });

    it('knows it is in the second frame frame after 1 strike and a non strike', function() {
      scorer.roll(10);
      scorer.roll(8);
      expect(scorer.frameNumber()).toEqual(2)
    });

    it('knows that it is in the third frame after 3 strikes', function() {
      multiRoll(3,10);
      expect(scorer.frameNumber()).toEqual(3);
    });
    it('allows for a 3rd ball in the tenth frame', function() {
      multiRoll(12,10);
      expect(scorer.frameNumber()).toEqual(10);
    });

  });

});