describe('Game', function() {

  var game;
});

  describe('Game start setup', function() {

    it('starts with 10 frames', function(){
      game = new Game();
      expect(game.frame).toEqual(10);
    });
    
    it('each frame contains 2 rolls', function(){
      expect(game.rolls).toEqual(2);
    });

    it('every go the rolls should decrease by 1', function() {
    expect(game.rolls).toEqual(2);
    game.go();
    expect(game.rolls).toEqual(1);
  });
  });
