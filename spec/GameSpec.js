describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should be able to roll a gutter game", function() {
    rollMany(0, 20);
    expect(game.score()).toEqual(0);
  });

  it("should be able to roll all ones", function() {
    rollMany(1, 20);
    expect(game.score()).toEqual(20);
  });

  it("should be able to roll a strike", function() {
    game.roll(10);
    rollMany(1, 18);
    expect(game.score()).toEqual(30);
  });

  it("should be able to roll a perfect game", function() {
    rollMany(10, 12);
    expect(game.score()).toEqual(300);
  });

  it("should be able to roll a spare", function() {
    game.roll(8);
    game.roll(2);
    rollMany(1, 18);
    expect(game.score()).toEqual(29);
  });


  function rollMany(rollScore, numberOfRolls) {
    for(var i = 0; i < numberOfRolls; i++){
      game.roll(rollScore);
    }
  }

});



/* describe("Player", function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
});
*/
