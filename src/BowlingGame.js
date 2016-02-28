function BowlingGame() {
  this.rolls = [];
  this.currentFrame = 1;
  this.rollNumber = 1;
  this.finalPins = 10;
};


BowlingGame.prototype.finalFrame = function(pins){
 if (this.rollNumber == 1) {
   this.finalPins -= pins
     this.rollNumber++
 }
 else if (this.rollNumber == 2) {
   this.finalPins -= pins
     if (this.finalPins <= 0) {
       this.rollNumber++
     }
     else {
       this.currentFrame++
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
    this.currentFrame++
  }
  else if (this.rollNumber == 1) {  
    this.rollNumber++
  }
  else
  {
    this.rollNumber--
      this.currentFrame++
  };
}

BowlingGame.prototype.getFrame = function(){
  return this.currentFrame;
}

BowlingGame.prototype.score = function(){
  var currentFrame = this.getFrame()
  var result = 0;
  var rollIndex = 0;
  var game = this;

  for (var frameIndex = 1; frameIndex < currentFrame; frameIndex++){
    if (isStrike()) {
      result += getStrikeScore();
      rollIndex++;

    }
    else if (isSpare()) {
      result += getSpareScore();
      rollIndex += 2;
    }
    else {
      result += getNormalScore();
      rollIndex += 2;
    }
  }
  return result;

  var game = this;

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

