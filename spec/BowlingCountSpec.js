describe('BowlingCounter', function () {

  beforeEach(function() {
    bowlingCounter = new BowlingCounter(); 
  });

  describe('The counting of one game move', function () {
    it('throws 5 pins', function () {
      bowlingCounter.ball(5)

      expect(bowlingCounter.getScore()).toEqual(5)
    });

    it('throws strike' ,function() {
      bowlingCounter.ball(10)

      expect(bowlingCounter.getScore()).toEqual(10)
    });
  });

  describe('The counting of a two move game', function () {
    describe('the first move', function () {
      it('', function () {
        
      });

      it('throws spare' ,function() {
        
      });

    });
    describe('The second move', function () {
      it('', function () {
        
      });

      it('throws spare' ,function() {
        
      });
    });
  });

});