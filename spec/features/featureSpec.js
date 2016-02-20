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

/*As a bowler,
So that I can keep playing,
I expect the number of pins to reset when the number of frames changes.*/

describe("User Story 3", function(){
  it("resets pins when starting a new frame", function(){
    var game = new Game();
    spyOn(game, "_getRandomInt").and.returnValue(4);
    game.bowl();
    game.bowl();
    expect(game.pins).toEqual(10);
  });
});

/*As a bowler,
So that I can stop playing
I expect the game to end after 10 frames.*/

describe("User Story 4", function(){
  it("returns 'Game Over' when finishing the tenth frame", function(){
    var game = new Game();
    spyOn(game, "_getRandomInt").and.returnValue(4);
    for (var i = 0; i < 20; i++){
      game.bowl();
    };
    expect(game.endGame()).toEqual("Game Over!");
  });
});

/*As a bowler,
If I knock down all pins on my second turn,
I expect to get a 'Spare!'*/

describe("User Story 5", function(){
  it("returns the result 'Spare! if all pins down in second roll", function(){
    var game = new Game();
    spyOn(game, "_getRandomInt").and.returnValue(5);
    game.bowl();
    game.bowl();
    expect(game.result()).toEqual("Spare!");
  });
});

/*As a bowler,
If I knock down all pins on my first turn,
I expect to get a 'Strike!' and miss the next turn.*/

describe("User Story 6", function(){
  it("returns the result 'Strike! if all pins down in first roll", function(){
    var game = new Game();
    spyOn(game, "_getRandomInt").and.returnValue(10);
    game.bowl();
    expect(game.result()).toEqual("Strike!");
    expect(game.turn).toEqual(2);
  });
});

/*7. As a bowler,
If I get a strike or a spare in the tenth frame,
I expect to roll an additional throw.*/

describe("User Story 7", function(){
  it("allows a third throw if I throw a strike on the last turn", function(){
    var game = new Game();
    spyOn(game, "_getRandomInt").and.returnValue(10);
    for(var i = 0; i<10; i++){
      game.bowl();
      console.log(game.turn);
    };
    expect(game.endGame()).not.toEqual("Game Over!");
    expect(game.turn).toEqual(10);
    game.bowl();
    game.bowl();
    expect(game.endGame()).toEqual("Game Over!");
  });
});