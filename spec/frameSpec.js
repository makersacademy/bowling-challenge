describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
    spyOn(Math, 'random').and.returnValue(0.4);

  });

  describe('new game parameters', function() {

    it('starts with no pins hit', function() {
      expect(frame.pinsHit).toEqual(0);
    });
    it('starts with 10 pins standing', function() {
      expect(frame.pinsLeft).toEqual(frame.MAX_PINS);
    });
  });

  describe('#firstRole', function() {
    beforeEach(function() {
        frame.firstRole();
        });

    it('ensures pins hit are removed from frame', function() {
      expect(frame.pinsLeft).toEqual(6);
    });
  });

  describe('#secondRole', function() {
    beforeEach(function() {
      frame.firstRole();
      frame.secondRole();
    });

    it('ensures max pins that can be hit are the pins left from firstRole', function() {
      expect(frame.pinsLeft).toEqual(4);
    });
  });

  describe('#resetFrame', function() {

    it('ensures number of pins left is reset to 10', function() {
      frame.resetFrame();
      expect(frame.pinsLeft).toEqual(frame.MAX_PINS);
    });
    it('ensures number of pins hit is reset to 0', function() {
      frame.resetFrame();
      expect(frame.pinsHit).toEqual(0);
    });
  });
// describe('new game parameters', function() {
//
//   it('starts with no pins hit', function() {
//     expect(frame.pinsHit).toEqual(0);
//   });
//   it('starts with 10 pins standing', function() {
//     expect(frame.pinsLeft).toEqual(frame.MAX_PINS);
//   });
// });


});


    //demonstrates use of custom matcher
    // expect(game).toBePlaying(song);

  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     game.play(song);
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
