describe("Game", function(){

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("Rolls the ball in the gutter", function(){
    rollingMany(0,20);
    expect(game.score()).toEqual(0);
  });

  it("Rolls only ones during the whole set of frames", function() {
    rollingMany(1,20)
    expect(game.score()).toEqual(20);
  });

  it("Rolls a spare", function(){
    game.roll(5);
    game.roll(5);
    game.roll(3);

    rollingMany(0,17)
    expect(game.score()).toEqual(16);
  });

  it("Rolls a strike", function(){
    game.roll(10);
    game.roll(4);
    game.roll(4);

    rollingMany(0,16)
    expect(game.score()).toEqual(26);
  });

  it("Rolls only strikes during the whole set of frames", function() {
    rollingMany(10,12)
    expect(game.score()).toEqual(300);
  });

  function rollingMany(pins, rolls){
    for (var i = 0; i < rolls; i++){
      game.roll(pins)
    }
  };

});
