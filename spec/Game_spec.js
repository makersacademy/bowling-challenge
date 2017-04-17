describe("Game", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it("Player can bowl a ball", function() {
    game.play(frame, 5);
    expect(frame.pins).toBeLessThan(10);
  });

  it("Pins should reset after 2 bowls", function() {
    game.play(frame, 1);
    game.play(frame, 4);
    expect(frame.pins).toEqual(10);
  });

  it("Should be able to tell user score after 2 bowls", function(){
    game.play(frame, 2);
    game.play(frame, 2);
    game.get_score(frame);
    expect(game.score).toEqual(4)
  })

  it("Score should be 26 after a strike and bowls of 3 & 5", function(){
    game.play(frame, 10);
    game.play(frame, 3);
    game.play(frame, 5);
    game.get_score(frame);
    expect(game.score).toEqual(26)
  })

  it("Should be able to show points of first bowl of frame", function(){
    game.play(frame, 4)
    game.bowl1_score(frame);
    expect(game.framePoints1).toEqual(4)
  })

  it("Should be able to show points of second bowl of frame", function(){
    game.play(frame, 2)
    game.play(frame, 5)
    game.bowl2_score(frame);
    expect(game.framePoints2).toEqual(5)
  })

  it("Spare should add first bowl in final frame to frame before", function(){
    for(var x = 0; x < 8; x++) {
    game.play(frame, 10)}
    game.play(frame, 5)
    game.play(frame, 5)
    game.play(frame, 5)
    game.play(frame, 5)
    game.play(frame, 5)
    expect(frame.frameScores.slice(-1)[0]).toEqual([5,5,5])
  })

  it("Should play final frame", function(){
    for(var x = 0; x < 9; x++) {
    game.play(frame, 10)}
    game.play(frame, 3)
    expect(frame.lastFrame_bowl).toHaveBeenCalled
    game.get_score(frame);
    expect(game.score).toEqual(246)
  })

  it("Game ends after a max of 3 final frames", function(){
    for(var x = 0; x < 12; x++) {
    game.play(frame, 10)}
    expect(function(){
      game.play(frame, 10);
    }).toThrow('Game is over!');
  })

  it("Should tell you score of final 3 bowl in final frame", function(){
    for(var x = 0; x < 11; x++) {
    game.play(frame, 10)}
    game.play(frame, 7)
    game.bowl3_score(frame)
    expect(game.framePoints3).toEqual(7)
  })

  it("Should be able to start a new game", function(){
    game.play(frame, 4)
    game.play(frame, 2)
    game.play(frame, 6)
    game.play(frame, 4)
    game.play(frame, 5)
    game.newGame(frame)
    expect(frame.frameScores).toEqual([])
  })

});
