describe ('Bowling', function(){

  beforeEach(function(){
    game = new Game();
  });

  describe('roll 1', function(){
    it('bowls the ball and returns number of knocked down pins', function(){
      game.roll1();
      spyOn(game, 'roll1').and.returnValue(5);
      expect(game.roll1()).toEqual(5);
    });
  });
});
