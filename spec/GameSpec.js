describe('Game', function(){
  var game;

  it('A game starts in round 1', function(){
    game = new Game();
    expect(game.roundNumber()).toEqual(1);
  });

});
