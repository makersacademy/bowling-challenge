describe("UserScore", function() {

  beforeEach(function() {
    userScore = new User();
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

  it("user can enter their results for each frame and receive their overall score", function() {
    userScore.addFrame([1, 4]);
    userScore.addFrame([9, 1]);
    userScore.addFrame([10, 0]);
    userScore.addFrame([3, 6]);
    userScore.addFrame([10, 0]);
    userScore.addFrame([10, 0]);
    userScore.addFrame([7, 2]);
    userScore.addFrame([4, 5]);
    userScore.addFrame([2, 2]);
    userScore.addFrame([10, 10, 10]);
    expect(userScore.calculateScore()).toEqual(151);
  })

});
