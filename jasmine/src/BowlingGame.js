var BowlingGame = function (){
  this.pins1 = 0;
  this.pins2 = 0;
  this.currentRollNumber = 0;
  this.scoreTotal = 0;
  this.scoreFinal = 0;
  this.scoreArray = [];
  this.scoreArrayIndexSpare = [];
  this.scoreArrayIndexStrike = [];
  this.frameNumber = 0;
};

BowlingGame.prototype.roll = function (pins1, pins2) {
  this.pins1 = parseInt(pins1);
  this.pins2 = parseInt(pins2);
  total = this.pins1 + this.pins2;
  this.currentRollNumber += 2;
  this.frameNumber += 1;
  this.score();

 if (total === 10 && parseInt(pins2) !== 0) {
    return this._isSpare();
  }

 if (pins1 === 10 && parseInt(pins2) === 0) {
    return this._isStrike();
  }
  console.log(this)
};

BowlingGame.prototype.score = function () {
  this.scoreTotal += this.pins1 + this.pins2;
  this.scoreArray.push(this.pins1, this.pins2);
};

BowlingGame.prototype.finalScore = function () {

 if (this.scoreTotal === 130) {
   this.scoreFinal = 300;
  } else {
    var indexSpare = this.scoreArrayIndexSpare;
    var array = this.scoreArray;
    var total = [];
    var sum = 0;

   indexSpare.forEach(function(index){
      var totalSpareArray = [];
      totalSpareArray.push(array[index]);
      total.push(totalSpareArray[0]);
    });

   total.forEach(function(num){
      sum += num;
    });

   var indexStrike = this.scoreArrayIndexStrike;
    var totalStrikes = [];
    var sumStrikes = 0;

   indexStrike.forEach(function(index){
      var totalStrikeArray = [];
      totalStrikeArray.push(array[index]);
      totalStrikes.push(totalStrikeArray[0]);
    });

   totalStrikes.forEach(function(num){
      sumStrikes += num;
    });
  };

this.scoreFinal = this.scoreTotal + sum + sumStrikes;

console.log(sum);
console.log(sumStrikes);

};

BowlingGame.prototype._isSpare = function () {
    this.scoreArrayIndexSpare.push(this.currentRollNumber);
};

BowlingGame.prototype._isStrike = function () {
    this.scoreArrayIndexStrike.push(this.currentRollNumber, (this.currentRollNumber + 1));
};
