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

  it("can move to the next frame", function() {
    scorecard.nextFrame();
    expect(scorecard.frame).toEqual(2);
  });

  it("is limited to 11 frames", function() {
    for(var i = 0; i < 11; i++) {
      scorecard.nextFrame();
    }
    expect(scorecard.nextFrame()).toEqual("End of game!");
  });

  it("can move to the next roll", function() {
    scorecard.nextRoll();
    expect(scorecard.roll).toEqual(2);
  });

  it("can return the points for a frame", function() {
    scorecard.scoreForRoll(4);
    scorecard.scoreForRoll(3);
    expect(scorecard.scoreForFrame(1)).toEqual(7);
  });

  it("adds points to score each roll", function() {
    scorecard.scoreForRoll(4);
    scorecard.scoreForRoll(5);
    expect(scorecard.scores[1]).toEqual([4,5])
  });

  it("moves straight to the next roll after a strike", function() {
    scorecard.scoreForRoll(10);
    expect(scorecard.roll).toEqual(2);
  });

  it("adds 10 to the scores object after a strike", function() {
    scorecard.scoreForRoll(10);
    expect(scorecard.scores[1]).toEqual([10]);
  });

  it("adds next frame's points as bonus after a strike", function() {
    scorecard.scoreForRoll(10);
    scorecard.nextFrame();
    scorecard.scoreForRoll(3);
    scorecard.scoreForRoll(2);
    scorecard.bonusForStrike();
    expect(scorecard.scores[1]).toEqual([10, 5]);
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
