describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });


  describe('in the first frame...', function() {

      it('in the first frame can score a 5 and a 2', function() {
        bowling.firstBowl(5);
        bowling.secondBowl(2);
        expect(bowling.totalScore).toEqual([7]);
      });

      it('in the first frame can score a 8 and a 1', function() {
        bowling.firstBowl(8);
        bowling.secondBowl(1);
        expect(bowling.totalScore).toEqual([9]);
      });

      it('in the first frame can score a spare', function() {
        bowling.firstBowl(9);
        bowling.secondBowl(1);
        expect(bowling.totalScore).toEqual([10]);
      });

      it('in the first frame can score a strike', function() {
        bowling.firstBowl(10);
        expect(bowling.totalScore).toEqual([10]);
      });

  }); //in the first frame


  describe('in the second frame...', function() {

    it('scores anything other than a spare or strike', function() {
      bowling.firstBowl(2);
      bowling.secondBowl(3);
      bowling.firstBowl(4);
      bowling.secondBowl(5);
      expect(bowling.totalScore).toEqual([5,9]);
    });

    it('scores a spare', function() {
      bowling.firstBowl(5);
      bowling.secondBowl(5);
      bowling.firstBowl(4);
      bowling.secondBowl(3);
      expect(bowling.totalScore).toEqual([14,7]);
    });





  }); //in the second frame










});
