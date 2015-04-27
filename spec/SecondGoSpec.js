describe('Game', function(){

  beforeEach(function(){
    game = new Game();
  });

it('can record scores', function(){
  game.frameOne(4, 4);
  expect(game.score).toEqual([4, 4]);
});

it('can record further scores in the correct places', function(){
  game.frameOne(1, 1);
  game.frameTwo(2, 2);
  game.frameThree(3, 3);
  game.frameFour(4, 4);
  game.frameFive(5, 5);
  game.frameSix(6, 6);
  game.frameSeven(7, 7);
  game.frameEight(8, 8);
  game.frameNine(9, 9);
  game.frameTen(10, 10, 10)
  expect(game.score).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5,
                              6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 10])
});









});
