describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('has a default player name of Player 1 if no name is given', function() {
    expect(game.playerName).toBe('Player 1');
  });

  it('stores the player name if one is specified', function() {
    game = new Game('Simon');
    expect(game.playerName).toBe('Simon');
  });

  it('keeps track of the frame number and starts with 1', function() {
    expect(game.currentFrame).toEqual(1);
  });

  it('has an array for storing frames', function() {
    expect(game.frames).toEqual({});
  })

  describe('newFrame', function() {
    it('updates the frame number each time a new frame is started', function() {
      game.newFrame();
      expect(game.currentFrame).toEqual(2);
      game.newFrame();
      expect(game.currentFrame).toEqual(3);
      for (i=1; i<=5; i++) {
        game.newFrame();
      }
      expect(game.currentFrame).toEqual(8);
    });

    it('will not allow more than 10 frames in a game', function() {
      for (i=1; i<=20; i++) {
        game.newFrame();
      }
      expect(game.currentFrame).toEqual(10);
    });



  });

});
