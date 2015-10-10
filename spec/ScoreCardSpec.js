describe("ScoreCard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new ScoreCard();
  });

  it("should keep track of the frame", function() {
    expect(scorecard.frame).toEqual(1);
  });

  it("should know there are 10 bowling pins at the start", function() {
    expect(scorecard.pins).toEqual(10);
  });

  it("can return the total for each roll", function() {
    expect(scorecard.scoreForRoll(5)).toEqual(5);
  });


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
