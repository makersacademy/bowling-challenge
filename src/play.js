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
	    console.log("\nFrame total: " + frame.calcTotal());
    }
  });
  console.log("Game total: " + game.total());
}

game.roll(8);
game.roll(2);
game.roll(10);
game.roll(3);
game.roll(4);
scoreboard();
