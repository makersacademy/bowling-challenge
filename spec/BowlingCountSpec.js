describe('BowlingCounter', function () {

  beforeEach(function() {
    bowlingCounter = new BowlingCounter(); 
  });

  describe('The counting of one ball', function () {
    it('gets the correct result', function () {
      bowlingCounter.getPinsPerBalls(5)

      expect(bowlingCounter.score()).toEqual(5)
      expect(bowlingCounter.frameSum).toEqual(5)  
    });
  });

  describe('The counting of two balls', function () {
    xit('gets the correct result', function () {

      bowlingCounter.getPinsPerBalls(5,2)

      expect(bowlingCounter.score()).toEqual(7)  
      // expect(bowlingCounter.frameSum).toEqual(7)  
    });
  });

 xdescribe('The counting of three balls', function () {
    it('gets the correct result with an strike', function () {
      
      bowlingCounter.getPinsPerBalls(10,5,2)

      expect(bowlingCounter.score()).toEqual(24)  
    });

    it('gets the correct result with a spare' ,function() {
      
      bowlingCounter.getPinsPerBalls(3,7,2)

      expect(bowlingCounter.score()).toEqual(14)  
    });
  });

  describe('the counting of a normal game', function () {
    it('gets the correct result', function () {
      bowlingCounter.getPinsPerBalls(10,5,2,10,5,2,8,2,8,0,2,3,5,5,2,4,10)

      expect(bowlingCounter.score()).toEqual(107) 
      // expect(bowlingCounter.ballCounter).toEqual(20) 
    });

    it('gets the correct result with 21 balls', function () {
      bowlingCounter.getPinsPerBalls(10,5,2,10,5,2,8,2,8,0,2,3,5,5,2,4,10,3)

      expect(bowlingCounter.score()).toEqual(113) 
      // expect(bowlingCounter.ballCounter).toEqual(21) 
    });

    xit('gets the correct result', function () {
      bowlingCounter.getPinsPerBalls(10,5,2,10,5,2,8,2,8,0,2,3,5,5,2,4,10)

      expect(bowlingCounter.score()).toEqual(107) 
      // expect(bowlingCounter.ballCounter).toEqual(20) 
    });
  });

});