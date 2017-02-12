describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("should include 10 pins", function() {
    expect(frame.totPins).toEqual(10);
  });

  describe("#countPins", function(){
    it("should throw an error if n. of pins knocked down above pins available", function() {
      expect( function(){frame.countPins(11);} ).toThrow(new Error("Please enter a number between 0 and 10"));
    });
    it("should throw an error if entered n. of pins below 0", function() {
      expect( function(){frame.countPins(-3);} ).toThrow(new Error("Please enter a number between 0 and 10"));
    });
  });

  describe("#isStrike", function(){
    it("should return true if all pins have been knocked down", function() {
      frame.countPins(10)
      expect(frame.isStrike()).toBeTruthy();
    });
    it("should return false if some pins are still standing after a roll", function() {
      frame.countPins(7)
      expect(frame.isStrike()).toBeFalsy();
    });
  });

  describe("#isSpare", function(){
    it("should return true if all pins have been knocked down in 2 rolls", function() {
      frame.countPins(5)
      frame.countPins(5)
      expect(frame.isSpare()).toBeTruthy();
    });
    it("should return false if some pins are still standing after  2 rolls", function() {
      frame.countPins(2)
      frame.countPins(4)
      expect(frame.isSpare()).toBeFalsy();
    });
    it("should return false if it was a strike", function() {
      frame.countPins(10)
      expect(frame.isSpare()).toBeFalsy();
    });
  });

  // describe("#rollsCounter", function() {
  //   it("records the number of rolls in a frame", function() {
  //     frame.rollsCounter();
  //     expect(frame.maxRolls).toEqual(1);
  //   });
  // });
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
