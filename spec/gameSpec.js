describe('Game', function() {

  var Game;
});

describe('Game start setup', function() {

    it('starts with 10 frames', function(){
      game = new Game();
      expect(game.frame_total).toEqual(10);
    });
  });