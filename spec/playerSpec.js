describe("Player", function() {

  var player;

  beforeEach(function() {
    player = new Player();
  });

  it ("starts with a score of 0", function() {
    expect(player.score).toEqual (0);
  });

  it ("adds roll results to results array", function(){
    player.roll1(7);
    expect(player.results).toContain (7);
  });

  it ("prevents a user rolling more than 10 on their first roll", function(){
    expect(function(){player.roll1(11);}).toThrow("roll must be a number between 1 and 10")
  });

  it ("prevents a user from rolling a number more than the number of pins still standing", function(){
    player.roll1(7);
    expect(function(){player.roll2(5);}).toThrow("oops looks like there aren't that many pins standing, roll " + player.PINS_STANDING + " or below")
  });

  it ("calculates the bonus score if the user rolls a spare", function(){
    player.roll1(7);
    player.roll2(3);
    player.roll1(5);
    player.roll2(2);
    player.calculateScore();
    expect(player.score).toEqual(22);
  });

  it ("calculates the bonus score is the user rolls a strike", function(){
    player.roll1(10);
    player.roll1(7);
    player.roll2(2);
    player.calculateScore();
    expect(player.score).toEqual(28);
  });

  // it ("only stores one number in the array if the player rolls a 10"), function(){
  //
  // )};

  // it ("can play a maximum of 10 frames", function(){
  //
  // });
});
