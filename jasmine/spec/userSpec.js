describe("UserScore", function() {

  beforeEach(function() {
    userScore = new UserScore();
  })

  it("user's score saves the score from 10 frames", function() {
    for(i = 0; i < 10; i++) {
      userScore.addFrame();
    };
    expect(userScore.frames.length).toEqual(10);
  });

  it("user can add the score from a frame of 2 rolls to their overall score", function() {
    userScore.addFrame([3,5]);
    expect(userScore.frames).toContain([3,5]);
  });

});
