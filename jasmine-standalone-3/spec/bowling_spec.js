
let game;
beforeEach(function(){
  game = new BowlingGame();
})


it ('It should return 0 for sum of all zeros',()=>{
rollMany(0,20)
  expect(game.score()).toEqual(0);
})

it('Should return 20 for a game of all 1s', ()=> {
  rollMany(1,20)
  expect(game.score()).toEqual(20);
});


it('returns the correct score when spare is rolled', ()=> {
  game.roll(5);
  game.roll(5);
  game.roll(3);
  rollMany(0,17);
  expect(game.score()).toEqual(16)
});


it('Returns the correct score if a strike is rolled', function () {
  game.roll(10);
  game.roll(3);
  game.roll(4);
  rollMany(0,17);
  expect(game.score()).toEqual(24)
});


function rollMany(pins,rolls){
  for (let i=0;i<rolls;i++){
    game.roll(pins);
  }

}
