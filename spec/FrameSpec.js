describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("should include 10 pins", function() {
    expect(frame.totPins).toEqual(10);
  });

  describe("#countPins", function() {
    it("should throw an error if n. of pins knocked down above pins available", function() {
      expect( function(){frame.countPins(11);} ).toThrow(new Error("Please enter a number between 0 and 10"));
    });
    it("should throw an error if entered n. of pins below 0", function() {
      expect( function(){frame.countPins(-3);} ).toThrow(new Error("Please enter a number between 0 and 10"));
    });
  });

  describe("#rollsCounter", function() {
    it("allows a max of 2 rolls per frame", function() {
      frame.rollsCounter(3);
      frame.rollsCounter(3);
      var frame = frame.rollsCounter(3);
      console.log(frame)
      expect(frame instanceof Frame).toBe(true);
    });
  });
  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });
  //
  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();
  //
  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });
  //
  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });
  //
  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');
  //
  //   player.play(song);
  //   player.makeFavorite();
  //
  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });
  //
  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);
  //
  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
});
