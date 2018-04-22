let game = new Game();

function scoreboard(){
  console.log("\nScoreboard:");
  game.frames.forEach(function(frame){
    if(frame.rolls.length !== 0){
	    console.log("\nFrame: " + frame.number);
	    if(frame.rolls.length === 1){
		    console.log("\nRoll: 1");
		    console.log("Score: " + frame.rolls[0]);
	    }
	    else{
		    console.log("\nRoll: 1");
		    console.log("Score: " + frame.rolls[0]);
		    console.log("\nRoll: 2");
		    console.log("Score: " + frame.rolls[1]);
	    }
	    console.log("\nFrame total: " + frame.total);
    }
  });
  console.log("Game total: " + game.total());
}

console.log(game);
game.roll(10);
console.log(game.bonus[0]);
game.roll(10);

console.log(game.bonus[1].frame);
game.roll(2);
console.log(game.bonus[0].frame);
console.log(game.bonus[1]);
game.roll(4);
console.log(game.bonus[0]);
// console.log(game);
// game.roll(7);
// game.roll(5);
// game.roll(3);
// game.roll(10);
// game.roll(6);
// game.roll(4);
// game.roll(10);
// game.roll(10);
// game.roll(8);
// game.roll(2);
// game.roll(9);
// game.roll(1);
// game.roll(0);
// game.roll(7);
scoreboard();
