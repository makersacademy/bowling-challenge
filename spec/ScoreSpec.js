describe("Score", function() {
  var score;

  beforeEach(function() {
    score = new Score();
  });

  it("should score frames as arrays inside an array", function() {
    score.addRoll(1);
    console.log('Added ' + 1)
    score.addRoll(4);
    score.addRoll(7);
    score.addRoll(1);
    expect(score.results).toEqual([1,4],[7,1]);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    xit("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

  });

  // demonstrates use of spies to intercept and test method calls
  xit("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    xit("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
});
