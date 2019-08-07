describe('Start Game', function(){
  beforeEach(function(){
    game = new Game();
    frame =new Frame();
  });

  it('Score starts at 0', function(){
    expect(game._totalScore).toEqual(0);
  });

  it('Can record frames', function() {
    expect(function() {game.add(frame)}).not.toThrow();
  });

  it('Can return total score for Game', function() {
    spyOn(frame, "frameScore").and.returnValue(10);
    game.add(frame);
    game.add(frame);
    expect(game.totalScore()).toEqual(20);
  })
//
//   it('Game is not finished when started', function() {
//     expect(game._gameOver).toEqual(false);
//   });
// });
//
// describe('Play Game', function(){
//   beforeEach(function(){
//     game = new Game();
//   });
//
//   it('Adds the score of a completed frame', function () {
//     spyOn(frame, "score").and.returnValue(5);
//     game.updateScore(frame)
//     expect(game._totalScore).toEqual(5);
//   });

});
