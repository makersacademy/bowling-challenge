xdescribe('gameCounter', function() {
  
  describe('can sume the score', function() {
    it('checks the score of two rolls', function() {
      gameCounter.introducePinsPerBalls([2,3])

      expect(gameCounter.score()).toEqual(5)
    });

    it('checks the score of four rolls', function() {
      gameCounter.introducePinsPerBalls([1,2,3,4])

      expect(gameCounter.score()).toEqual(10)
    });

    xit('checks the score of three rolls with strike', function() {
      gameCounter.introducePinsPerBalls(10,2,3)
      expect(gameCounter.score()).toEqual(20)
    });
  });
});