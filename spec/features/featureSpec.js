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
    expect(game.result()).toEqual("Game Over!");
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
    };
    expect(game.result()).not.toEqual("Game Over!");
    expect(game.turn).toEqual(10);
    game.bowl();
    expect(function() {game.bowl()}).toThrow("The Game is Over");
  });
});

/*8. As a player,
So I can see my latest score,
I want to see the last points I earned.*/
describe("User Story 8", function(){
  it("see latest score", function(){
    var game = new Game();
    spyOn(game, "_getRandomInt").and.returnValue(4);
    game.bowl();
    expect(game.lastScore()).toEqual(4);
  });
});

/* As a player,
So I can see my total score,
I want to see the total points I earned.*/
describe("User Story 9", function(){
  it("see latest score", function(){
    var game = new Game();
    spyOn(game, "_getRandomInt").and.returnValue(4);
    game.bowl();
    expect(game.total()).toEqual(4);
    game.bowl();
    game.bowl();
    expect(game.total()).toEqual(12);
  });
});

/*As a player,
If I throw a strike,
I should score double the next round.*/
describe("User Story 10", function(){
  it("get double points next round if score a strike", function(){
    var game = new Game();
    spyOn(game, "_getRandomInt").and.returnValue(10);
    game.bowl();
    game._getRandomInt.and.returnValue(3);
    game.bowl();
    game.bowl();
    expect(game.total()).toEqual(22);
 });
});

/*As a player,
So I know I'm the one playing,
I can enter my name.*/
describe("User Story 11", function(){
  it("accepts name when game is started", function(){
    var game = new Game('Player');
    expect(game.player).toEqual('Player')
  });
});