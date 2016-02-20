describe("Player", function() {

  var player;

  beforeEach(function() {
    player = new Player();
  });

  it ("starts with a score of 0", function() {
    expect(player.score).toEqual (0);
  });

  it ("returns a number when ball is rolled", function() {
    spyOn(player, "roll").and.returnValue(7);
    expect(player.roll()).toEqual(7);
  });

  it ("adds roll results to results array", function(){
    player.roll();
    expect(player.results).toContain (pinsDown);
  });

  // it ("can play a maximum of 10 frames", function(){
  //
  // });
});
