describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it ("should start at a score of zero", function() {
    expect(game.score).toBe(0);
  });

  describe("first bowl of frame", function() {
    it("should bowl a number between 1 and 10", function() {
      game.bowl();
      expect(game.score).toBeLessThan(11);
      expect(game.score).toBeTrue;
    });
  });

  // it("should be able to play a Song", function() {
  //   player.play(song);
  //   expect(player.currentlyPlayingSong).toEqual(song);

  //   //demonstrates use of custom matcher
  //   expect(player).toBePlaying(song);
  // });

  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });

  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();


});
