function bowlingGame() {
  this.frames = []  
}

bowlingGame.prototype.gameTotal = function() {
  let total = 0;
  let game = this;
  calculateFrames(game);
  total = calculateTotal(game, total);
  calculateLastFrame(game)
  total += this.frames[this.frames.length - 1].frameTotal;
  return total;
}

bowlingGame.prototype.addFrame = function(rolls) {
  this.createFrame(rolls)
}

bowlingGame.prototype.addLastFrame = function(rolls) {
  this.createFrame(rolls);
}

bowlingGame.prototype.calculateScoreSoFar = function(scoreCurrently, rolls) { 
  scoreCurrently += rolls[0] + rolls[1]
  return scoreCurrently
}

bowlingGame.prototype.createFrame = function(rolls) {
  let frame;
  frame = new Frames(rolls);
  this.frames.push(frame);
}

function calculateFrames(game) {
  for(let i = 0; i < 9; i++) {
    if(i < 8) {
      game.frames[i].calculateFrameTotal((game.frames[i].rolls), (game.frames[i + 1].rolls), (game.frames[i + 2].rolls));
    } else {
      game.frames[i].calculateFrameTotal((game.frames[i].rolls), [(game.frames[i + 1].rolls[0]), 0], [(game.frames[i + 1].rolls[1]), 0]);
    }
  };
}

function calculateTotal(game, total) {
  // this will calculate the total of all the frames. 
  for(let i = 0; i < 10; i++) {
    total += game.frames[i].frameTotal;
  }
  return total
}

function calculateLastFrame(game) {
  // this will calculate the total of the last frame.
  game.frames[9].lastFrameTotal()
}

