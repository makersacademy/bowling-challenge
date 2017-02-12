var frames = [];
var game = new Game();

function startGame(){
  let frame = new Frame();
  game._frames.push(frame);
}


function addFrame(){
  if (game._frames.length >= 10) {
    console.log("The game is over! You scored " + game.currentScore);
  } else {
    let frame = new Frame();
    game._frames.push(frame);
    game._currentFrameIndex += 1;
  }
}

startGame();
