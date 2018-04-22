let game = new Game();

function scoreboard(){
  let f = game.frames.length;
  console.log("\nScoreboard:")
  game.frames.forEach(function(frame){
    console.log("\nFrame: " + frame.number);
    if(frame.rolls.length === 1){
      console.log("\nRoll: 1")
      console.log("Score: " + frame.rolls[0]);
    }
    else{
      console.log("\nRoll: 1")
      console.log("Score: " + frame.rolls[0]);
      console.log("\nRoll: 2")
      console.log("Score: " + frame.rolls[1]);
    }
    console.log("\nFrame total: " + frame.total());
  });
  console.log("Game total: " + game.total());
}

console.log(game.total());
game.roll(8);
console.log(game.total());
game.roll(2);
console.log(game.total());
game.roll(3);
scoreboard();
