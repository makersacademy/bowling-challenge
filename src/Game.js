function Game() {
  this.rounds = [];
  this.currentRound = null;
  this.score = 0;

  // this.prevBowl = null;
};

Game.prototype.newRound = function () {
  if (this.rounds.length < 9){
    this.currentRound = new Round();
  }
  else if (this.rounds.length === 9){
    this.currentRound = new Round(); //could be new finalRound?
  }
  else {
    alert("The game is over! Refresh the page to play again.");
  }
};

Game.prototype.bowl = function () {
  if (this.currentRound.firstRoll === null) {
    this.firstRoll();
  } else {
    this.secondRoll();
  }
};

Game.prototype.firstRoll = function () {
  this.currentRound.createFirstRoll();
};

Game.prototype.secondRoll = function () {
  if (this.currentRound.strike !== true) {
    this.currentRound.createSecondRoll();
  }
  this.rounds.push(this.currentRound);
  this.scoreGame();
  this.endRound();
  this.newRound();
};

Game.prototype.endRound = function () {
  this.currentRound = null;
};

Game.prototype.scoreGame = function () {
  this.score = 0;
  
  this.rounds.forEach(function(round) {
    var roll1 = round.firstRoll;



  });

}

  // this.rounds.forEach(function(round) {
  //   var roll1 = round.firstRoll;
  //
  //
  //   this.score = this.score + (roll1Pins + roll2Pins);
  // });
