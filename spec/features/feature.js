describe('Bowling Challenge', function(){
  var game = new Game();

  it('calculates the total score for a no bonus frame', function () {
      game.play(1);
      game.play(4);
      game.play(4);
      game.play(5);
      game.play(6);
      game.play(4);
      expect(game.getTotalScore()).toEqual(24);
  });

});
