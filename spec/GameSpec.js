var game = new Game();

describe("A Bowling game", function() {

  beforeEach(function() {
    guttergame = function(){
      for (var frame = 0; frame < 20 ; frame++){
        game.bowl(0);
      }
    };
  });

  it("finds that a game exists", function() {
    expect(game).toEqual(new Game());
  });

  it("can count a gutter game", function() {
    guttergame();
    expect(game.checkScore()).toEqual(0);
  });

  it("raises an error if more than ten is bowled", function() {
    expect(function(){ game.bowl(11); }).toThrowError("You cannot knock over more than 10 pins with one ball");
  });
});

describe("A finished game", function(){
  var game = new Game();

  it("can count a 10 frame score", function() {
    for (var set = 0; set < 20 ; set++){
      game.bowl(3);
    }
    expect(game.checkScore()).toEqual(60);
  });
});

describe("Has a maximum amount of balls bowled", function() {

  it("over ten frames", function(){
    for (var ball = 0; ball < 20 ; ball++){
    }
      expect(function(){ game.bowl(3); }).toThrowError("Game over");
  });
});

describe("A finished frame", function() {
  var game = new Game();
  it("can clear a frame before the next ball is bowled", function(){
    game.bowl(2);
    game.bowl(3);
    expect(game.frameCount.length).toBe(0);
  });
});

describe("The score", function() {
  var game = new Game();

  it("adds a spare bonus to the frame it is bowled on", function(){
    game.bowl(4);
    game.bowl(6);
    game.bowl(3);
    game.bowl(7);
    game.bowl(3);
    game.bowl(4);
    expect(game.checkScore()).toBe(33);
  });
});

describe("The score", function() {
  var game = new Game();

  it("adds a strike bonus to the frame it is bowled on", function(){
    game.bowl(10);
    game.bowl(4);
    game.bowl(3);
    expect(game.checkScore()).toBe(24);
  });
});
