describe("Score", function() {
  var score;

  beforeEach(function() {
    score = new Score();
  });

  describe("storing frames", function() {
    it("should score frames as arrays inside an array", function() {
      score.addRoll(1);
      score.addRoll(4);
      score.addRoll(7);
      score.addRoll(1);
      expect(score.results).toEqual([[1,4],[7,1]]);
    });

    it("should close frame on strike", function(){
      score.addRoll(10);
      score.addRoll(7);
      score.addRoll(1);
      expect(score.results).toEqual([[10],[7,1]])
    });

    xit("should only score 10 frames + bonus", function(){

    });
  });

  describe("calculating result", function() {
    it("should add a point for each pin", function() {
      score.addRoll(1);
      score.addRoll(4);
      score.addRoll(7);
      score.addRoll(1);
      expect(score.totalScore).toEqual(13)
    });
  });
});
  // demonstrates use of spies to intercept and test method calls
  // xit("tells the current song if torite", function() {
  //   spyOn(song, 'persistFavoriteStatus');
  //
  //   player.play(song);
  //   player.makeFavorite();
  //
  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });

  //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   xit("should throw an exception if song is already playing", function() {
  //     player.play(song);
  //
  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
  //});
