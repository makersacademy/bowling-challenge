describe("Bowling Game", function(){

  beforeEach(function(){
    game = new Game();
  });

  function bowlMultiple(num, knockedDown) {
    for(var i = 0; i < num; i++) {
      game.bowl(knockedDown)
    }
  }

  it("will return the current frame", function(){
    expect(game.frame).toEqual(1);
  });

  it("will return the current bowl", function(){
    expect(game.ball).toEqual(1);
  });

  it("will record the knocked down pins of a ball", function(){
    game.bowl(8);
    expect(game.score()).toEqual(8);
  });

  it("will record the knocked down pins of a frame", function(){
    bowlMultiple(2,2);
    expect(game.score()).toEqual(4);
  });

  it("knows the next ball and frame to be played", function(){
    bowlMultiple(2,2);
    expect(game.ball).toEqual(1);
    expect(game.frame).toEqual(2);
  });

  it("moves to the next frame if a strike is scored", function(){
    game.bowl(10)
    expect(game.ball).toEqual(1);
    expect(game.frame).toEqual(2);
  });

  it("adds the scores of the next two bowls if a strike is made", function(){
    bowlMultiple(2,10);
    game.bowl(5)
    game.bowl(3)
    expect(game.score()).toEqual(51);
  });

  it("adds the scores of the bowls if a spare is made", function(){
    game.bowl(8);
    game.bowl(2);
    bowlMultiple(2,4);
    expect(game.score()).toEqual(22);
  });

  it("shows game over if you bowl more than 10 frames", function(){
    bowlMultiple(20,3);
    expect(game.bowl(3)).toEqual("Game Over you scored 60");
  });

  it("allows the user to play an 11th frame if the 10th is a strike", function(){
    bowlMultiple(18,3);
    game.bowl(10);
    expect(game.bowl(5)).not.toEqual("Game Over you scored 64")
  });
  it("allows the user to play a 12th frame if the 10th and 11th are strikes", function(){
    bowlMultiple(18,3);
    game.bowl(10);
    game.bowl(10);
    expect(game.bowl(5)).not.toEqual("Game Over you scored 64")
  });
});