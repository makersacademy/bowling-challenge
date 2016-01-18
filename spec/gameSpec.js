describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
    frame = {
      firstRole: function() {},
      secondRole: function() {},
      totalScore: function() {},
    };
  });

    describe('initialisation of game', function() {
      it('starts the game with an empty array of frames', function() {
        expect(game.frames.length).toEqual(0);
      });
      it('starts the game with a score of 0', function() {
        expect(game.score).toEqual(0);
      });
    });

    // describe('#playFrame', function() {
    //   it('appends to frames a new frame');
    //     game.playFrame();
    //     expect(game.frames.length).toEqual(1);
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
