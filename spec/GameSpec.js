describe("A Bowling game", function() {

  var game = new Game();

  it("finds that a game exists", function() {
    expect(game).toEqual(new Game());
  });

  it("can count a gutter game", function() {
    for (var frame = 0; frame < 20; frame++){
    game.bowl(0);
    }
    expect(game.score()).toEqual(0);
  });

  it("can count score frame totals", function() {
    for (var frame = 0; frame < 20; frame++){
      game.bowl(3);
    }
    expect(game.score()).toEqual(60);
  });

  it("raises an error if more than ten is bowled", function() {
    expect(function(){ game.bowl(11); }).toThrowError("You cannot knock over more than 10 pins with one ball");
  });

});


describe("A frame", function() {

  var game = new Game();

  beforeEach(function() {
    fullgame = function(){
      for (var frame = 0; frame < 20; frame++){
        game.bowl(3);
      }
    };
  });

});
