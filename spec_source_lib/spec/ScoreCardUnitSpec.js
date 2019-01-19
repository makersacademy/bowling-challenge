describe("ScoreCard", function() {
  var score_card;
  

  beforeEach(function() {
    score_card = new ScoreCard();
  });

  it("should be able to store the score of a roll", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);  
  });