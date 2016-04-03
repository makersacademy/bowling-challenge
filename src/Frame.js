function Frame(roll1, roll2){
  this.roll1 = roll1;
  this.roll2 = roll2;
  this.scorePending = false
  this.bonus = "none"
}
Frame.prototype.tally = function() {
  var score = (this.roll1 + this.roll2);
  // console.log(this.roll1 + this.roll2 === 10)

  if (this.roll1 === 10) {
    this.scorePending = true;
    this.bonus = "strike";
    return score;
  } else
  if (this.roll1 + this.roll2 === 10) {
    this.scorePending = true;
    this.bonus = "spare";
    return score;
  } else {
    return score;
   }
}
