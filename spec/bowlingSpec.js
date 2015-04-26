describe("Bowling Game", function(){

  beforeEach(function(){
    game = new Game();
  });

  it("will return the current frame", function(){
    expect(game.frame).toEqual(1);
  });

  it("will return the current bowl", function(){
    expect(game.ball).toEqual(1);
  });

  it("will record the knocked down pins of a ball", function(){
    game.bowl(8)
    expect(game.score()).toEqual(8);
  });

  it("will record the knocked down pins of a frame", function(){
    game.bowl(5)
    game.bowl(2)
    expect(game.score()).toEqual(7);
  });

  it("knows the next ball and frame to be played", function(){
    game.bowl(2)
    game.bowl(2)
    expect(game.ball).toEqual(1);
    expect(game.frame).toEqual(2);
  });

  it("moves to the next frame if a strike is scored", function(){
    game.bowl(10)
    expect(game.ball).toEqual(1);
    expect(game.frame).toEqual(2);
  });

  it("adds the scores of the next two bowls if a strike is made", function(){
    game.bowl(10)
    game.bowl(10)
    game.bowl(5)
    game.bowl(3)
    expect(game.score()).toEqual(51);
  });

    it("adds the scores of the bowls if a spare is made", function(){
    game.bowl(8)
    game.bowl(2)
    game.bowl(5)
    game.bowl(3)
    expect(game.score()).toEqual(23);
  });

});