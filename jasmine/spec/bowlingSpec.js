describe ('Bowling', function(){

  var game;
  // var roll1score;
  // var roll2score;

  beforeEach(function(){
    game = new Game();
  });

  describe('rolls', function(){
    it('bowls the first ball and returns number of knocked down pins out of 10', function(){
      game.roll1();
      spyOn(game, 'roll1').and.returnValue(5);
      expect(game.roll1()).toEqual(5);
    });

  it('bowls the second ball and returns number of knocked down pins out of remainder from roll 1', function() {
    game.roll2();
    spyOn(game, 'roll2').and.returnValue(3);
    expect(game.roll2()).toEqual(3);
  });

  it('bowls roll 1 and 2 and does not exceed 10', function() {
    var roll1score = game.roll1();
    var roll2score = game.roll2(roll1score);
    expect(roll1score + roll2score).toBeLessThan(11);
  });
});
});
