game = new BowlingGame();

// Frame 1
console.log("Current frame: " + game.currentFrame);
console.log("5 and a 5, spare");
game.playerTurn(5);
game.playerTurn(5);
console.log("Total score: " + game.totalScore);
console.log(game.allFrameScores);

// Frame 2
console.log("Current frame:" + game.currentFrame);
console.log("strike");
game.playerTurn(10);
console.log("Total score: " + game.totalScore);
console.log(game.allFrameScores);

// Frame 3
console.log("Current frame:" + game.currentFrame);
console.log("strike");
game.playerTurn(10);
console.log("Total score: " + game.totalScore);
console.log(game.allFrameScores);

// Frame 4
console.log("Current frame:" + game.currentFrame);
console.log("strike");
game.playerTurn(10);
console.log("Total score: " + game.totalScore);
console.log(game.allFrameScores);

// Frame 5
console.log("Current frame:" + game.currentFrame);
console.log("7 and a 1");
game.playerTurn(7);
game.playerTurn(1);
console.log("Total score: " + game.totalScore);
console.log(game.allFrameScores);

// Frame 6
console.log("Current frame:" + game.currentFrame);
console.log("4 and a 4");
game.playerTurn(4);
game.playerTurn(4);
console.log("Total score: " + game.totalScore);
console.log(game.allFrameScores);

// Frame 7
console.log("Current frame:" + game.currentFrame);
console.log("0 and a 0");
game.playerTurn(0);
game.playerTurn(0);
console.log("Total score: " + game.totalScore);
console.log(game.allFrameScores);

// Frame 8
console.log("Current frame:" + game.currentFrame);
console.log("5 and a 5, spare");
game.playerTurn(5);
game.playerTurn(5);
console.log("Total score: " + game.totalScore);
console.log(game.allFrameScores);

// Frame 9
console.log("Current frame:" + game.currentFrame);
console.log("strike");
game.playerTurn(10);
console.log("Total score: " + game.totalScore);
console.log(game.allFrameScores);

// Frame 10
console.log("Current frame:" + game.currentFrame);
console.log("5, 5, 5");
game.playerTurn(5);
game.playerTurn(5);
game.playerTurn(5);
console.log("Total score: " + game.totalScore);
console.log(game.allFrameScores);
