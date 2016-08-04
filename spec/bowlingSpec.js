describe('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  })

  describe('intial state', function() {
    it('has an empty array of frames', function() {
      expect(bowling.frames).toBeDefined;
    })
  })

  describe('#roll', function(){
    it('allows the player to roll the ball and knock 5 pins', function(){
      spyOn(Math, 'random').and.returnValue(0.8);
      expect(bowling.roll()).toEqual(5);
    })
  })
});
