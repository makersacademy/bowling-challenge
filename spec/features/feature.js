describe('Bowling Challenge', function(){
  var game;

  beforeEach(function(){
     game = new Game();
     console.log(game)
  });

  it('calculates the total score for a game with spares and spikes', function () {
      game.play(1); // f 1 r 1
      game.play(4); // f 1 r 2
      game.play(4); // f 2 r 1
      game.play(5); // f 2 r 2
      expect(game.getTotalScore()).toEqual(14);
      game.play(6); // f 3 r 1
      game.play(4); // f 3 r 2
      game.play(5); // f 4 r 1
      game.play(5); // f 4 r 2
      game.play(10); // f 5 r 1 (strike)
      game.play(0); // f 6 r 1
      game.play(1); // f 6 r 2
      expect(game.getTotalScore()).toEqual(61);
      game.play(7); // f 7 r 1
      game.play(3); // f 7 r 2
      game.play(6); // f 8 r 1
      game.play(4); // f 8 r 2
      game.play(10); // f 9 r 1 (strike)
      game.play(0); // f 10 r 1
      game.play(10); // f 10 r 2
      game.play(6); // f 10 r 3
      expect(game.getTotalScore()).toEqual(133);
      expect(function(){game.play(5)}).toThrow();
  });

  // it('calculates score for a perfect game', function(){
  //   console.log(game);
  //   game.play(10); // 1
  //   game.play(10); // 2
  //   game.play(10); // 3
  //   game.play(10); // 4
  //   game.play(10); // 5
  //   game.play(10); // 6
  //   game.play(10); // 7
  //   game.play(10); // 8
  //   game.play(10); // 9
  //   game.play(10); // 10
  //   // game.play(10); // bonus
  //   // game.play(10); // bonus
  //   expect(game.getTotalScore()).toEqual(300);
  // });

});
