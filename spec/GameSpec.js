describe("A Bowling game", function() {

  var game = new Game();

  beforeEach(function() {
    threesgame = function(){
      for (var frame = 0; frame < 20 ; frame++){
        game.bowl(3);
      }
    };
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
    expect(game.score()).toEqual(0);
  });

  it("can count score frame totals", function() {
    threesgame();
    expect(game.score()).toEqual(60);
  });

  it("raises an error if more than ten is bowled", function() {
    expect(function(){ game.bowl(11); }).toThrowError("You cannot knock over more than 10 pins with one ball");
  });

  it("has a maximum of 10 frames", function() {
    threesgame();
    expect(function(){ game.bowl(3); }).toThrowError("Game over");
  });
});

describe("A frame", function() {

  var game = new Game();

  it("can clear a frame before the next ball is bowled", function(){
    game.bowl(2);
    game.bowl(3);
    expect(game.frameCount.length).toBe(0);
  });

  describe("A spare", function() {
    // it("records the spare when it is bowled", function(){
    //
    // });
  });
});
