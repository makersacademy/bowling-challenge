function BowlingGame() {
  this.rolls = [];
  this.currentFrame = 1;
  this.rollNumber = 1;
  this.finalPins = 10;
  this.strike = false;
  this.spare = false;
  this.currentPins = 10;
};

BowlingGame.prototype.randomRoll = function(){
  if (this.currentFrame > 10) { throw "No more throws, the game is over!" }
  pins = Math.floor(Math.random() * (this.currentPins + 1))
    this.currentPins -= pins
    this.roll(pins);
  return pins;
}

BowlingGame.prototype.notify = function(type){
  console.log("Congratulations! You scored a " + type + "!");
return "Congratulations! You scored a " + type +"!";
}

BowlingGame.prototype.isGameOver = function(){
  return this.currentFrame > 10;
}

BowlingGame.prototype.setNewFrame = function(){
  this.currentPins = 10;
  this.currentFrame++;
}

BowlingGame.prototype.finalFrame = function(pins){
  if (this.rollNumber == 1) {
    this.finalPins -= pins;
    this.rollNumber++;
  }
  else if (this.rollNumber == 2) {
    this.finalPins -= pins;
    if (this.finalPins <= 0) {
      this.rollNumber++;
    }
    else {
      this.setNewFrame();
    }

  }
  else if (this.rollNumber == 3) { this.currentFrame++ };
}

BowlingGame.prototype.roll = function(pins){
  this.rolls.push(pins);
  if (this.currentFrame == 10) {
    this.finalFrame(pins);
  }

  else if (pins == 10 && this.rollNumber == 1) {
  this.setNewFrame();
  }
  else if (this.rollNumber == 1) {  
    this.rollNumber++;
  }
  else
  {
    this.rollNumber--;
    this.setNewFrame();
  };
}

BowlingGame.prototype.getFrame = function(){
  return this.currentFrame;
}

BowlingGame.prototype.score = function(){
  var currentFrame = this.getFrame();
  var result = 0;
  var rollIndex = 0;
  var game = this;

  for (var frameIndex = 1; frameIndex <= currentFrame; frameIndex++){
    if (isStrike()) {
      this.notify("strike");
      if (!isNaN(getStrikeScore())) {
        result += getStrikeScore();
        rollIndex++;
      }
      else {
        return result };
    }
    else if (isSpare()) {
      this.notify("spare");
      if (!isNaN(getSpareScore())){
        result += getSpareScore();
        rollIndex += 2;
      }
      else {
        return result;
      }
    }
    else {
      if (!isNaN(getNormalScore())){
        result += getNormalScore();
        rollIndex += 2;
      } else {
        return result;
      }
    }
  }
  return result;


  function isStrike(){
    return game.rolls[rollIndex] == 10
  }

  function isSpare(){
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10;
  }

  function getStrikeScore(){
    return  game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

  function getSpareScore(){
    return  game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

  function getNormalScore(){
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  }
}

