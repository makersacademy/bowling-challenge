// _______     ______    __   __  ___  ___        __    _____  ___    _______
// |   _  "\   /    " \  |"  |/  \|  "||"  |      |" \  (\"   \|"  \  /" _   "|
// (. |_)  :) // ____  \ |'  /    \:  |||  |      ||  | |.\\   \    |(: ( \___)
// |:     \/ /  /    ) :)|: /'        ||:  |      |:  | |: \.   \\  | \/ \
// (|  _  \\(: (____/ //  \//  /\'    | \  |___   |.  | |.  \    \. | //  \ ___
// |: |_)  :)\        /   /   /  \\   |( \_|:  \  /\  |\|    \    \ |(:   _(  _|
// (_______/  \"_____/   |___/    \___| \_______)(__\_|_)\___|\____\) \_______)
//
//  __      ________
// |" \    /"       )
// ||  |  (:   \___/
// |:  |   \___  \
// |.  |    __/  \\
// /\  |\  /" \   :)
// (__\_|_)(_______/
//
//  _______  ____  ____  _____  ___
// /"     "|("  _||_ " |(\"   \|"  \
// (: ______)|   (  ) : ||.\\   \    |
// \/    |  (:  |  | . )|: \.   \\  |
// // ___)   \\ \__/ // |.  \    \. |
// (:  (      /\\ __ //\ |    \    \ |
// \__/     (__________) \___|\____\)

var Scorecard = function() {
  this.gameStorage = [];
  this.turnNumber = 1;
  this.currentTurnStorage = [];
  this.previousTurnStorage = [];
  this.twoTurnsAgoStorage = [];
  this.currentStageOfTurn = 1;
};

Scorecard.prototype.roll = function(pinsHit) {
  this.verifyRoll(pinsHit);
  this.currentTurnStorage.push(pinsHit);
  if (this.shouldAddSpareBonus()) {
    this.previousTurnStorage.push(pinsHit);
  };
  if (this.shouldAddStrikeBonus()) {
    this.previousTurnStorage.push(pinsHit);
  };
  if (this.shouldAddCumulativeStrikeBonus()) {
    this.twoTurnsAgoStorage.push(pinsHit);
  };
  this.moveToNextStageOfTurn();
};

Scorecard.prototype.moveToNextStageOfTurn = function () {
  if (this.isRollOne()) {
    this.currentStageOfTurn = 2 ;
  }
  else if (this.shouldReset()) {
    this.resetTurn();
  }
  else if (this.thereWillBeAThirdRoll()) {
    this.currentStageOfTurn = 3;
  };
};

Scorecard.prototype.resetTurn = function () {
    this.updateGameStorageWithTurn(this.currentTurnStorage);
    this.twoTurnsAgoStorage = this.previousTurnStorage;
    this.previousTurnStorage = this.currentTurnStorage;
    this.currentTurnStorage = [];
    this.currentStageOfTurn = 1;
};

Scorecard.prototype.verifyTurn = function(firstRoll, secondRoll) {
  if ((+firstRoll + +secondRoll > 10 || +firstRoll + +secondRoll < 0)  && this.turnNumber < 10) {
    throw "Before bonuses, two rolls can only score 0 to 10 inclusive";
  }
  else {
    return +firstRoll + +secondRoll;
  }
};

Scorecard.prototype.updateGameStorageWithTurn = function(turnResult) {
  this.verifyTurn(this.currentTurnStorage[0],this.currentTurnStorage[1]);
  this.gameStorage.push(turnResult);
  if (this.turnNumber === 10 && this.currentStageOfTurn === 3){
    this.twoTurnsAgoStorage.pop();
  };
  this.increaseTurnCount();
};

Scorecard.prototype.increaseTurnCount = function () {
  this.turnNumber ++
  if (this.turnNumber > 11) {
    this.turnNumber = "Game Over";
    throw "You only get 10 turns";
  };
};

Scorecard.prototype.flatten = function(arrayOfArrays){
  var flattened = [];
  flattened = flattened.concat.apply(flattened, arrayOfArrays);
  return flattened;
};

Scorecard.prototype.sumArray = function(array) {
  return array.reduce(function(a, b) {
    return a + b;
  })
};

Scorecard.prototype.cumulativeScore = function(arrayOfArrays){
  var allScoresFlatArray = this.flatten(arrayOfArrays);
  var totalScore = this.sumArray(allScoresFlatArray);
  return totalScore;
};

Scorecard.prototype.isASpareOrStrike = function(turn){
  return this.isASpare(turn) || this.isAStrike(turn);
};

Scorecard.prototype.isASpare = function(turn){
  return turn[0] < 10 && this.sumArray(turn) === 10;
;}

Scorecard.prototype.isAStrike = function(turn){
  return turn[0] === 10;
;}

Scorecard.prototype.shouldAddSpareBonus = function(){
  return this.currentStageOfTurn === 1
    && this.turnNumber > 1
    && this.isASpareOrStrike(this.previousTurnStorage)
};

Scorecard.prototype.shouldAddStrikeBonus = function(){
  return this.currentStageOfTurn === 2
    && this.turnNumber > 1
    && this.isAStrike(this.previousTurnStorage);
};

Scorecard.prototype.shouldAddCumulativeStrikeBonus = function(){
  return this.currentStageOfTurn !== 2
    && this.turnNumber > 2
    && this.isAStrike(this.previousTurnStorage)
    && this.isAStrike(this.twoTurnsAgoStorage);
};

Scorecard.prototype.shouldReset = function () {
  return this.isNotLastTurn() || this.isRollThree();
};

Scorecard.prototype.isRollOne = function () {
  return this.currentStageOfTurn === 1;
};

Scorecard.prototype.isRollTwo = function () {
  return this.currentStageOfTurn === 2;
};


Scorecard.prototype.thereWillBeAThirdRoll = function () {
  return this.isLastTurn() && this.isAStrike && this.isRollTwo();
};

Scorecard.prototype.isRollThree = function () {
  return this.currentStageOfTurn === 3;
};


Scorecard.prototype.isLastTurn = function () {
  return this.turnNumber === 10
};

Scorecard.prototype.isNotLastTurn = function () {
  return this.turnNumber < 10;
};

Scorecard.prototype.verifyRoll = function(roll) {
  if (roll > 10 || roll < 0) {
    throw "Rolls can only score 0 to 10 inclusive";
  }
  else {
    return roll;
  }
};
