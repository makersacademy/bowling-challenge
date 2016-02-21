describe("Player", function() {

  var player;

  beforeEach(function() {
    player = new Player();
  });

  it ("starts with a score of 0", function() {
    expect(player.score).toEqual (0);
  });

  it ("adds roll results to results array", function(){
    player.roll(7);
    expect(player.results).toContain (7);
  });

  it ("calculates the score", function(){
    player.roll(3);
    player.roll(5);
    player.calculateScore();
    expect(player.score).toEqual(8);
  });

  // it ("only stores one number in the array if the player rolls a 10"), function(){
  //
  // )};

  // it ("can play a maximum of 10 frames", function(){
  //
  // });
});
