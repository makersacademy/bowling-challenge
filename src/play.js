let game = new Game();

function gameStatus(){
  let f = game.frames.length;
  console.log("\nScoreboard:")
  for(i = 1; i <= f; i++){
    let frame = game.frames[i - 1];
    console.log("Frame: " + i)
    console.log("Score: " + frame.score);
  }
}

function turn(){
  // 2 rolls only
}

console.log("Current Frame: " + game.frames.length);
game.roll(8);
gameStatus();
