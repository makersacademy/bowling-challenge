describe('Bowling', function(){
  var bowling = new Bowling();

  describe('#score', function(){
    context('should return the total score for each frame', function(){
      it('e.g. return [0], for [0]', function(){
        expect(bowling.score([0])).toEqual([0])
      })
    })
  });
});
