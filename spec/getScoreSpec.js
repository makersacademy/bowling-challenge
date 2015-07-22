describe('getScore', function() {
  
  describe('can sume the score', function() {
    it('checks the score of two rolls', function() {

      expect(getScore.run([5,3])()).toEqual(8)
    });

    it('checks the score of strike with another frame', function() {
       expect(getScore.run([10,5,3])()).toEqual(26)
    });

    it('checks the score of strike, spare and other frames', function() {
      expect(getScore.run([10,5,3,5,5,2,3])()).toEqual(43)
    });

    it('checks the score of strike, spare and other frames', function() {
      expect(getScore.run([10,10,10,10,10,10,10,10,10,10,10])()).toEqual(300)
    });

  });
});
