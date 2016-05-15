describe('BowlingGame', function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('starts with a score of 0', function() {
    expect(game.getScore()).toEqual(0);
  });

  it('the score can be called', function() {
    expect(game.getScore()).toEqual(0);
  });

  it('the score is calculated', function(){
    game.bowl(2);
    game.bowl(2);
    expect(game.getScore()).toEqual(4);
  });

});
