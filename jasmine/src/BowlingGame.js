var BowlingGame = function (){
  this.pins1 = 0;
  this.pins2 = 0;
  this.currentRollNumber = 0;
  this.scoreTotal = 0;
  this.scoreFinal = 0;
  this.scoreArray = [];
  this.scoreArrayIndexSpare = [];
  this.totalSpare = [];
  this.spare = 0;
};

BowlingGame.prototype.roll = function (pins1, pins2) {
  this.pins1 = pins1;
  this.pins2 = pins2;
  total = pins1 + pins2;
  this.currentRollNumber += 2;
  if (total === 10) {
    return this._isSpare();
  }
};

BowlingGame.prototype.score = function () {
  this.scoreTotal += this.pins1 + this.pins2;
  this.scoreArray.push(this.pins1, this.pins2);
};

BowlingGame.prototype.finalScore = function () {
  var ind = this.scoreArrayIndexSpare;
  var array = this.scoreArray;
  var total = [];
  var sum = 0;
  
  ind.forEach(function(index){
    var totalSparee = [];
    totalSparee.push(array[index]);
    total.push(totalSparee[0]);

});
total.forEach(function(num){
  sum += num;
});
this.scoreFinal = this.scoreTotal + sum;
console.log(sum);

};

BowlingGame.prototype._isSpare = function () {
    this.scoreArrayIndexSpare.push(this.currentRollNumber);
};

BowlingGame.prototype._isStrike = function () {

};
