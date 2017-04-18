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
    for (var i = 0; i < 8; i ++){
      player.roll1(2); player.roll2(2);
    }
    player.roll1(7);
    player.roll2(3);
    player.roll1(5);
    player.roll2(2);
    player.roll1(0);
    player.roll2(0);
    player.calculateScore();
    expect(player.score).toEqual(54);
  });

  it ("calculates the bonus score is the user rolls a strike", function(){
    for (var i = 0; i < 8; i ++){
      player.roll1(2); player.roll2(2);
    }
    player.roll1(10);
    player.roll1(7);
    player.roll2(2);
    player.roll1(0);
    player.roll2(0);
    player.calculateScore();
    expect(player.score).toEqual(60);
  });

  it ("calculates score for a gutter game", function (){
    for (var i = 0; i < 11; i ++){
      player.roll1(0); player.roll2(0);
    }
    player.calculateScore();
    expect(player.score).toEqual(0);
  });

  it ("calculates correct score when strike rolled in tenth frame", function(){
    for (var i = 0; i < 9; i ++){
      player.roll1(4); player.roll2(4);
    }
    player.roll1(10);
    player.roll1(5);
    player.roll2(2);
    player.calculateScore();
    expect(player.score).toEqual(96);
  });

  it ("calculates correct score when spare rolled in tenth frame", function(){
    for (var i = 0; i < 9; i ++){
      player.roll1(4); player.roll2(4);
    }
    player.roll1(1);
    player.roll2(9);
    player.roll1(2);
    player.roll2(3);
    player.calculateScore();
    expect(player.score).toEqual(89);
  });

  // it ("can play a maximum of 10 frames", function(){
  //
  // });
});
