describe('Bowling', function() {

    beforeEach(function() {
      bowling = new Bowling();
    });

    it('a new game has a default score of 0.', function(){
      expect(bowling.score).toEqual(0);
    });

});
