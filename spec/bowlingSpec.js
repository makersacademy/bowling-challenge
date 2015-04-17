describe('Bowling', function() {

  var bowling;
});

  describe('Game start', function() {
    it('starts with 10 frames', function(){
      bowling = new Bowling();
      expect(bowling.frame).toEqual(10);
    });
  });
