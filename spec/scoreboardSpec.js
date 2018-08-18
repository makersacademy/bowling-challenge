describe("Scoreboard", function() {
  var score;
  beforeEach(function() {
    score = new Scoreboard();
  });

  it('starts out with empty frames', function() {
    expect(score._frames).toEqual([]);
   });
});
