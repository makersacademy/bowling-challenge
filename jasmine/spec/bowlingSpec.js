describe ('Bowling', function(){

  beforeEach(function(){
    game = new Game();
  });

  describe('roll', function(){
    it('bowls the ball and returns number of knocked down pins', function(){
      game.roll();
      spyOn(game, 'roll').and.returnValue(5);
      expect(game.roll()).toEqual(5);
    });
  });
});

  describe('', function(){
    it('')
  });
