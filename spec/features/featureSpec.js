/* As a bowler,
   So that I can play a game,
   I expect the frame number to change after two throws */

describe("User Story 1", function(){
  it("changes frame number after two throws", function(){
    var game = new Game();
    game.bowl();
    game.bowl();
    expect(game.turn).toEqual(2);
  });
});

/*As a bowler,
   I expect to knock down a random number of pins each throw.*/
describe("User Story 2", function(){
  it("a bowl knocks down pins", function(){
    var game = new Game();
    spyOn(game, "_getRandomInt").and.returnValue(2);
    game.bowl();
    expect(game.pins).toEqual(8);
  });
});